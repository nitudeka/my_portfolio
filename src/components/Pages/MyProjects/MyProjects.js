import React from 'react';
import './MyProjects.css';

const MyProjects = (props) => {
  return (
    <div>
      <h1 className='my-projects-heading'>My Projects</h1>
      <div className='my-project'>
        <div className='project-container'>
          <div className='project'>nitu</div>
          <div className='project-description'>onie</div>
        </div>
        <div className='project-container'>
          <div className='project'>nitu</div>
          <div className='project-description'>onie</div>
        </div>
        <div className='project-container'>
          <div className='project'>nitu</div>
          <div className='project-description'>onie</div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects;