
export default function Home() {
  return (
    <>
        <div className="flex flex-col justify-center items-center sm:flex-row gap-3 mt-5">
            <div>
                <img src="bannercoffe.png" alt="" className="w-90 sm:w-130" />
            </div>
            <div className="w-90">
                <div className="text-3xl font-bold">Tomar <span className="text-orange-950 font-extrabold text-4xl">cafe</span> es malo para la salud!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere quae molestiae mollitia</div>
            </div>
        </div>
        <div className="max-w-200 m-auto">
          <div className="mt-10 text-center text-3xl font-bold">Que es el cafe?</div>
          <div className="text-center mt-5 pl-10 pr-10 pb-5">El café crece en un árbol llamado cafeto , de hojas perennes y fragantes flores blancas. Estas flores efímeras, que recuerdan al jazmín, permanecen en el árbol durante 24/48 horas. En estado silvestre, un cafeto puede alcanzar una altura de 6 metros (12 metros en el caso del Robusta), pero en las plantaciones se poda hasta un máximo de 3 metros para facilitar la recolección de los frutos, conocidos como cerezas. Cada cereza tarda de 6 a 9 meses en madurar, cambiando de color de verde a rojo, amarillo o naranja, según la variedad, y contiene dos granos de café. Cada cafeto produce entre 1,5 y 2,5 kilos de cerezas al año, lo que da una producción preciosa de unos 350 g de granos de café.</div>
        </div>
        <div className="">
          <div className="text-3xl font-bold mt-10 text-center">Galeria</div>
          <div className="p-5 flex flex-wrap gap-2 max-w-300 m-auto justify-center">
            <img src="https://www.malongo.com/wp-content/uploads/2023/06/1-819x1024.png" className="w-80" alt="" />
            <img src="https://www.malongo.com/wp-content/uploads/2023/06/2-1-819x1024.png" className="w-80" alt="" />
            <img src="https://www.malongo.com/wp-content/uploads/2023/06/49-2-819x1024.jpg" className="w-80" alt="" />
            <img src="https://www.malongo.com/wp-content/uploads/2023/06/48-2-819x1024.jpg" className="w-80" alt="" />
            <img src="https://www.malongo.com/wp-content/uploads/2023/06/48-2-819x1024.jpg" className="w-80" alt="" />
          </div>
        </div>
    </>
  )
}
