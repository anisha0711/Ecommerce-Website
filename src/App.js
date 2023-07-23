import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import CartPage from './features/pages/CartPage';
import Checkout from './features/pages/Checkout';
import ProductDetailPage from './features/pages/ProductDetailPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Protected from './features/auth/components/Protected';
import { fetchItemsByUserId } from './features/cart/cartAPI';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected>
      <Home></Home>
    </Protected>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/cart',
    element: <Protected>
      <CartPage></CartPage>
    </Protected>,
  },
  {
    path: '/checkout',
    element: <Protected>
      <Checkout></Checkout>
    </Protected>,
  },
  {
    path: '/product-detail/:id',
    element: <Protected>
      <ProductDetailPage></ProductDetailPage>
    </Protected>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch, user])
  
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
