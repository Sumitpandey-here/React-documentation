
import './App.css';
import Front from './Component/Front';
import Introduction from './Component/Introduction';
import Props from './Component/Props';
import React_component from './Component/React_component';
import React_dom from './Component/React_dom';
import React_history from './Component/React_history';
import Web from './Component/Web';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Component/Index';
import Props_drilling from './Component/Props_drilling';
import Callback_function from './Component/Callback_function';
import Lifecycle from './Component/Lifecycle';
import Usestate from './Component/Usestate'
import Useeffect from './Component/Useeffect';
import Usecontext from './Component/Usecontext';
import Useref from './Component/Useref';
import Usememo from './Component/Usememo';
import Redux from './Component/Redux';
import Footer from './Component/Footer';
import Interview from './Component/Interview';




function App() {
    return (
        <>
            <Web />
            <index />
            <div className='container'>
                <div className='row'>

                
            <Routes >

                <Route
                    exact
                    path="/"
                    element={<Index />}
                ></Route>
                <Route
                    exact
                    path="/front"
                    element={<Front />}
                ></Route>
                <Route
                    exact
                    path="/Introduction"
                    element={<Introduction />}
                ></Route>
                <Route
                    exact
                    path="/React_history"
                    element={<React_history />}
                ></Route>
                <Route
                    exact
                    path="/React_dom"
                    element={<React_dom />}
                ></Route>
                <Route
                    exact
                    path="/React_component"
                    element={<React_component />}
                ></Route>
                <Route
                    exact
                    path="/Props"
                    element={<Props />}
                ></Route>

                <Route
                    exact
                    path="/Props_drilling"
                    element={<Props_drilling />}
                ></Route>

                <Route
                    exact
                    path="/Callback_function"
                    element={<Callback_function />}
                ></Route>

                <Route
                    exact
                    path="/Lifecycle"
                    element={<Lifecycle />}
                ></Route>
                <Route
                    exact
                    path="/Usestate"
                    element={<Usestate />}
                ></Route>

                <Route
                    exact
                    path="/Useeffect"
                    element={<Useeffect />}
                ></Route>

                <Route
                    exact
                    path="/Usecontext"
                    element={<Usecontext />}
                ></Route>

                <Route
                    exact
                    path="/Useref"
                    element={<Useref />}
                ></Route>

                <Route
                    exact
                    path="/Usememo"
                    element={<Usememo />}
                ></Route>

                <Route
                    exact
                    path="/Redux"
                    element={<Redux />}
                ></Route>

<Route
                    exact
                    path="/Interview"
                    element={<Interview />}
                ></Route>

            </Routes>
            </div>

</div>
            

<Footer/>
        </>
    );
}

export default App;
