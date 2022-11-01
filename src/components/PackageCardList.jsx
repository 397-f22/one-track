import PackageCard from "./PackageCard";
const PackageCardList = ({ packages }) => {    
    return(
        <div>
            {Object.entries(packages).map(([id, data]) => 
                <PackageCard title={id} data={data} key={id}/>        
            )}
        </div>
    )
}

export default PackageCardList;