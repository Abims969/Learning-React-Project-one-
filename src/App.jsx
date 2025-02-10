import './App.css'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Profile from './components/Profile'
// import Counter from './components/Counter'
// import Resume from './components/Resume'
// import FunctionEvent from './components/FunctionEvent'
// import ClassEvent from './components/ClassEvent'
// import FunctionalCounter from './components/FunctionalCounter'  
import ConditionalRendering from './components/ConditionalRendering'

function App() {
  return (
    <div className="App">
      <ConditionalRendering />
    </div>
  )
}

export default App





// const [count, setCount] = useState(0)
{/* <div>
<h1>Counter App</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <button onClick={() => setCount((count) => count - 1)}>
    count is {count}
  </button>
</div>
</div> */}