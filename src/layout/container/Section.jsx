import React from 'react'

const Section = ({ children, className }) => {
  return (
    <section className={`lg:px-20 md:p-10 p-5 ${className}`}>
      {children}
    </section>
  )
}

export default Section
