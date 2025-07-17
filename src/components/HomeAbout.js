import React from 'react'

export default function HomeAbout() {
  return (
      <div className='home-about-container container'>
          <img className='home-about-img' src="pulses.jpg" alt="" />
          <div className='home-about-written' >
            <h4 style={{color: 'var(--subheading)'}} >About</h4>
            <h2>UMA EXPORTS</h2>
            <p style={{textAlign: 'justify'}} >Our Company is engaged into trading and marketing of agricultural produce and commodities such as sugar, spices like dry red chillies, turmeric, coriander, cumin seeds, food grains like rice, wheat, corn, sorghum and tea, pulses and agricultural feed like soyabean meal and rice bran de-oiled cake. We import lentils, faba beans, black Matpe, and toor (Pigean Peas) in India in bulk quantities. Our major imports are from Canada, Australia and Burma. We are B2Btraders, highly specialized in sugar, corn and dal. We maintain stocks and distribute them to different institutional parties like manufacturers, exporters, etc. We provide them in bulk quantities. We follow standard packing process to ensure that quality and authentic taste of commodities remains intact. Read More</p>
            <button className='btn btn-warning' >Read More</button>
            <p className='mt-2' >Call to ask any question <br /> <b>+91-33-22811396/97</b></p>
          </div>
    </div>
  )
}
