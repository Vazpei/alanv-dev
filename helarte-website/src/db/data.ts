import type { Product } from "../types/Product"

const db:Product[] = [
    {
        name: 'Paletas',
        description: 'Paleta congelada de frambuesa',
        price: 324,
        img: 'https://cdn0.recetasgratis.net/es/posts/1/1/6/paletas_de_hielo_caseras_43611_600.webp'
    },
    {
        name: 'Nieve de canasta',
        description: 'Canasta de galleta con nieve',
        price: 324,
        img: 'https://pbs.twimg.com/media/Ce_LZDMWQAAR6x-.jpg'
    },
    {
        name: 'Cono de vainilla',
        description: 'Helado de vainilla en cono crujiente',
        price: 280,
        img: 'https://www.shutterstock.com/image-photo/hand-holding-soft-serve-vanilla-600nw-2585525305.jpg'
    },
    {
        name: 'Sundae de fresa',
        description: 'Helado suave con salsa de fresa y chispas',
        price: 350,
        img: 'https://www.gastrolabweb.com/u/fotografias/fotosnoticias/2022/7/7/31803.jpg'
    },
    {
        name: 'Banana split',
        description: 'Plátano con helado de sabores y toppings',
        price: 450,
        img: 'https://cdn7.kiwilimon.com/recetaimagen/504/960x640/17311.jpg.jpg'
    },
    {
        name: 'Barquillo de chocolate',
        description: 'Cono relleno de helado de chocolate',
        price: 300,
        img: 'https://media.istockphoto.com/id/487960671/es/foto/oscura-caseras-barquilla-de-helado-de-chocolate.jpg?s=612x612&w=0&k=20&c=kvTk2mlPUD1cfpypElS8V_K0NkhD5VY6P0NrXMnyGLg='
    },
    {
        name: 'Milkshake de Oreo',
        description: 'Malteada con galleta Oreo y crema batida',
        price: 390,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICoMRISkl6GOSBn2z_t2IR5IdkOga6Qo0iw&s'
    },
    {
        name: 'Nieve de mango',
        description: 'Helado artesanal de mango natural',
        price: 320,
        img: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/3a7606408fe899d10f7261acee14919f.jpg'
    },
    {
        name: 'Helado napolitano',
        description: 'Clásico de vainilla, fresa y chocolate',
        price: 360,
        img: 'https://img.freepik.com/fotos-premium/helado-napolitano-bol-cristal-helado-fresa-vainilla-chocolate_253722-738.jpg'
    },
    {
        name: 'Torta helada',
        description: 'Pastel frío con capas de helado y galleta',
        price: 520,
        img: 'https://www.nestleprofessional-latam.com/sites/default/files/styles/np_recipe_detail/public/2024-11/torta-helada-con-gelatina-fresa-ideal-cremosita.jpg?itok=ac7IsFwB'
    }
] 

export {
    db
}