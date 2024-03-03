import React from 'react'; // Import React library if not already imported
import RouteLinks from '../layout/typography/RouteLinks';

const SocialMedias = [
    {
        platform: 'YouTube', // YouTube
        href: 'https://www.youtube.com/channel/UC1eFtHs88-4PlWdWwWn9EoQ',
    },
    {
        platform: 'Linkedln', // LinkedIn
        href: 'https://www.linkedin.com/in/daniel-esuola/',
    },
    {
        platform: 'Twitter', // Twitter
        href: 'https://twitter.com/DanielAfriheart',
    },
    {
        platform: 'TikTok', // TikTok
        href: 'https://www.tiktok.com/@danielafriheart',
    },
];

const SocialMediaLinks = ({className}) => (
    <div>
        {SocialMedias.map(social => (
            <RouteLinks
                key={social.platform}
                linkTitle={social.platform}
                routeLocation={social.href}
                routeStyleType="icon" // Use double quotes for string literals
                className={`${className} transition-all duration-300 header`} // Use double quotes for string literals
                variant="paragraph" // Use double quotes for string literals
                hoverState="none" // Use double quotes for string literals
                targetState="_blank" // Use double quotes for string literals
            />
        ))}
    </div>
);

export default SocialMediaLinks;
