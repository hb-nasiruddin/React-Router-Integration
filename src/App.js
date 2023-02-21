import './App.css';
import {
  RouterProvider, 
} from 'react-router-dom';
import router from './Config/AppRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
