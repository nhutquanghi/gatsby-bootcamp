import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
             <h1>Contact</h1>
            <p>The best way to reach me is via <a href="https://facebook.com/nhutquang99" target="_blank">Me</a> on Facebook</p>
            <Link to="/about">Back</Link>
        </Layout>
    )
}
export default ContactPage