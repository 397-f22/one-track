import PackageCard from "./PackageCard";
const PackageCardList = ({ data }) => {    
    return(
        <div>
            {Object.entries(data).map(([id, data]) => 
                <PackageCard title={id} data={data}/>        
            )}
        </div>
    )
}

export default PackageCardList;