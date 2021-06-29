import './App.css';
import Brew from './components/Brew'
import Recent from './components/Recent'

function App() {
  return (
<div>
<Brew />
{localStorage.getItem("brews") !== null ? <Recent /> : null}
</div>
  )
}

export default App;
