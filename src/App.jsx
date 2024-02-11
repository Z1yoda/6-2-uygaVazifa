// style
import './App.css'

// components
import Header from './components/header/Header'
import Content from './components/content/Content'

// JSON file
import cars from './assets/cars.json'

function App() {

  return (
      <div className='App '>
        <Header className={cars.length} />
      <main>
        <Content cars={ cars} />
      </main>
      </div>
  )
}

export default App
