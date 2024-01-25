import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/top' replace />} />
          <Route
            path='/:type'
            element={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Navigate to='/' replace />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
