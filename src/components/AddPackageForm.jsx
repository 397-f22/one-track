import "./AddPackageForm.css";
import {addNewPackage, lastCheckpoint} from '../utilities/api';

const AddPackageForm = ({data, setData, setPackages}) => {
    const submit = (evt) => {
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
        // addNewPackage(id, carrier).then(data => apiData = data);
        // need to deal with if we get a 400 error aka it is already in the API
        // 
        // var newPackage = {
        //     "package_name": document.getElementById("packageName").value,
        //     "carrier": carrier,
        //     "estimated_delivery": "2021-09-20T14:03:00",
        //     "last_checkpoint_location": apiData.checkpoint.checkpoint_time,
        //     "response": apiData.tag,
        //     "apiID": apiData.id
        // }

        data[id] = newPackage;
        setData(data);
        setPackages(data);
        // location.reload();
        // }
    };
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