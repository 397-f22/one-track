import PackageCard from "./PackageCard";
const PackageCardList = ({ images, packages }) => {    
    return(
        <div>
            {Object.entries(packages).map(([id, data]) => 
                <PackageCard title={id} data={data} key={id} images={images}/>        
            )}
        </div>
    )
}

export default PackageCardList;