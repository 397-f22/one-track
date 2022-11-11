function PackageModal(props){
    let {data} = props    

    return (
        <div>
            <h2>Package Information</h2>   
            <p>Carrier: {data['carrier']}</p>
            <p>Last Updated: {data['last_updated']? data['last_updated'] : "TBD" }</p>
            <p>Last Checkpoint Location: {data['last_checkpoint_location']? data['last_checkpoint_location'] : "Pending"}</p>
            <p>Package Name: {data['package_name']}</p>
            <p>Status: {data['response']}</p>         
        </div>
    )
}

export default PackageModal