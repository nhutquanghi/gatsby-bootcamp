import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
// import '../styles/index.scss'

import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={`container ${layoutStyles.container}`}>
            <div className={`content ${layoutStyles.content}`}>
                <Header/>
                {props.children} 
            </div>
            <Footer/>
        </div>
    )
}

export default Layout