import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
      </div>
    </BrowserRouter>
  );
};

export default App;
