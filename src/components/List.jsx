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
import 'prismjs/components/prism-javascript'; 
import '../styles.scss';

function List() {
  const [open, setOpen] = useState('');

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const jsCode = `
  //javascript functions
  // both of these functions do the same thing.

  const greet = (name) => {
    return 'Hello, ' + name + '!';
  }

  function greet(name) {
    return 'Hello, ' + name + '!';
  }
  
  console.log(greet('World'));

  //JavaScript Variables
  //all three of these variables do the same thing. 
  //All can be changed except a variable with the const keyword.

  var myVar = 'Hello World';
  let myVar = 'Hello World';
  const myVar = 'Hello World';
  console.log(myVar);
  `

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
    setOpen((prevState) => (prevState === id ? '' : id));
  };
  
  return (
    <div className='container-fluid bg-dark pb-4'>
      <CAccordion  activeItemKey={open}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader className='custom-accordion-button' onClick={() => toggle(1)}>HTML Tags</CAccordionHeader>
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
          <CAccordionHeader className='custom-accordion-button' onClick={() => toggle(2)}>CSS Properties</CAccordionHeader>
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
          <CAccordionHeader className='custom-accordion-button' onClick={() => toggle(3)}>JavaScript</CAccordionHeader>
          <CAccordionBody>
          <h2 className='underline-h1'>JavaScript Basics</h2>
            <p>JavaScript is a language that brings web pages to life by making them interactive and dynamic. It can handle tasks from basic calculations to complex web applications, both in the browser and on the server.
               With its wide range of capabilities, it's an essential tool for modern web development.</p>
               <h4 className='underline-h1'>Functions and Variables</h4>
            <pre><code className='language-javascript'>{jsCode}</code></pre>
            <p className='pt-3'>A JavaScript function consist of the function declaration or the const keyword if you are using 
              an arrow function, the name of the function, the parameters, and the function body. 
              <h4 className='underline-h1 pt-3'>Function Parameters</h4>
              <p>In JavaScript, a function parameter acts as a placeholder for values that are
                 passed into the function when it is called. Parameters allow you to pass information 
                 into functions, enabling 
                them to perform tasks using different inputs. For example, in the example above, 
                in both of the greet functions "name" is passed as a parameter. The greet function is then
                 called 
                in the console.log() statement which prints to the console, with the string 'World' as the argument. 
              </p>
              <h4 className='underline-h1 pt-3'>JavaScript Variables</h4>
              <p>In JavaScript, a variable is a container that stores data values. Variables are fundamental to programming 
                as they allow you to save, manipulate, and retrieve data throughout your code.
                JavaScript has three types of variables:
              </p>
              <ul>
                <li>var</li>
                <li>let</li>
                <li>const - This variable cannot be changed after being declared.</li>
              </ul>
            </p>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
}

export default List;
