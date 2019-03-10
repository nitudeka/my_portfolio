import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';

const Home = (props) => {
  return (
    <div className='home'>
    	<Helmet>
    		<meta name="description" content="Nitu Deka, a full-stack web developer. Visit to know about him and his projects"/>
    		<title>Home | Nitu Deka</title>
    	</Helmet>
      <Header />
    </div>
  )
}

export default Home;
