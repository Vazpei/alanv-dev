import './../styles/Hero.css'


export default function Hero(){
    return(
        <div className="banner">
            <div className="infobanner">
                <div className="bannertitle">
                    <h2>Nuevo <span style={{color:"#005bc5",fontSize:"2.5rem"}}>Google Pixel 8 Pro</span> con inteligencia artificial</h2>
                </div>
                <div className="btnbanner">
                    <button onClick={() => alert("Prueba boton")}>Echar Vistazo</button>
                </div>
            </div>
            <div className="imagebanner">
                <img src="./src/img/pixel9banner.png" alt="" />
            </div>
        </div>
    )
}