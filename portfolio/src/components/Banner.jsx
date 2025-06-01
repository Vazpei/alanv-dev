
import linkedinLogo from './../../public/img/linkedin.png'
import gitLogo from './../../public/img/git.png'
export default function Banner() {
    return(
        <>
            <div className="banner-container bg-linear-to-t from-indigo-950 to-indigo-900">
                <div className="banner-info-container">
                    <div className="banner-title">
                        <h2 className='text-center text-white font-bold text-3xl pt-8'>Alan Vazquez</h2>
                    </div>
                    <div className="banner-skills">
                        <h2 className='text-center text-indigo-500 mt-1 text-2xl font-normal'>Developer</h2>
                    </div>
                    <div className="banner-info">
                        <p className='text-white p-3 text-center mt-4 max-w-3xl m-auto'>Professional with experience in process automation with UiPath and
                        training in front-end web development. Interested in opportunities that
                        allow me to contribute technological solutions while continuing to grow in
                        both areas
                                                </p>
                    </div>
                </div>
                <div className="banner-interactive text-center">
                    <div className="banner-button flex gap-2 justify-center">
                        <button 
                        className='text-center text-white font-bold bg-indigo-500 p-2 rounded active:bg-indigo-400 mt-5'
                        onClick={() =>{
                            const link = document.createElement('a');
                            link.href = './../public/downloads/Alan Vazquez Azpeitia Resume v5(eng).pdf';
                            link.download = 'CV-AlanVazquez.pdf';
                            link.click();
                        }}
                        >
                            Download CV English
                        </button>
                        <button 
                        className='text-center text-white font-bold bg-indigo-500 p-2 rounded active:bg-indigo-400 mt-5'
                        onClick={() =>{
                            const link = document.createElement('a');
                            link.href = './../public/downloads/Alan Vazquez Azpeitia Resume v5(esp).pdf';
                            link.download = 'CV-AlanVazquez.pdf';
                            link.click();
                        }}
                        >
                            Download CV Spanish
                        </button>
                    </div>
                    <div className="banner-icons-container flex justify-center gap-4 invert cursor-pointer mt-3 pb-5">
                        <img src={linkedinLogo} alt="Linkedin"  className='w-10'/>
                        <img src={gitLogo} alt="github" className='w-10' onClick={() => window.open("https://github.com/Vazpei/alanv-dev","__blank")}/>
                    </div>
                </div>
            </div>
        </>
    )
};
