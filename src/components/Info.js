import React from "react"

export default function Info(){
    return(
        <div className = "info-box">  
            <img className = "profile-pic" src = "././profile-pic.jpg"></img>
            <h2 className = "person-name">Aman Singh</h2>
            <p className = "job-role">Frontend Developer</p>
            <p className = "website">Aman.website.co</p>
            <div className = "contact">
                <a href = "https://gmail.com/">
                    <button className = "btn1">
                        <i className ="fas fa-envelope"></i>
                        <p>Email</p>
                    </button>
                </a>
                <a href = "https://www.linkedin.com/in/aman-singh-561b6b192/">
                    <button className = "btn2">
                        <i className="fab fa-linkedin"></i>
                        <p>Linkedin</p>
                    </button>
                </a>
            </div>
            
        </div>
    )
}