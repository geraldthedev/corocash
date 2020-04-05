import React from "react";
import Layout from '../components/layout'
import axios from 'axios'
//import fetch from 'isomorphic-unfetch'


export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  async componentDidMount(){

   await axios.get('/routes/getrates')
    .then(res=>console.log(res))
  }
  render(){
    return(

      <Layout>
        <div>
        works
        </div>
        

      </Layout>

    )
  }
}