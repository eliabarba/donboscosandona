import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Products from '@/components/Products'
import { Category } from '@mui/icons-material'
import { Typography } from '@mui/material'

export default function Pagina() {
  const productList = [
    {
      title: "INIZIO PER ELEMENTARI",
      category: "Categoria 1",
      description: "Descrizione del prodotto 1",
      immagineUrl: "https://www.falegnameriadimartino.it/wp-content/uploads/2020/06/pinocchio-171124-001-1-810x611-1.jpg",
      url: "url-del-prodotto-1"
    },
    {
      title: "INIZIO ATTIVITA' ",
      category: "Categoria 2",
      description: "Descrizione del prodotto 2",
      immagineUrl: "https://www.falegnameriadimartino.it/wp-content/uploads/2020/06/pinocchio-171124-001-1-810x611-1.jpg",
      url: "url-del-prodotto-2"
    },
    {
      title: "MESSA APERTURA+ INCONSTRO CON I GENITORI+ GIOCHI E PRANZO AL SACCO",
      category: "Categoria 2",
      description: "Descrizione del prodotto 2",
      immagineUrl: "https://www.falegnameriadimartino.it/wp-content/uploads/2020/06/pinocchio-171124-001-1-810x611-1.jpg",
      url: "url-del-prodotto-2"
    },
    
  ];
  const productList2 =[
    {
      title: "Prodotto 2",
      category: "Categoria 2",
      description: "Descrizione del prodotto 2",
      immagineUrl: "https://www.falegnameriadimartino.it/wp-content/uploads/2020/06/pinocchio-171124-001-1-810x611-1.jpg",
      url: "url-del-prodotto-2"
    },
  ]

  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Calendario"
        description="Qui troverai i programmi per di quest'estate"
        imageUrl="https://www.saledellacomunita.it/wp-content/uploads/2022/12/Guillermo-del-Toro-parla-di-3-film-di-Pinocchio-in.jpg"
      />
      <Paragraph
        title="Calendario"
        subtitle=""
      >
        Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. Qui va messo il testo del paragrafo. 
      </Paragraph>
      <section>
        <Products title="Il Nostro Calendario" description="Settimana 1°" cardWidth={4} products={productList} />
        <Products title="Il Nostro Calendario" description="Settimana 1°" cardWidth={4} products={productList2} />
        
      </section>  
     
    </Layout>
  )
}



