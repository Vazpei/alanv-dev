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
                        <p>Being part of a company where I can put into practice all my
                        knowledge about the technologies I master, have the opportunity to
                        achieve my medium and long-term goals as well as develop my work,
                        personal and intellectual skills.
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
