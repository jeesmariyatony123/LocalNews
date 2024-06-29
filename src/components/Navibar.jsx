import React from 'react'

const Navibar = ({ setCategory }) => {
    

    return (

        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">LocalNews</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <a className="nav-link active" href="#">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("technology")}>Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("business")}>Business</a>
                        </li><li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("health")}>Health</a>
                        </li><li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("science")}>Science</a>
                        </li><li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("sports")}>Sports</a>
                        </li><li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navibar