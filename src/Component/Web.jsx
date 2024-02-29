import React from 'react'
// import { BrowserRouter,Route, Router, Routes } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes,Outlet,Link } from 'react-router-dom';

import Props from './Props'

const Web = () => {

    return (
        
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary px-5">
                <div class="container-fluid">
                    <div>
                       
                        


                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item fs-4 me-3 ">
                                <Link class="nav-link active text-info font-weight-bold ms-4" aria-current="page" to="/" ><img className='img-fluid w-25 ms-5 ' src={require('../data/react_logo.png')} alt='reactr'></img></Link>
                            </li>

                            <li class="nav-item dropdown fs-5">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    React Tutorial
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                   
                                
                                   
                                    
                                    <Link  class="dropdown-item" to="/Introduction">Introduction </Link>
                                    <Link class="dropdown-item" to="/React_history">History</Link>

                                    <Link class="dropdown-item" to="/React_component">Components</Link>
                                    <Link class="dropdown-item" to="/React_dom">DOM</Link>
                                    <Link class="dropdown-item" to="/Props">Props</Link>
                                    <Link class="dropdown-item" to="/Props_drilling">Props drilling</Link>
                                    <Link class="dropdown-item" to="/Callback_function">Callback Function</Link>
                                    <Link class="dropdown-item" to="/Lifecycle">Lifecycle of Components</Link>
                                   
                                   
                                </ul>
                            </li>

                            <li class="nav-item dropdown fs-5">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hooks
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to="/Usestate">UseState</Link>
                                    <Link class="dropdown-item" to="/Useeffect">UseEffect</Link>
                                    <Link class="dropdown-item" to="/Usecontext">UseContext</Link>
                                    <Link class="dropdown-item" to="/Useref">UseRef</Link>
                                    <Link class="dropdown-item" to="/Usememo">UseMemo</Link>

                                    
                                </ul>
                            </li>
                            <li class="nav-item dropdown fs-5">
                                <a class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Redux
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to="/Redux">Redux</Link>
                                    
                                </ul>
                            </li>
                            <li class="nav-item dropdown fs-5">
                                <Link class="nav-link dropdown-toggle" to="/Interview" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Interview
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to="/Interview">Interview Q/A</Link>
                                   
                                </ul>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
        
    )
}

export default Web
