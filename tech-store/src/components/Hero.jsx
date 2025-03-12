import './../styles/Hero.css'
export default function Hero(){
    //Function that detects scroll on window
    // window.onscroll = function(){
    //     var banner = document.querySelector(".banner");
    //     if(document.body.scroll > 50 || document.documentElement.scrollTop > 50){
    //         banner.style.top = "-150px";//Moves banner to top
    //     }else{
    //         banner.style.top = "0";
    //     }
    // }
    return(
        <div className="banner">
            <div className="infobanner">
                <div className="bannertitle">
                    <h2>Nuevo Google Pixel 8 pro con inteligencia artificial</h2>
                </div>
                <div className="btnbanner">
                    <button>Echar Vistazo</button>
                </div>
            </div>
            <div className="imagebanner">
                <img src="./src/img/pixel9banner.png" alt="" />
            </div>
        </div>
    )
}