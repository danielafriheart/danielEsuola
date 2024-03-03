import React from 'react'

const Section = ({ children, className }) => {
  return (
    <section className={`lg:p-20 md:p-10 p-5 lg:pt-20 md:pt-10 pt-32 ${className}`}  id="smooth-content" data-scroll-section>
      {children}
    </section>
  )
}

export default Section
