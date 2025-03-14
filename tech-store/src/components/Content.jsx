import Home from "./Home";
import Search from './Search'
import  Contact from './Contact'
import About from './About'


export default function Content({page,data,addToCart}){
    return(
        <>
        {page === "Home" && <Home addToCart={addToCart}/>}
        {page === 'Search' && <Search/>}
        {page === 'Contact' && <Contact/>}
        {page === 'About' && <About/>}
        </>
    )
}