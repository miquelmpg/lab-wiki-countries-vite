
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate();

    function onNavigate() {
        navigate("/");
    }
    
    return (
        <nav
        className="d-flex align-items-center ps-5 fs-3"
        style={{height: '75px', backgroundColor: '#436efe', color: '#ffffff'}}>
            <div onClick={() => onNavigate()} role="button">WikiCountries</div>
        </nav>
    );
}

export default Navbar;
