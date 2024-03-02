import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'
import './App.css'
import { Otro } from './components/Otro.jsx'

function App() {

  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })


  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1>App of cats for cats</h1>
        <section>
          {fact && <p>{fact}</p>}
          {imageUrl &&
            <img
              src={`${imageUrl}`}
              alt={`Image extracted using the first word for ${fact}`}
            />
          }
        </section>
        <section>
          <Otro />
        </section>
        <button onClick={handleClick}>Get new fact</button>
      </main>
    </>
  )
}

export default App
