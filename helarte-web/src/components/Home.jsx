import './../style/Home.css'
import Card from './Card.jsx'
import { dataPizzas } from '../data/data.js'
import { useState } from 'react'
export default function Home(){

    const [datap, setDatap] = useState(dataPizzas);
    console.log(datap);
    return(
        <>
        <h2>Destacado</h2>
        <div className="highlights-container">
            {datap.map(pipsha =>{
                return(
                    <Card
                    datap={pipsha}
                    />
                )
            })}
        </div>
        </>
    )
}