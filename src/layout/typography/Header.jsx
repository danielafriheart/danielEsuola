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

            className={`${className} lg:text-[7rem] text-[2.3rem] leading-tight md:text-Header-md space-x-4 text-wrap lg:text-pretty md:text-balance`}>
            {leadingText}
            {greyText && <span className='text-Gray'>{greyText}</span>}
            {trailingText}
        </h1>
    )
}

export default Header
