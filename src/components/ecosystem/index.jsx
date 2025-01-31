import React from 'react'
import SectionOne from '@/components/ecosystem/components/section_1'
import SectionTwo from '@/components/ecosystem/components/section_2'

const Ecosystem = () => {
  return (
    <section className='ecosystem__wrapper'>
      <div className='ecosystem__container'>
        <SectionOne />
        <SectionTwo />
      </div>
    </section>
  )
}

export default Ecosystem
