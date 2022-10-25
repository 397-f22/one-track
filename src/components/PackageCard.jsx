import "./PackageCard.css"

const PackageCard = ({title}) => {
    return(
        <div className="package_card">
            <h3>{title}</h3>
            <div>
                {/* <p>{props.numVisited}</p> */}
            </div>
        </div>
    )
}

export default PackageCard;