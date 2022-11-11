import "./Header.css";
import { uid } from "../App";

import { useDbUpdate } from "../utilities/firesbase";
import { lastCheckpoint } from "../utilities/api";

const Header = ({ data, setData }) => {
    const [update, result] = useDbUpdate(`/users/${uid}/packages`);
    return (
        <header className="header">
            {/* This is for styling */}
            <button id="balancing-button" type="button" className="btn btn-outline-danger" onClick={() => updatePackages(data, setData, update)}>R</button>
            <h1>One Track</h1>
            <button id="refresh-button" type="button" className="btn btn-outline-danger" onClick={() => updatePackages(data, setData, update)}>
                R
            </button>
        </header>
    )
}

const updatePackages = async (data, setData, update) => {
    console.log("I'm updating the data");
    let newData = await Object.entries(data).map(async ([id, val]) => {
        if (val.response == "Delivered") { return; }
        let tracking_info = await lastCheckpoint(val.apiID);
        if (tracking_info.data.tag == "Pending") { return; }
        var newPackageAPI = {
            "package_name": val.package_name,
            "carrier": val.carrier,
            "last_updated": tracking_info.data.checkpoint.checkpoint_time,
            "last_checkpoint_location": tracking_info.data.checkpoint.city,
            "response": tracking_info.data.tag,
            "apiID": tracking_info.data.id
        }

        console.log(newPackageAPI);
        update({ [id]: newPackageAPI });

        setData({ [id]: newPackageAPI, ...data });
    })


}

export default Header;