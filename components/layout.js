import React from 'react'
import'../styles/styles.scss'


const Layout=(props)=>(
    <div className="container">
        {props.children}
    </div>
)

export default Layout