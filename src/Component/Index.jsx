import React from 'react'

// import './App.css';
import Front from './Front';
import Introduction from './Introduction';
import Props from './Props';
import React_component from './React_component';
import React_dom from './React_dom';
import React_history from './React_history';
import Web from './Web';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Props_drilling from './Props_drilling';
import Callback_function from './Callback_function';
import Lifecycle from './Lifecycle';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import Usecontext from './Usecontext';
import Usememo from './Usememo';
import Useref from './Useref';
import Redux from './Redux';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Interview from './Interview';

library.add(faFacebook);

// import Front from './Front';

const Index = () => {
  return (
<div>
      
<Front/>
<Introduction/> 
<React_history/>
<React_dom/>
<React_component/>
<Props/>
<Props_drilling/>
<Callback_function/>
<Lifecycle/>
<Usestate/>
<Useeffect/>
<Usecontext/>
<Usememo/>
<Useref/>
<Redux/>
<Interview/>
{/* <Footer/> */}
</div>
  )
}

export default Index
