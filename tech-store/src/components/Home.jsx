import data from './../data/data.js'
import Card from './Card.jsx';
import Hero from './Hero.jsx';
import './../styles/Home.css'

export default function Home({addToCart}) {
    console.log(data);
    return(
        <>
        <Hero/>
        <h2 className='destacado-title' style={{textAlign:"center",fontSize:"3rem"}}>Destacado</h2>
        <div className="main-card-container">
        {data.map(item => {
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
}