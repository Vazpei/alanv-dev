
import './../styles/Navegation.css'

export default function Navegation({setPage,page}){

    function activateButton(data){
        setPage(data);

        switch(data){
            case'Home':
            console.log("Home Selected");
                document.querySelector(".Homebtn").classList.toggle("Active_btn")
                document.querySelector(".Searchbtn").classList.remove("Active_btn")
                document.querySelector(".Contactbtn").classList.remove("Active_btn")
                document.querySelector(".Aboutbtn").classList.remove("Active_btn")
                break;
                case 'Search':
                    document.querySelector(".Searchbtn").classList.toggle("Active_btn")
                    document.querySelector(".Homebtn").classList.remove("Active_btn")
                    document.querySelector(".Contactbtn").classList.remove("Active_btn")
                    document.querySelector(".Aboutbtn").classList.remove("Active_btn")
                    break;
                    case 'Contact':
                        document.querySelector(".Contactbtn").classList.toggle("Active_btn")
                        document.querySelector(".Searchbtn").classList.remove("Active_btn")
                        document.querySelector(".Homebtn").classList.remove("Active_btn")
                        document.querySelector(".Aboutbtn").classList.remove("Active_btn")
                        break;
                        case 'About':
                            document.querySelector(".Aboutbtn").classList.toggle("Active_btn")
                            document.querySelector(".Searchbtn").classList.remove("Active_btn")
                            document.querySelector(".Contactbtn").classList.remove("Active_btn")
                            document.querySelector(".Homebtn").classList.remove("Active_btn")
                            break;
        default:
            console.log("Switch Error");
        }
    }
    return(
        <>
        <nav className="navegation">
            <button className='Homebtn' onClick={() => activateButton('Home')}>Inicio</button>
            <button className="Searchbtn" onClick={() => activateButton('Search')}>Buscar</button>
            <button className="Contactbtn" onClick={() => activateButton('Contact')}>Contacto</button>
            <button className="Aboutbtn" onClick={() => activateButton('About')}>Acerca de</button>
        </nav>
        </>
    )
}