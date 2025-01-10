import React, { useState } from 'react';
import './BasicAccordion.scss'; 

const AccordionItem = ({ title, content }: { title: string, content: string }) => {
  const [expanded, setExpanded] = useState(false);  
  const toggleAccordion = () => {
    setExpanded(prevState => !prevState);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-summary" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
      </div>
      {expanded && (
        <div className="accordion-details">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const AccordionExpandIcon = () => {
  return (
    <div className="accordion-container">
      <AccordionItem 
        title="Accordion 1" 
        content="ABC" 
      />
      <AccordionItem 
        title="Accordion 2" 
        content="DEF"
      />
    </div>
  );
};

export default AccordionExpandIcon;
