import React from 'react'

const Section = ({ children, className }) => {
  return (
    <section className={`lg:p-20 md:p-10 p-5 py-20  ${className}`} data-scroll-section>
      {children}
    </section>
  )
}

export default Section
