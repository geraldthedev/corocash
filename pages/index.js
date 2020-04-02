import React from "react";
import Layout from '../components/layout'
import axios from 'axios'


export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  componentDidMount(){
    axios.get('/routes/getrates')
    .then(res=>console.log(res.data))
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