import { Switch, Route } from 'react-router-dom'
import Cardapio from '../Pages/Cardapio'
import Cart from '../Pages/Cart'
import Feedbacks from '../Pages/Feedbacks'
import Home from '../Pages/Home'
import Linkedin from '../Pages/Linkedin'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

export default function Routes(){

    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/cardapio">
                <Cardapio />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/linkedin">
                <Linkedin />
            </Route>
            <Route path="/feedback">
                <Feedbacks />
            </Route>
        </Switch>
    )
}