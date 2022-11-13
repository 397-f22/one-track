import "./AddPackageForm.css";
import {addNewPackage, lastCheckpoint} from '../utilities/api';
import { useState } from "react";
import { uid } from "../App";

import { useDbUpdate } from "../utilities/firebase";

const AddPackageForm = ({data, setData}) => {
    const [update, result] = useDbUpdate(`/users/${uid}/packages`);

    const saveData = async (id, carrier) => {
        const response = await addNewPackage(id, carrier)
        return response
    }
    const submit = async (evt) => {
        evt.preventDefault();
        const id = document.getElementById("trackingNumber").value;
        const carrier = document.getElementById("carrier").value;
        // if (name in data){
        //     setMessage("Oops not a new place");
        //     console.log("Oops not a new place");
        // }
        // else {
        var newPackage = {
                "package_name": document.getElementById("packageName").value,
                "carrier": "UPS",
                "estimated_delivery": "2021-09-20T14:03:00",
                "last_checkpoint_location": "Skokie, IL",
                "response": "In Transit"
        }
        // add the tracking number to the api and put the new id into the data
        let response = await saveData(id, carrier);

        //console.log(apiData)

        console.log(response);
        // need to deal with if we get a 400 error aka it is already in the API
        // 

        let tracking_info = await lastCheckpoint(response.data.tracking.id);

        console.log(tracking_info)


        var newPackageAPI = {
            "package_name": document.getElementById("packageName").value,
            "carrier": carrier,
            "last_updated": tracking_info.data.checkpoint.checkpoint_time,
            "last_checkpoint_location": tracking_info.data.checkpoint.city,
            "response": tracking_info.data.tag,
            "apiID": tracking_info.data.id
        }
        console.log(newPackageAPI)
        setData({[id]: newPackageAPI, ...data});
  
        
        update({[id]: newPackageAPI});
    };

    //console.log(data);
    return (
        <form>
            <div className="form-group">
                <label htmlFor="packageName">Package Name</label>
                <input className="form-control" type="text" id="packageName" placeholder="Your New Package Name"></input>
                <label htmlFor="trackingNumber">Tracking Number</label>
                <input className="form-control" type="text" id="trackingNumber" placeholder="Your New Tracking Number"></input>
                <label htmlFor="carrier">Carrier Name eg. Amazon, Fedex</label>
                <input className="form-control" type="text" id="carrier" placeholder="Carrier Name"></input>
            </div>
            <button type="submit" className="btn btn-outline-danger" onClick={submit}>Submit</button>
        </form>
    )
}

export default AddPackageForm;