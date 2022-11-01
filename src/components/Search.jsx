import "./Search.css"



const Search = ({data, setPackages}) =>{
    return (
        <div className="input-group">
            <form className="form-inline flex-row w-100">
                <input id="search-bar" className="form-control mr-0" type="search" placeholder="Search Package Name" aria-label="Search" onChange={() => updatePackages(data, setPackages)}/>
                {/* <button className="btn btn-outline-primary m-0" type="submit" >Search</button> */}
            </form>
        </div>
    )
};

const updatePackages = (data, setPackages) =>  {
    setPackages( 
        Object.fromEntries(
            Object.entries(data).filter(
                (key) => {
                    return key[1].package_name.includes(event.target.value.toLowerCase());
                }
            )
        )
    )
}



export default Search;
