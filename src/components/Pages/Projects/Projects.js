import React from 'react';
import { Helmet } from 'react-helmet';
import CardArray from '../../Card/CardArray';

const MyProjects = () => {
  return (
    <div className='project__container'>
    	<Helmet>
    		<meta name="description" content="Projects that Nitu Deka have built so far"/>
    		<title>Projects | Nitu Deka</title>
    	</Helmet>
      <CardArray />
    </div>
  )
}

export default MyProjects;
