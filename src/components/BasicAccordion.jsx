import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Paragraph from '../layout/typography/Paragraph';

export default function BasicAccordion({ accordionTitle, accordionContent, accordionNumber }) {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    </svg>

    return (
        <Accordion sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderBottom: '1px solid #969696',
            padding: '8px 10px',
        }}>
            <AccordionSummary
                expandIcon={icon}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    padding: '10px 0px',
                }}
            >
                <Paragraph variant={'paragraph'} text={accordionTitle} />
            </AccordionSummary>

            <AccordionDetails>
                <Paragraph variant={'label'} className='py-10 px-16 font-thin' text={accordionContent} />
            </AccordionDetails>
        </Accordion>
    );
}