import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
