import React from 'react'

const Paragraph = ({ text, className, variant }) => {

/* The `variantStyles` object is defining different styling options for the `Paragraph` component. Each
key-value pair represents a different variant of the paragraph's font size. The keys (`base`,
`caption`, `label`, `paragraph`) represent the variant names, and the values (`1rem`, `1.125rem`,
`1.5rem`, `2.5rem`) represent the corresponding font sizes in `rem` units. These font sizes are
equivalent to specific pixel sizes, as mentioned in the comments. */
    const variantStyles = {
        base: "text-[1rem]leading-[22px] text-black",   // equivalent to 16px
        caption: "text-[1.125rem] text-[#666666]",  // equivalent to 18px
        label: "text-[1.5rem]",  // equivalent to 24px
        paragraph: "text-[2.5rem]", // equivalent to 40px
    };

    const selectedVariant = variantStyles[variant] || variantStyles.base;

    return (
        <p className={`${selectedVariant} ${className}`}>
            {text}
        </p>
    )
}

export default Paragraph
