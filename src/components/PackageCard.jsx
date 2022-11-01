import "./PackageCard.css"

const PackageCard = ({title, data}) => {
    const {carrier, estimated_delivery, last_checkpoint_location, package_name, response} = data    
    return(
        <div className="card m-1 p-2 flex-row">            
            <div className="card-body">
                <h5 className="card-title">Tracking Number: {title}</h5>
                <p className="card-text">Carrier: {carrier}</p>
                <p className="card-text">Estimated Delivery: {estimated_delivery}</p>
                <p className="card-text">Last Checkpoint Location: {last_checkpoint_location}</p>
                <p className="card-text">Package Name: {package_name}</p>
                <p className="card-text">Status: {response}</p>
            </div>
        </div>
    )
}

export default PackageCard;

{/* <div className="package_card">
            
            <p>Image</p>
            <h3>{title}</h3>
            <div>
                 <p>{props.numVisited}</p>
            </div>
        </div> */}