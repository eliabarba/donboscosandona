import Products from 'dev/alexalex/Products'
import Certifications from '@/components/Certifications'

let products = [
    {
        title: "NextJS Material Kit Free",
        category: "FREE UI KIT",
        description: "It is Free Mterial-UI Kit with a fresh, new desing inspired by Google's material design. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of conmponents.",
        immagine: "https://thumbs.dreamstime.com/b/programmatore-di-sviluppo-professionista-che-lavora-nel-sito-web-programmazione-un-software-e-codifica-tecnologia-scrivendo-i-134227099.jpg"
    },
    {
        title: "Light Bootstrap Dashboard PRO React",
        category: "FREMIUM TEMPLATE",
        description: "Light Bootstrap Dashboard PRO is a Bootstrap 3 Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to Kickstart new project!",
        immagine: "https://thumbs.dreamstime.com/b/programmatore-femminile-sorridente-di-bellezza-che-per-mezzo-del-computer-103397705.jpg"
    },
    {
        title: "Now UI Dashboard PRO React",
        category: "PREMIUM TEMPLATE",
        description: "Now UI-Dashboard React is an admin dashboard templete designed by Invasion and coded by Creative Tim. It is built on top of Reactstrap,using. Now UI-Dashboard and it is fully responsive",
        immagine: "https://thumbs.dreamstime.com/b/analista-di-codifica-138364750.jpg"
    },
]

let certifications = [
    {
        logoUrl: '/images/certification/iso.png',
        text1: 'ISO 9001:2015',
        text2: 'Reg. n. 2593-A - Settore EA: 37'
    },
    {
        logoUrl: '/images/certification/kiwa.png',
        text1: 'Progettazione ed erogazione di attività formative e di orientamento'
    },
    {
        logoUrl: '/images/certification/knx.png',
        text1: 'Authorised Training Center'
    },
    {
        logoUrl: '/images/certification/regioneveneto.png',
        text1: 'Cod. A033 - Formazione Iniziale,',
        text2: 'Superiore e Orientamento'
    },

]


export default function Home() {
    return (
        <Products
            title="Some of Our Awesome Products-2"
            description="This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information."
            cardWidth={4}
            products={products}
        />,
        <Certifications
            title=""
            text1=""
            text2=""
            cardWidth={3}
            certifications={certifications}
        />
    )
}
