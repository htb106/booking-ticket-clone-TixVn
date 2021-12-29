import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Home from 'Pages/Home';
import MovieDetail from 'Pages/MovieDetail';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import CheckoutTemplate from 'Template/CheckoutTemplate';
import Checkout from 'Pages/Checkout';
import Profile from 'Pages/Profile';
import HomeTemplate from 'Template/HomeTemplate';
import AdminTemplate from 'Template/AdminTemplate';
import ManageMovie from 'Pages/Admin/ManageMovie';
import AddUser from 'Pages/Admin/AddUser';
import EditUser from 'Pages/Admin/EditUser';
import AddMovie from 'Pages/Admin/AddMovie';
import EditMovie from 'Pages/Admin/EditMovie';
import ShowTimes from 'Pages/Admin/ShowTimes';
import UserManage from 'Pages/Admin/UserManage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}/>
        <HomeTemplate path="/detail/:id" exact Component={MovieDetail}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout}/>
        <HomeTemplate path="/profile" exact Component={Profile}/>
        <AdminTemplate path="/admin/manage-user" exact Component={UserManage}/>
        <AdminTemplate path="/admin/manage-movie" exact Component={ManageMovie}/>
        <AdminTemplate path="/admin/add-user" exact Component={AddUser}/>
        <AdminTemplate path="/admin/edit-user/:account" exact Component={EditUser}/>
        <AdminTemplate path="/admin/add-movie" exact Component={AddMovie}/>
        <AdminTemplate path="/admin/edit-movie/:id" exact Component={EditMovie}/>
        <AdminTemplate path="/admin/showtimes/:id" exact Component={ShowTimes}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
