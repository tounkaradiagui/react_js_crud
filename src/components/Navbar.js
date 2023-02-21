import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container">
                <Link  className="navbar-brand" to="#">My app</Link >

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link  className="nav-link active" aria-current="page" to="/">Accueil</Link  >
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link active" aria-current="page" to="/contact">Contact</Link  >
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link active" aria-current="page" to="/students">Student</Link  >
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link active" aria-current="page" to="/about">A Propos</Link  >
                        </li>
                    
                    </ul>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;