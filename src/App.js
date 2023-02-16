import './App.css';
import {
  RouterProvider, 
} from 'react-router-dom';
import router from './Config/AppRoutes';



function App() {
  return (
    <div className="App">
      App Component
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
