import * as React from 'react';
//import ReactDOM from 'react-dom';
import DelExpire from './delExpire.js';
import ItemName from './itemName.js';

class Item extends React.Component  {
    constructor(props){
      super(props);
      this.state = {
        expireId : props.expireId,
        idItem : props.idItem,
        expirationDate : props.expirationDate,
        showState: 1
        }
      }


      handleStateSet = (e) =>{
        if(e.target.value==='2') { if(window.confirm("Czy na pewno usunąć?")){this.setState({showState: parseInt(e.target.value,10)})}; }
        else {this.setState({showState: parseInt(e.target.value,10)})}
    }

      renderSwitch(param) {
        switch(param) {
          case 1:
              var dataTemp = new Date(this.state.expirationDate);
              return(<div id="delExpire">
        {this.state.expireId})<br /><ItemName idItem={this.state.idItem}/><br />{dataTemp.toLocaleDateString('pl-PL')}<button value={2} onClick={this.handleStateSet}>Usuń</button>
          </div>)
        case 2:
            return(<div><DelExpire expireId={this.state.expireId}/></div>)
        default:
            return(<div>Błąd</div>)
        }
    }



      render(){
          return(
            this.renderSwitch(this.state.showState)
          )
      }
    }
      export default Item;