import React from 'react'

function ContactInfo({info}) {
  return (
    <section className='p-6'>
      <span><b>Mobile: </b>{info.mobile}</span>
    </section>
  )
}

export default ContactInfo
