import React, { useState } from 'react';
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react';

function List(props) {
  const [open, setOpen] = useState(''); // Initialize state with an empty string

  const toggle = (id) => {
    setOpen((prevState) => (prevState === id ? '' : id)); // Toggle state based on previous state
  };
  
  const accordionStyle = {
    '--cui-accordion-color': 'black', // Custom text color for accordion
    '--cui-accordion-bg': 'black', // Custom background color for accordion
  };

  return (
    <div className='container-fluid bg-dark'>
      <CAccordion style={accordionStyle} activeItemKey={open}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader onClick={() => toggle(1)}>HTML Tags</CAccordionHeader>
          <CAccordionBody>
            <p>
              The first step of any developing an HTML webpage is setting up your document. Here are many important tags used to structure
              an HTML document.
              <ul>
                <li>!DOCTYPE html</li>
                <li>HTML</li>
                <li>Head</li>
                <li>Meta charset</li>
                <li>Meta</li>
                <li>Title</li>
                <li>Body</li>
              </ul>
            </p>
            <div className='bg-dark text-light' >
            <pre style={{height: '200px'}}>
        <code style={{height: '200px'}}>
          &lt;!DOCTYPE html&gt;
          <br/>
          <p style={{marginLeft: '10px'}}>
            &lt;html&gt;
          </p>
          
         
          <p style={{marginLeft: '25px'}}>
            &lt;head&gt;
          </p>
          <p style={{marginLeft: '45px'}}>
            &lt;meta charset="UTF-8"&gt;
          </p>
          <p style={{marginLeft: '45px'}}>
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
          </p>
          <p style={{marginLeft: '55px'}}>
          &lt;title&gt;My HTML Page&lt;/title&gt;

          </p>
          <p style={ {marginLeft: '25px'}}>
          &lt;/head&gt;
          </p>
          
          <p style={{marginLeft: '45px'}}>
            &lt;body&gt;
          </p>
          <p style={{marginLeft: '65px'}}>
          &lt;h1&gt;Hello, world!&lt;/h1&gt;
          </p>
          <p style={{marginLeft: '45px'}}>
            &lt;/body&gt;
          </p>
          <p style={{marginLeft: '10px'}}>
            &lt;/html&gt;
          </p>
        </code>
      </pre>
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader onClick={() => toggle(2)}>CSS Properties</CAccordionHeader>
          <CAccordionBody>
            {/* Content for Accordion Item #2 */}
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader onClick={() => toggle(3)}>Javascript</CAccordionHeader>
          <CAccordionBody>
            {/* Content for Accordion Item #3 */}
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
}

export default List;
