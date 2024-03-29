import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import PostPage from './pages/PostPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <ListPage />
            </>
          }
        ></Route>
        <Route
          path='/:type'
          element={
            <>
              <Navbar />
              <ListPage />
            </>
          }
        ></Route>
        <Route path='/item/:id' element={<PostPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
