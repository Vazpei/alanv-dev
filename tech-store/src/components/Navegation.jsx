
import './../styles/Navegation.css'

export default function Navegation({setPage}){
    return(
        <>
        <nav className="navegation">
            <button onClick={() => setPage("Home")}>Home</button>
            <button onClick={() => setPage("Search")}>Search</button>
            <button onClick={() => setPage("Contact")}>Contact</button>
            <button onClick={() => setPage("About")}>About</button>
        </nav>
        </>
    )
}