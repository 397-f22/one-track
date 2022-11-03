function PackageModal(props){
    let {data} = props    

    return (
        <div>
            <h2>Package Information</h2>   
            <p>Carrier: {data['carrier']}</p>
            <p>Estimated Delivery: {data['estimated_delivery']}</p>
            <p>Last Checkpoint Location: {data['last_checkpoint_location']}</p>
            <p>Package Name: {data['package_name']}</p>
            <p>Response: {data['response']}</p>         
        </div>
    )
}

export default PackageModal