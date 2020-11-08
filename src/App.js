import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
// import Newpost from './component/Newpost';
import Navbar from './component/Navigations';
import './component/bootstrap.min.css';
// import Readmore from './component/Readmore';
import Addrecord from './component/Addrecord';
import Drugs from './component/Drugs';
import Report from './component/Report';
import UpdatePatient from './component/UpdatePatient';
import Wards from './component/Wards';






const Routes=()=>{
  return(
    
  <BrowserRouter>
<Navbar/>
        <Switch>
     <Route exact path="/">
     <Home/>
     
     </Route>
    
     <Route exact path="/Login">
     <Login/>
     </Route>
     <Route exact path="/Login">
     <Login/>
     </Route>
      <Route exact path="/Addrecord">
     <Addrecord/>
     </Route> 
     <Route exact path="/Drugs">
     <Drugs/>
     </Route>  
     <Route exact path="/Report">
     <Report/>
     </Route>  

     <Route exact path="/UpdatePatient">
     <UpdatePatient/>
     </Route>  
 <Route exact path="/Wards">
     <Wards/>
     </Route>
      
    
    
    </Switch>
  
  </BrowserRouter>
  );
}



function App() {

return (
  <div className="App" >
   <Routes/>
   
  
    
  </div>
);
}

export default App;
