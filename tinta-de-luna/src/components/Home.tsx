import '../styles/Home.css';

export default function Home() {
  return (
    <div className="text-white flex flex-wrap justify-center p-5 gap-10 mt-10">
        <div className='w-120 flex flex-col justify-center gap-10'>
            <div className="text-4xl font-bold ">Impresion de alta calidad para tu marca personalizada.</div>
            <div className='text-left font-extralight'>En <span className="font-bold">Tinta de luna</span> tranformamos tus ideas en productos unicos y memorables. Somos expertos en impresion personalizada para hacer brillar tu marca o evento</div>
            <div className='flex justify-center gap-3'>
                <button className='bg-crema p-2 transition-all hover:scale-105 w-full'>Ver productos</button>
                <button className='text-crema p-2 transition-all hover:scale-105 w-full'>Haz tu pedido ahora</button>
            </div>
        </div>
        <div className='w-120 md:w-150'>
            <img src="/homeimg.jpg" alt="" />
        </div>
    </div>
  )
}
