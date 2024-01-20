import { Route, Routes, Redirect } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import ShowStories from './components/ShowStories';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <div className='container'>
          <Header />
          <Route path='/' render={() => <Redirect to='/top' />} exact={true} />
          <Route
            path='/:type'
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Redirect to='/' />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </div>
      </Routes>
    </>
  );
};

export default AppRouter;
