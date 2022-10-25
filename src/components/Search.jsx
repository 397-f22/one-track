import "./Search.css"
const Search = () =>{
    return (
        <div class="input-group">
            <form class="form-inline flex-row w-100">
                <input class="form-control mr-0" type="search" placeholder="Search Package Name" aria-label="Search"/>
                <button class="btn btn-outline-primary m-0" type="submit">Search</button>
            </form>
        </div>
    )
}
export default Search;
