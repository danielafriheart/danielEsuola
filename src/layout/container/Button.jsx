import React from 'react'
import { NavLink } from 'react-router-dom';

const Button = ({ btnText, href, variant }) => {
    const handleAnimate = (e) => {
        const buttonDiv = e.currentTarget;
        const animateTarget = buttonDiv.querySelector('.animate-target');

        if (e.type === 'mouseenter') {
            // Mouse entering, add the rotate-45 class
            animateTarget.classList.add('rotate-45');
        } else if (e.type === 'mouseleave') {
            // Mouse leaving, remove the rotate-45 class
            animateTarget.classList.remove('rotate-45');
        }
    }

    const trailingIcon =
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
        </svg>

    const variantStyles = {
        white: "bg-white text-black",
        black: "bg-black hover:bg-transparent text-white hover:text-black transition-all hover:border duration-300",
        grey: "bg-[#F0F0F0] hover:bg-transparent text-black transition-all hover:border duration-300",
        default: "bg-black hover:bg-transparent text-white hover:text-black transition-all hover:border hover:border-black duration-300",
    };

    const selectedVariant = variantStyles[variant] || variantStyles.white
    return (
        <button
            type='button'
            onMouseEnter={handleAnimate}
            onMouseLeave={handleAnimate}
            data_aos={'fade-in'}
            data_aos_duration={'0'}
            data_aos_delay={'0'}
        >
            <NavLink
                to={href}
                className={`flex items-center space-x-3 py-4 px-10 rounded-full ${selectedVariant}`}
            >
                <span>{btnText || 'Button'}</span>
                <span className={`animate-target transition-all duration-300 ${selectedVariant[variant] === 'default' ? 'hidden' : 'flex'}`}>{trailingIcon}</span>
            </NavLink>
        </button>
    )
}

export default Button
