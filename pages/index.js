import React from "react";
import Layout from '../components/layout'
import axios from 'axios'
//import fetch from 'isomorphic-unfetch'


export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      allRate:[],
      time:[],
      USrates:[],  
    }
  }

  async componentDidMount(){

   await axios.get('/routes/getrates')
    .then(res=>{ this.setState({
      allRate: Object.entries(res.data.rates)
    })
    console.log(this.state.allRate)
    console.log(this.state.allRate)
    
  })
    .catch(err=>console.log(err))
  }
  

  render(){
    return(

      <Layout>
        <div>
          
          {this.state.allRate.map(cash=>{
            <li key={cash}>{cash}</li>
          })}
        
        </div>
        

      </Layout>

    )
  }
}