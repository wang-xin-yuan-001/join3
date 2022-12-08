import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  const [count, setCount] = useState(0)

  return <div className="App">{useRoutes(routes)}</div>
}

export default App
