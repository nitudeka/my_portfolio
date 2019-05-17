import React from 'react';
import { Helmet } from 'react-helmet';
import Canvas from '../../Canvas/';
import Header from './Header/Header';

const Home = (props) => {
  return (
    <div className='home'>
    	<Helmet>
    		<meta name="description" content="Nitu Deka, a full-stack web developer. Visit to know about me and my projects"/>
    		<title>Home | Nitu Deka</title>
    	</Helmet>
    	<Canvas velocity={2} colors={['#B2B2B2', '#737373', '#262626', '#404040', '#0F0F0F']} />
      <Header />
    </div>
  )
}

export default Home;
