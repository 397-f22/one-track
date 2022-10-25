import "./PackageCard.css"

const PackageCard = ({title, image}) => {
    return(
        <div className="card m-1 p-2 flex-row">
            <img src={image} className="card-img-left" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Tracking Number</p>
                <p className="card-text">Status</p>
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