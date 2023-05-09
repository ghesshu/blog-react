import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';

import Dashboard from './routes/Dashboard';
import ErrorPage from './routes/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

function App() {
  return (
    <div className=''>
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
