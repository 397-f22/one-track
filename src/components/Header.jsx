import { signInWithGoogle } from "../utilities/firebase";
import "./Header.css";

const Header = () =>{
    return(
        <header className="header">
            <h1>One Track</h1>
            <button 
              id="login-button" 
              type="button" 
              class="btn btn-outline-danger" 
              onClick={() => signInWithGoogle()}
            >login</button>
        </header>
    )
}

export default Header;
