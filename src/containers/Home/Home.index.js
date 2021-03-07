import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Layout from './../../components/Layout/Layout.index';

function Home() {
    return (
        <Layout>
            <Jumbotron style={{margin:'5rem',background:'#fff'}} className="text-center">
                <h1>Welcome To Admin Dashboard</h1>
                <p>Eiusmod aliqua mollit minim id veniam consequat incididunt minim.</p>
            </Jumbotron>
        </Layout>
    )
}

export default Home
