import "./AddPackageForm.css";

const AddPackageForm = ({data, setData}) => {
    const submit = (evt) => {
        evt.preventDefault();
        const id = document.getElementById("trackingNumber").value;
    
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
    
        data[id] = newPackage;
        setData(data);
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
            </div>
            <button type="submit" className="btn btn-outline-danger" onClick={submit}>Submit</button>
        </form>
    )
}

export default AddPackageForm;