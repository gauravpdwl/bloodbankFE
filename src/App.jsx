import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddDonor from './components/adddonor.jsx';

import store from './redux/store.js';
import { Provider } from 'react-redux';

function App() {

  const router=createBrowserRouter([
    {path:"/", element:<Navbar/>, children:[
      {index:true, element:<Home/>},
      {path:"adddonor", element:<AddDonor/>},
      {path:"about", element:<AddDonor/>}
    ]}
  ]);

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App;
