import './App.css';
import Datafetchingfirtmethod from './Components/Getfetchingdata';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
   <Router>
     <Switch>
     <div className="App">
     <h1>Welcom here with me</h1>
     <Route exact path="/" component={Datafetchingfirtmethod} />
   </div>
     </Switch>
   </Router>
  );
}

export default App;

