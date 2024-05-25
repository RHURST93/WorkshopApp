import React, { useState, useEffect } from 'react';
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import Prism.js CSS theme
import 'prismjs/components/prism-css'; // Import CSS syntax highlighting

function List() {
  const [open, setOpen] = useState(''); // Initialize state with an empty string

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const cssCode = `
/* This is a CSS comment */
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
    text-align: center;
}

p {
    color: #666;
    line-height: 1.6;
}
  `;

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
              The first step of developing an HTML webpage is setting up your document. Here are many important tags used to structure
              an HTML document.
              <ul>
                <li>!DOCTYPE html - The declaration of the document type.</li>
                <li>HTML - The root element of the document.</li>
                <li>Head - Contains information about the document, such as document title and stylesheet links.</li>
                <li>Meta charset - Specifies the character encoding used in the document.</li>
                <li>Meta - Contains meta information about the document.</li>
                <li>Title - The title of the document. It is displayed in the browser's title bar or in the page's tab.</li>
                <li>Body - The main content of the document.</li>
                <li>H1 - The largest heading element.</li>
              </ul>
            </p>
            <div className='bg-dark text-light'>
              <pre style={{ height: '200px' }}>
                <code style={{ height: '200px', paddingLeft: '10px' }}>
                  &lt;!DOCTYPE html&gt;
                  <br />
                  <span style={{ marginLeft: '10px' }}>
                    &lt;html&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '25px' }}>
                    &lt;head&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '45px' }}>
                    &lt;meta charset="UTF-8"&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '45px' }}>
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '55px' }}>
                    &lt;title&gt;My HTML Page&lt;/title&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '25px' }}>
                    &lt;/head&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '45px' }}>
                    &lt;body&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '65px' }}>
                    &lt;h1&gt;Hello, world!&lt;/h1&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '45px' }}>
                    &lt;/body&gt;
                  </span>
                  <br />
                  <span style={{ marginLeft: '10px' }}>
                    &lt;/html&gt;
                  </span>
                </code>
              </pre>
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader onClick={() => toggle(2)}>CSS Properties</CAccordionHeader>
          <CAccordionBody>
            <p>
              While HTML is an essential building block of the web, it would not be much without a way to style our elements.
              CSS allows us to add style to our webpage. There are many CSS properties that can be used to style an HTML element.
              Here are a few of the most commonly used CSS properties:
              <ul>
                <li>Background-Color</li>
                <li>Margin</li>
                <li>Padding</li>
                <li>Justify</li>
                <li>Align-Items</li>
                <li>Color</li>
              </ul>
            </p>
            <h2 className='text-center mb-4 underline-h1'>Here is an example of the format of a CSS file.</h2>
            <div className='bg-dark text-light'>
              <pre>
                <code className='language-css'>
                  {cssCode}
                </code>
              </pre>
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader onClick={() => toggle(3)}>JavaScript</CAccordionHeader>
          <CAccordionBody>
            {/* Content for Accordion Item #3 */}
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
}

export default List;
