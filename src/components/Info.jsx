import avatar from "../assets/laura.png"

export default function Info(){
    return (
        <header>
            <img src={avatar} className="avatar" alt="Laura smiling to camera"/>
            <div className="container info">
                <div className="info-text">
                    <h1>Laura Smith</h1>
                    <p className="info-job-title">Frontend Developer</p>
                    <small>laurasmith.website</small>
                </div>
                <div className="btn-container">
                    <a href="#" className="btn btn-primary"><i class="fa-solid fa-envelope"></i>Email</a>
                    <a href="#" className="btn btn-secondary"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
                </div>
            </div>
        </header>
    )
}