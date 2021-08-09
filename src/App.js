import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './routers/AppRouter';
import { MenuBar } from './components/contents/MenuBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <MenuBar />
        <div className="App-content">
          <AppRouter />
        </div>
      </div>
    </Router>
  );
}

export default App;
