import './../style/Home.css'
import Card from './Card.jsx'
import { dataPizzas } from '../data/data.js'
import { useState } from 'react'


export default function Home({addToCart}){

    const [datap, setDatap] = useState(dataPizzas);
    console.log(datap);
    return(
        <>
        <div className="section-title">
            <h2>Destacado</h2>
        </div>
        <div className="highlights-container">
            {datap.map(pipsha =>{
                return(
                    <Card
                    id={pipsha.id}
                    name={pipsha.name}
                    price={pipsha.price}
                    image={pipsha.image}
                    description={pipsha.description}
                    pipsha={pipsha}
                    addToCart={addToCart}
                    />
                )
            })}
        </div>
        </>
    )
}