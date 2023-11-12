import Hero from '../components/Home/Hero'
import Us from '../components/Home/Us'
import Slider from '../components/Home/Slider'
import '../body.css'
import Goals from '../components/Home/Goals'

function Home() {
  return (
    <>
      <Hero />
      <Us />
      <Slider />
      <Goals/>
    </>
  )
}

export default Home