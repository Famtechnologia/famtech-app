import React from 'react'
import SectionTitle from './SectionTitle'

const Choose:React.FC = () => {
  return (
    <div className=' space-y-5 p-4 max-w-[300px] lg:max-w-[400px] md:ml-0 mx-auto bg-green-50 border border-green-400 rounded-xl 
    md:h-auto '>
        <SectionTitle className='mr-0 bg-white' title='Why choose Famtech'/>
        <p className='text-xs lg:text-base text-center '>Whether you're managing 10 hectares or 10,000, Famtech grows with you.</p>
        <div className=' space-y-4 md:space-y-8'>
            <p className='inline-flex rounded-full text-center text-[9px] lg:text-xs p-1 border border-gray-400
             text-gray-700'>Offline-first tech for rural areas</p>
            <p className='inline-flex rounded-full text-center text-[9px] lg:text-xs p-1 border border-gray-400
             text-gray-700 float-right mr-0 '>Built for Africa, Ready for the World</p>
            <p className='inline-flex rounded-full text-center text-[9px] lg:text-xs p-1 border border-gray-400
             text-gray-700'>Modular architecture for flexibility</p>
            <p className='inline-flex rounded-full text-center text-[9px] lg:text-xs p-1 border border-gray-400
             text-gray-700 float-right mr-0'>Modular architecture for flexibility</p>
            <p className='inline-flex rounded-full text-center text-[9px] lg:text-xs p-1 border border-gray-400
             text-gray-700'>Local language support (coming soon)</p>
        </div>
    </div>
  )
}

export default Choose