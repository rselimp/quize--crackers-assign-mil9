import React from 'react';
import image1 from '../../images/quize1.jpg';

//10. create banner


const Banner = () => {
    return (
      <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image1} alt="" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Quize for Web Developers</h1>
      <p className="py-6">The internet connects everyone nowadays and web development is a huge part of our society. If you want to be well-known throughout the world then you should probably develop your own website or a web page. Our trivia on web development has questions about every aspect concerning web development nowadays and will test your knowledge on the matter. Can you face all these questions?</p>
    </div>
  </div>
</div>
    );
};

export default Banner;