import data from './../data/data.js'
import Card from './Card.jsx';

export default function Home() {
    console.log(data);
    return(
        <>
        {data.map(item => {
            return(
                <>
                <Card
                    name={item.name}
                />
                </>
            )
        })}
        </>
    )
}