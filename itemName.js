import * as React from 'react';
//import ReactDOM from 'react-dom';

class ItemName extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWFpbEBvMi5wbCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im1haWxAbzIucGwiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTYxMTA4MDk1OX0.GElal5oY0zodHyRh3_-jDkjyiPVAQkPYBw1NScwFlkY',
        idItem: props.idItem,
        user: props.user,
        item: null
      };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/Item/'+this.state.idItem)
          .then(res => res.json()).then(json => this.setState({ item: json.itemName}))

      }


    render(){

        return(
          this.state.item
        )
    }

}
      export default ItemName