import Card from "./components/Card.jsx"
import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind test</h1>
      <Card
        title="Sunflower"
        description="Standing tall and proud, a field of sunflowers mirrors the sun, radiating happiness"
        image="https://cdn.pixabay.com/photo/2017/03/27/12/50/flower-2178507__340.jpg"/>

      <Card
        title="Indian flag"
        description="The journey of the Indian flag is intertwined with India's struggle for independence"
        image="https://cdn.pixabay.com/photo/2017/03/28/12/00/indian-flag-2181887__340.jpg"/>
    </>
  )
}

export default App
