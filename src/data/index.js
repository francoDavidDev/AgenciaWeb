import coffeShop from "../assets/works/coffeeShop.png";
import foodsPage from "../assets/works/foodsPage.png";
import menuCard from "../assets/works/menu-card.png";
import menuCircle from "../assets/works/menu-circle2.png";
import menuImage from "../assets/works/menu-image.png";
import nikeShop from "../assets/works/nikeShop.png";
import photographyWeb from "../assets/works/photographyWeb.png";
import starkeFit from "../assets/works/starkeFit.png";
import travelWeb from "../assets/works/travelWeb.png";
import travelWebReact from "../assets/works/travelWebReact.png";

export const WORKS = [
  {
    title: "Photography Portfolio",
    image: photographyWeb,
    tag: "pagina web",
    path: "https://photography-web-five.vercel.app/",
  },
  {
    title: "Starke Fit",
    image: starkeFit,
    tag: "pagina web",
    path: "https://starkefitness.vercel.app/",
  },
  {
    title: "Cafeteria",
    image: coffeShop,
    tag: "Landing Page + Menu",
    path: "https://coffee-shop-1-topaz.vercel.app/",
  },
  {
    title: "Pagina de comidas",
    image: foodsPage,
    tag: "pagina web",
    path: "https://restaurant-page-two-xi.vercel.app/",
  },
  {
    title: "Menu Card",
    image: menuCard,
    tag: "menu",
    path: "https://menu-coffee-card.vercel.app/",
  },
  {
    title: "Menu Circle",
    image: menuCircle,
    tag: "menu",
    path: "https://menu-coffee-circle.vercel.app/",
  },
  {
    title: "Menu Image",
    image: menuImage,
    tag: "menu",
    path: "https://menu-coffee-six.vercel.app/",
  },
  {
    title: "Nike Shop",
    image: nikeShop,
    tag: "pagina web",
    path: "https://nike-web-ten.vercel.app/",
  },
  
  {
    title: "Pagina de viajes",
    image: travelWebReact,
    tag: "pagina web",
    path: "https://argenviajes.vercel.app/",
  },
];

export const NAV = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Nosotros",
    path: "nosotros",
  },
  {
    title: "Trabajos",
    path: "trabajos",
  },
  {
    title: "Precios",
    path: "precios",
  },
  {
    title: "Contacto",
    path: "contacto",
  },
];

export const BUTTONS =[
  {
    name: "Todos",
    value:"todos"
  },
  {
    name: "Paginas webs",
    value:"pagina web",
  },
  {
    name: "Menus",
    value:"menu"
  },
]


export const PRICES =[
  
    {
      title: "Web Basica",
      price: "$60.000",
      services: [
        "Hosting 1 mes.",
        "Dominio 1 año.",
        "SSL 1 año.",
        "Personalizacion baja.",
        "Boton de WhatsApp.",
        "Vinculo de redes sociales.",
        "Personalizacion baja.",
        "Mantenimiento gratis por 15 dias.",
        "Primero pago 70%.",
        "5 secciones.",
        "Tiempo de entrega acordado."
      ]
    },
    {
      title: "Web Premium",
      price: "$90.000",
      services: [
        "Hosting 1 año.",
        "Dominio 1 año.",
        "SSL 1 año.",
        "Personalizacion alta.",
        "Ajustes de marca.",
        "Carrito, pasarela de pago",
        "Seccion de servicios.",
        "Portafolio",
        "Formulario",
        "Boton de WhatsApp.",
        "Vinculo de redes sociales.",
        "Correo empresarial.",
        "Mantenimiento gratis por 30 dias.",
        "Primero pago 55%.",
        "5 secciones.",
        "Tiempo de entrega acordado."
      ]
    },
    {
      title: "Web Unica",
      price: "$150.000",
      services: [
        "Hosting 1 mes.",
        "Dominio 1 año.",
        "SSL 1 año.",
        "Personalizacion especial.",
        "Ajustes de marca.",
        "Carrito, pasarela de pago",
        "Seccion de servicios.",
        "Portafolio",
        "Formulario",
        "Boton de WhatsApp.",
        "Vinculo de redes sociales.",
        "Correo empresarial.",
        "Mantenimiento gratis por 60 dias.",
        "Reseñas de Google My Bussines.",
        "Reseñas de Google Analytics.",
        "Primero pago 50%.",
        "5 secciones.",
        "Tiempo de entrega acordado."
      ]
    }
  
]