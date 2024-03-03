/**
 * The above function is a React component called Header that renders a heading element with
 * customizable text, variant styles, and additional subtext.
 * @returns The `Header` component is returning an `h1` element with the specified `className` and text
 * content. The `selectedVariant` variable determines the styling of the `h1` element based on the
 * `variant` prop passed to the component. The `text` prop is rendered as the main heading text, and
 * the `subText` prop is rendered as a line break followed by additional
 */
import React from 'react'

const Header = ({ leadingText, greyText, trailingText, className }) => {

    return (
        <h1
            className={`${className} lg:text-[6rem] text-7xl leading-tight md:text-Header-md text-Paragraph-md space-x-4 font-normal flex-wrap`}>
            {leadingText}
            {greyText && <span className='text-Gray'>{greyText}</span>}
            {trailingText}
        </h1>
    )
}

export default Header
