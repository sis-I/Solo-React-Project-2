import Navbar from "../components/Navbar"
import Card from "../components/Card"
import data from "./data"

function App() {

  const cards = data.map((item, id)=> {
    return (
      <Card  key={id} item={item} />
    )
  });
 
  return (
    <>
      <Navbar />
      <section className="cards-list">
        { cards }
      </section>
    </>
  )
}

export default App
