import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Products from '@/components/Products'
import { Category } from '@mui/icons-material'

export default function Pagina() {
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
    </Layout>
  )
}
