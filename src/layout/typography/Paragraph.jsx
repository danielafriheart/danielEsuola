import React from 'react'

const Paragraph = ({ text, className, variant, trailingText, greyText }) => {

    /* The `variantStyles` object is defining different styling options for the `Paragraph` component. Each
    key-value pair represents a different variant of the paragraph's font size. The keys (`base`,
    `caption`, `label`, `paragraph`) represent the variant names, and the values (`1rem`, `1.125rem`,
    `1.5rem`, `2.5rem`) represent the corresponding font sizes in `rem` units. These font sizes are
    equivalent to specific pixel sizes, as mentioned in the comments. */
    const variantStyles = {
        base: "text-[1rem]leading-[22px] text-black font-normal",   // equivalent to 16px
        caption: "text-[1.125rem] text-[#666666]",  // equivalent to 18px
        label: "text-[1.5rem]",  // equivalent to 24px
        paragraph: "lg:text-[2.5rem] md:text-Paragraph-md text-Paragraph-sm", // equivalent to 40px
    };

    const selectedVariant = variantStyles[variant] || variantStyles.base;

    return (
        <p className={`${selectedVariant} ${className} space-x-4`}>
            {text}
            <span> {greyText && <span className='text-Gray'>{greyText}</span>}</span>
            {trailingText}
        </p>
    )
}

export default Paragraph
