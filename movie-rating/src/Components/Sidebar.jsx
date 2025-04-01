import './../styles/Sidebar.css'


export default function Sidebar() {
    function closeSB(){
        const sideisHidden = document.querySelector(".main-sbcontainer").classList.contains("displayoff");
        if(sideisHidden){
            document.querySelector(".main-sbcontainer").classList.add("displayon");
            document.querySelector(".main-sbcontainer").classList.remove("displayoff");
            document.querySelector(".btnmenu").classList.toggle("displayButton");
        }else{
            document.querySelector(".main-sbcontainer").classList.toggle("displayoff");
            document.querySelector(".btnmenu").classList.toggle("displayButton")
        }
    }
    return(
        <>
            <div className="main-sbcontainer">
                <img src="./../../public/acc.svg" alt="" width={50}/>
                <div className="buttons-section">
                    <button className='buttonS'>New</button>
                    <button className='buttonS'>Delete</button>
                    <button className='buttonS'>All data</button>
                    <button className='buttonS'>Edit</button>
                </div>
                <div className="closebutton">
                    <button onClick={closeSB}>
                        <span className="material-symbols-outlined">close</span></button>
                </div>
            </div>
            <div className="menu-button">
                <button className='btnmenu' onClick={closeSB}>Menu</button>
            </div>
        </>
    )
};
