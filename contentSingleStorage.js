import * as React from 'react';
//import ReactDOM from 'react-dom';
import Item from './item.js';


class ContentSingleStorage extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
        items: [],
        storageId: props.storageId,
        showState: 1,
        user: props.user,
        time: Date.now()
      };
    }

      componentDidMount() {
        fetch("http://localhost:8080/api/Expire")
        .then(res => res.json())
       // .then(json => this.setState({ items: json}));
        .then(json => this.setState({ items: json.filter(exp => exp.idStorage === this.state.storageId)}))
        setInterval(() => {
          fetch("http://localhost:8080/api/Expire")
        .then(res => res.json())
       // .then(json => this.setState({ items: json}));
        .then(json => this.setState({ items: json.filter(exp => exp.idStorage === this.state.storageId)}))
        }, 5000)
        
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      itemsToSingleItem = item => {
        const expireId = item.expireId;
        const idItem = item.idItem;
        const expirationDate = item.expirationDate;
        return <Item expireId={expireId} key={expireId} idItem={idItem} expirationDate={expirationDate}/>;
      };

      renderSwitch(param) {
        switch(param) {
          case 1:
              return(<div id="showAllItems">
              {this.state.items.map(this.itemsToSingleItem)}
          </div>)
        case 2:
            return(<div></div>)
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


export default ContentSingleStorage;