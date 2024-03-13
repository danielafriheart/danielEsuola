/**
 * The above function is a React component called Header that renders a heading element with
 * customizable text, variant styles, and additional subtext.
 * @returns The `Header` component is returning an `h1` element with the specified `className` and text
 * content. The `selectedVariant` variable determines the styling of the `h1` element based on the
 * `variant` prop passed to the component. The `text` prop is rendered as the main heading text, and
 * the `subText` prop is rendered as a line break followed by additional
 */
import React from 'react'

const Header = ({ leadingText, greyText, trailingText, className, delay }) => {

    return (
        <h1
            data-scroll
            data-aos="fade-in"
            data-aos-delay={delay}
            data-aos-easing="ease-in-sine"
<<<<<<< HEAD
<<<<<<< HEAD
            className={`${className} lg:text-[6rem] text-[2.3rem] leading-tight md:text-Header-md space-x-4 font-normal text-wrap lg:text-pretty md:text-balance`}>
=======
            className={`${className} lg:text-[6rem] text-[2.3rem] leading-tight md:text-Header-md space-x-4  text-wrap lg:text-pretty md:text-balance`}>
>>>>>>> parent of 22c4b12 (Updates to typeface and contact page)
=======
            className={`${className} lg:text-[6rem] text-[2.3rem] leading-tight md:text-Header-md space-x-4 font-normal text-wrap lg:text-pretty md:text-balance`}>
>>>>>>> parent of 52ddb3a (Addeed a new portfolio case study and  year to project detail section)
            {leadingText}
            {greyText && <span className='text-Gray'>{greyText}</span>}
            {trailingText}
        </h1>
    )
}

export default Header
