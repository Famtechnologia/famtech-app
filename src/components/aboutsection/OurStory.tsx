'use client'
import React from 'react'
import SectionTitle from '../section/SectionTitle'
const OurStory:React.FC = () => {
  return (
    <div className='my-10 mx-4
    md:my-15 md:mx-15 items-center justify-center
    lg:my-30 lg:mx-28 max-w-5xl xl:mx-auto '>
    <SectionTitle title='Our Story'/>
    <p className='flex text-[12.5px] mx-auto text-center leading-5 lg:leading-8 mt-8 text-gray-600
      md:text-base'>Founded with a vision to bridge the gap between traditional farming and modern technology, Famtech was created to solve real challenges in agriculture. From unpredictable climate changes to disease outbreaks and inefficient farm management, we saw the need for a simpler, smarter, and more effective way for farmers to monitor, manage, and optimize their operations. Today, Famtech is at the forefront of agritech innovation, providing cutting-edge software solutions that help farmers track weather conditions, prevent livestock
         diseases, monitor crop growth, and automate farm reports—all from a single, easy-to-use platform.</p>
    </div>
  )
}

export default OurStory