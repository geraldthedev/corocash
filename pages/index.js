import React from "react";
import Layout from '../components/layout'
import axios from 'axios'
//import fetch from 'isomorphic-unfetch'


export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      rates:[]
    }
  }

  async componentDidMount(){

   await axios.get('/routes/getrates')
    .then(res=>{this.setState({
      rates: [res.data.bpi]
    })
    console.log(this.state.rates)
  }
    
  
    )
    .catch(err=>console.log(err))
  }
  render(){
    return(

      <Layout>
        <div>
        {this.state.rates.map((money, index)=>(
          <div>
            {money.USD.rate}
          </div>
        ))}
        </div>
        

      </Layout>

    )
  }
}