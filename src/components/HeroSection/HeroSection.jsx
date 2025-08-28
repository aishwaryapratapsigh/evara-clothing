import React from 'react'


const HeroSection = ({BannerImg}) => {
  return (
    <>
    <div>
      <img src={BannerImg} className='w-100' />
    </div>
    </>
  )
}

export default HeroSection