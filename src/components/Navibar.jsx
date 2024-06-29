import React from 'react'

// The Navibar component accepts a prop called setCategory
const Navibar = ({ setCategory }) => {
    
    return (

        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">LocalNews</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navibar