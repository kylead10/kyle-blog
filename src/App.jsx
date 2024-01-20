import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import ShowStories from './components/ShowStories';

const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/top' />} exact={true} />
          <Route
            path='/:type'
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Navigate to='/' />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Routes>
      </div>
    </>
  );
};

export default App;
