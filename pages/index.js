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
    .then(res=>{
      const money = Object.values(res.data.bpi)
      
      
    for(const dollar of money){
        console.log(dollar)
       this.setState({
         allRate: [dollar]
       })
        
      }
      
     /* this.setState({
      allRate: res.data.bpi,
      time: res.data.time.updated,
      USrates: res.data.bpi.USD.rate
    })
    console.log(this.state.allRate)
    console.log(Object.entries(this.state.allRate))
    console.log(Object.values(this.state.allRate))
  */
  })
    .catch(err=>console.log(err))
  }
  

  render(){
    return(

      <Layout>
        <div>
          
          
          {this.state.allRate.map((cash)=>(
            
            <div>
              <ul>
          <li key={cash.code}>{cash}</li>
                
              </ul>
              </div>
            ))}
             
            
        
       
        </div>
        

      </Layout>

    )
  }
}