import React from 'react';
import { render } from 'react-dom'
import Home from './Views/Home'
import Test from './Views/Test'
import { BrowserRouter , Route , Switch , NavLink} from 'react-router-dom'
import { compose , createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./Storing"
 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancer());

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/test" exact component = {Test} />
        </Switch>
    )
}
 
const App = () => {
    
    return (
        <div>
            <h1>Merhaba Dünya</h1>
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="/test" >Test</NavLink>
            <hr/>
            <Routes/>
            <br/><br/>
        </div>
    )

}

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    
    
    
    , document.getElementById('app'));