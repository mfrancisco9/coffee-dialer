import './App.css';
import Brew from './components/Brew'
import Recent from './components/Recent'

function App() {

const beans = () => {
}

beans();


  return (
<div>
  <div id="title">coffee dialer</div>
<Brew />
{localStorage.getItem("brews") !== null ? <Recent /> : null}
<div id="info">coffee dialer © <a href="https://github.com/mfrancisco9">michael francisco</a> 2021 </div>
</div>
  )
}

export default App;
