// Project details database

const projectsData = [
    {
        name: 'Flip',
        description: 'We aim to deliver a first-class experience to digitally inclined traders.',
        year: '2024',
        projectCover: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1713698439/Daniel/Celestial_Laptop_Mockup_nj852r.png',
        projectLink: 'https://www.figma.com/proto/IxwOi1Q1U5TZDBkaIfKPP9/Flip?page-id=0%3A1&type=design&node-id=1-559&viewport=177%2C299%2C0.1&t=loNcULJIJauNjugP-1&scaling=scale-down-width&mode=design',
        message: "Figma",
        industry: 'Cryptocurrency / Web3',
        client: '---',
        services: 'Art direction, Web design',
        writeUp: 'Our goal was to break free of the high commissions and clunky products offered by traditional brokers. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts.',

        gallery: [
            'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1713698439/Daniel/block-1_yqsibt.png',

            'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1713699143/Daniel/MacBook_Pro_16__-_3_fiuzkz.png',
        ]
    },
    {
        name: 'Esuola Daniel',
        description: 'Custom portfolio website design for creative developer Esuola Daniel.',
        year: '2024',
        projectCover: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1710290875/portfolioImages/Scene_t1s1na.png',
        projectLink: '',
        message: "You're currently using it :)",
        industry: 'Portfolio',
        client: 'Esuola Daniel',
        services: 'Art direction, Web design, Interaction design',
        writeUp: 'Daniel wanted to be seen more as a creative developer to attract more of creative development work. I helped him with the art direction and design on this project. The result is a solid portfolio website with a lot of unique personal touches.',

        gallery: [

        ]
    },
    {
        name: 'Klusta®',
        description: 'Building the first ever smart mailbox',
        year: '2024',
        projectCover: "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1709846009/portfolioImages/MacBook_Pro_du5swr.webp",
        projectLink: '',
        message: '20% Complete',
        industry: 'Social Media',
        client: '- - -',
        services: 'Web design, Interaction design',
        writeUp: 'Klusta is building the first ever smart mailbox. They focus on bringing Bringing people together.',

        gallery: [
            "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1710072606/portfolioImages/klustt_a1j47q.webp",

            "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1710072606/portfolioImages/klustaa_i5oi4c.webp",
        ]
    },
    {
        name: 'Prime Properties',
        description: 'Real Estate Website built for MayorK Prime Properties',
        year: '2023',
        projectCover: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1709843868/portfolioImages/mayorkprimeproperties_tewq0h.webp',
        projectLink: 'https://mayorkprimeproperties.com/',
        message: '',
        industry: 'Real Estate',
        client: 'Mayor-K Prime Properties',
        services: 'Web design, Interaction design',
        writeUp: 'Pioneering real estate company dedicated to redefining sustainable living and nurturing the environment.',

        gallery: [
            "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1709845105/portfolioImages/ronnie-george-9gGvNWBeOq4-unsplash_kt7jqz.webp",

            "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1709844791/portfolioImages/francesca-tosolini-tHkJAMcO3QE-unsplash_rsae4j.webp",

            "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1709844795/portfolioImages/avi-waxman-f9qZuKoZYoY-unsplash_aymlmb.webp",
        ]
    },
];

// Auto-generate IDs based on array index
projectsData.forEach((project, index) => {
    project.id = index + 1;
});

export default projectsData;
