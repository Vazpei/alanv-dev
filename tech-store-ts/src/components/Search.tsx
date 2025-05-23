import data from '../data/data.js'
import Card from './Card.js';
import './../styles/Search.css'
import { useState } from 'react';

export default function Search({addToCart}) {
    
    const [filteredData,setFilteredData] = useState([]);
    let string;

    function filterData(){
        string = document.querySelector(".infoInput").value;
        console.log(string.length);
        if(string.length > 0){
            console.log("Process");
            filteredData = setFilteredData(data.filter(item => item.name.includes(string)));
            console.log(filteredData);
        }else{
            alert("The search space cannot be empty");
        }
    }
    return(
        <>
            <div className="search_container">
                <div className="search-title">
                    <h2>Buscar</h2>
                </div>
                <div className="search-inp">
                    <input className="infoInput" type="text" name="" id="" />
                    <button onClick={filterData}><img src="./../../public/img/search.svg" alt="" /></button>
                </div>
            </div>
            <div className="items-section">
            
       
            {filteredData.map(item => {
                    const { id,name,price,image,description } = item;
                    return(
                        <>
                            <div className="card-container">
                                <Card
                                    addToCart={addToCart}
                                    key={id}
                                    id={id}
                                    name={name}
                                    image={image}
                                    price={price}
                                    description={description}
                                    item={item}
                                />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
};