import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/top' replace />} exact />
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
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <div className='container'></div>
    </>
  );
};

export default AppRouter;
