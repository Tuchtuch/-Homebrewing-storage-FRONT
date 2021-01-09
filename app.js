import * as React from 'react';
//import ReactDOM from 'react-dom';
import AppLoggedIn from './appLoggedIn.js';
import AppLoggedOff from './appLoggedOff.js';


 class App extends React.Component  {
   constructor(){
   super();
   this.handleLoginState=this.handleLoginState.bind(this);
    this.state={logged: false
    }
   }
   handleLoginState(){
      this.setState({logged:!this.state.logged})
   }
   isLogged(){
     return this.state.logged;
   }

    render(){

      if(this.isLogged()) {
    return ( 
      <div>Zalogowano
      <button onClick={this.handleLoginState}>Zmień login state</button>
      <AppLoggedIn/>
      </div>
    );  
      }
      else {
        return ( 
          <div>Niezalogowano
      <button onClick={this.handleLoginState}>Zmień login state</button>  
      <AppLoggedOff/>
          </div>
        );  
      }
    }
  }
  export default App;