import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './component/Home';
// import Login from './component/Login';
// import Newpost from './component/Newpost';
import Navbar from './component/Navigations';
import './component/bootstrap.min.css';
// import Readmore from './component/Readmore';
import Addrecord from './component/Addrecord';
import Myhp from './component/Addhp';
import Myleno from './component/Addleno';







const Routes=()=>{
  return(
    
  <BrowserRouter>
<Navbar/>
        <Switch>
     <Route exact path="/">
     <Home/>
     
     </Route>
    
     {/* <Route exact path="/Login">
     <Login/>
     </Route>
     <Route exact path="/Login">
     <Login/>
     </Route> */}
      <Route exact path="/Phones">
     <Addrecord/>
     </Route> 
     <Route exact path="/Laptops">
     <Myhp/>
     </Route>
     <Route exact path="/Leno">
     <Myleno/>
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
