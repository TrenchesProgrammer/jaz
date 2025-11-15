import React from 'react'
import Faq from '../components/Faq'
import BookingForm from '../components/BookingForm'
const page = () => {
  return (
    <div className='pt-20 flex flex-col gap-20'>
        <BookingForm id="book"/>
        <Faq id="faq"/>
    </div>
  )
}

export default page