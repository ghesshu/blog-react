import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';

import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';
import Posts from './routes/Posts';
import Contact from './routes/Contact';
import PostPage from './routes/PostPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/contact",
    element : <Contact />
  },
  {
    path: "/posts/1",
    element : <PostPage />
  },
]);

function App() {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
