import React from "react";
import Layout from '../components/layout'
import axios from 'axios'
//import fetch from 'isomorphic-unfetch'


export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      time:[],
      USrates:[],  
    }
  }

  async componentDidMount(){

   await axios.get('/routes/getrates')
    .then(res=>{this.setState({
      time: res.data.time.updated,
      USrates: res.data.bpi.USD.symbol + res.data.bpi.USD.rate
    })
    console.log(this.state.rates)
   
  })
    .catch(err=>console.log(err))
  }
  

  render(){
    return(

      <Layout>
        <div>
          {this.state.time}
          {this.state.USrates}
       
        </div>
        

      </Layout>

    )
  }
}