import React from 'react'
import HomeAbout from './HomeAbout';
import HomeExports from './HomeExports';
import HomeProducts from './HomeProducts';

export default function Home() {
  return (
    <>
      <div className="home-container1">
        <img style={{width: '100vw'}} src="home.jpg" alt="" />
        <p style={{fontSize: '70px', position: 'absolute', top:'400px', left: '23vw', color: 'white', fontWeight: '600'}} >- Agriculture Products -</p>
        <button className='btn btn-primary' style={{position: 'absolute', top: '520px', left: '43vw', fontSize: '20px'}} >Our Products</button>
      </div>
      <HomeAbout />
      <HomeExports />
      <HomeProducts />
    </>
  );
}