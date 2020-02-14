import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import NavBar from './Components/NavBar'
import Players from './Components/Players'



export default class App extends Component {
  state = {
    players: []
  }

  //fetching players from api
  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response.data)
      this.setState({
        players:response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Players 
        players={this.state.players}/>
      </div>
    )
  }
}

