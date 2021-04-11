import './styles/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* コンポーネント */
import Student from './components/Student';
import Edit from './components/Edit';
function App() {
  return (
    <Router>
      <div className="container is-fluid">
        <Switch>
          <Route exact path="/">
            <Student />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
