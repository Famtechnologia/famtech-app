'use client';
import React from 'react'
import SectionTitle from './SectionTitle';
import CardComponent from './CardComponent';
const SecondSection:React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center mx-auto space-y-5 px-4 mt-6 py-6 lg:mb-24 lg:mx-28'>
      <SectionTitle title="What we do" />
    <h1 className='text-xl lg:text-4xl lg: max-w-[600px] mx-auto text-center text-black-400'>We build <span className='text-green-400'>Powerful SaaS solutions</span>  that help farmers</h1>
    <p className='text-xs lg:text-lg lg: max-w-[1000px] mx-auto lg:mb-8 text-black-400 text-center px-6'>Whether you're running a small farm or managing large-scale agribusiness, 
        Famtech delivers technology you can trust—and results you can measure.</p>
       <CardComponent/>
    </section>
  )
}

export default SecondSection