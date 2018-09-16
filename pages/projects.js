import React from 'react';
import Layout from '../components/Layout';
import CardArray from '../components/Card/CardArray';

const MyProjects = () => {
  return (
    <Layout>
      <div className='project__container'>
        <CardArray />
      </div>
    </Layout>
  )
}

export default MyProjects;
