import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      totalAmount:""
    };
    this.refreshAmount = this.refreshAmount.bind(this);
  }


API_URL = "http://localhost:62228/";

componentWillMount(){
  this.refreshAmount();
}

async refreshAmount(){
  fetch(this.API_URL+"api/v1/ExpenseCalculation").then(response=>
    { if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
  .then(data=>{
    this.setState({totalAmount:data.value});
  })
  .catch(error => {
    console.log(error);
  });
}

render() {
  return (
    <div className="App">
      <h1>One Day Zoo Expense</h1>
      <h2><p><strong></strong>Total : {this.state.totalAmount}</p></h2>
    </div>
  );
}
}

export default App;
