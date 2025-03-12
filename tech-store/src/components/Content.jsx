import Home from "./Home";

export default function Content({page,data}){
    return(
        <>
        {page === "Home" && <Home/>}
        </>
    )
}