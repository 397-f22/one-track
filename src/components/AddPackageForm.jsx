import "./AddPackageForm.css";

const AddPackageForm = ({data, setData}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="packageName">Package Name</label>
                <input className="form-control" type="text" id="packageName" placeholder="Your New Package Name"></input>
            </div>
            <button type="submit" className="btn btn-outline-danger">Submit</button>
        </form>
    )

}

export default AddPackageForm;