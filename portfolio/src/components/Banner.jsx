import './../styles/Banner.css'
import linkedinLogo from './../../public/img/linkedin.png'
import gitLogo from './../../public/img/git.png'
export default function Banner() {
    return(
        <>
            <div className="banner-container">
                <div className="banner-info-container">
                    <div className="banner-title">
                        <h2>Alan Vazquez</h2>
                    </div>
                    <div className="banner-skills">
                        <h2>Developer</h2>
                    </div>
                    <div className="banner-info">
                        <p>Professional with experience in process automation with UiPath and
                        training in front-end web development. Interested in opportunities that
                        allow me to contribute technological solutions while continuing to grow in
                        both areas
                                                </p>
                    </div>
                </div>
                <div className="banner-interactive">
                    <div className="banner-button">
                        <button>Download CV</button>
                    </div>
                    <div className="banner-icons-container">
                        <div className="linkedin-icon">
                            <img src={linkedinLogo} alt="Linkedin" />
                        </div>
                        <div className="Git-icon">
                            <img src={gitLogo} alt="github" onClick={() => alert('GitHub')}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
