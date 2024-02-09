import React from 'react'
import Link from '@mui/material/Link';
import Paragraph from './Paragraph'

const RouteLinks = ({ routeLocation, linkTitle, className, title, hoverState, targetState, variant, routeStyleType, data_aos, data_aos_duration, data_aos_delay }) => {

    const trailingIcon =
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${className}`}>
            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
        </svg>

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

    const variantStyles = {
        icon: "bg-white",
        noIcon: "bg-black hover:bg-transparent text-white hover:text-black transition-all hover:border duration-300",
    };
    // const selectedVariant = variantStyles[variant] || variantStyles.noIcon


    return (
        <div
            onMouseEnter={handleAnimate}
            onMouseLeave={handleAnimate}
        >

            <Link
                data-aos-easing="ease-in-out"
                data-aos-duration={data_aos_duration}
                data-aos-delay={data_aos_delay}
                data-aos-offset="0"
                data-aos={data_aos}
                href={routeLocation}
                title={title}
                rel={'noreferrer noopener'}
                target={targetState}
                underline={hoverState}
                color='inherit'
                className={`${className} transition-all duration-300 underline-offset-4 flex items-center`}
            >
                <Paragraph text={linkTitle} variant={variant} className={className} />
                <span className={`animate-target transition-all duration-300 ${routeStyleType === 'noIcon' ? 'hidden' : 'flex ml-auto'}`}>{trailingIcon}</span>
            </Link>
        </div >
    )
}

export default RouteLinks
