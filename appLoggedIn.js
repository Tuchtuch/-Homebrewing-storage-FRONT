import * as React from 'react';
//import ReactDOM from 'react-dom';

class AppLoggedIn extends React.Component  {
    constructor(){
        super();
        this.state={
        idOwner: 1
    }
}
    render(){
        return(
            <div id="loggedMain">
                <div id="loggedBelka">belka dla zalogowanych</div>
                <div id="showCenter">Tu będzie wyświetlana treść dla zalogowanych</div>
                <div id="loggedBottom">Tu będzie stopka</div>
            </div>

        )
    }
}
export default AppLoggedIn;