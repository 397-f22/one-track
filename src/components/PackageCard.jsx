import "./PackageCard.css"

const PackageCard = ({images, data}) => {
    const {carrier, estimated_delivery, last_checkpoint_location, package_name, response} = data
    const carFormatted = carrier.toLowerCase();    
    const deliv_date = new Date(estimated_delivery).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    return(
        <div className="card m-1 p-2 flex-row">            
            <div className="card-body">
                <div className="img-wrapper">
                    <img src={images[carFormatted].url} className="carrier-image"></img>
                </div>
                <div className="package-info">
                    <h5 className="card-title">{package_name}</h5>
                    <p className="card-text">Delivery: {deliv_date}</p>
                    <p className="card-text">Status: {response}</p>
                </div>
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