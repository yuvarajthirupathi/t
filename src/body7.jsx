import React from 'react';
import s1 from '../src/imgs/s11.png';
import s2 from '../src/imgs/s12.png';
import s3 from '../src/imgs/s13.png';
import s4 from '../src/imgs/s4.png';
import s5 from '../src/imgs/s5.png';
import s6 from '../src/imgs/s6.png';
import imc from'../src/imgs/Deco-line.png'



function DesignDevelopmentApproach() {
  return (
    <>
    <img src={imc} alt='hi' className='hi2'/>
    <div style={{ padding: '40px 20px', margin: '0 auto', textAlign: 'center' }}>
       
      <h1><span className='si'>Our design and</span><br></br> <strong>development approach</strong></h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>

        {/* Card 1 */}
        <div style={cardStyle}>
          <div style={headerRowStyle}>
            <img src={s1} alt="Logo" style={imageStyle} />
            <h4 style={titleStyle}>UX Driven Engineering</h4>
          </div>
          <p style={textStyle}>
            Products are driven by user needs, as a UX-first development company. Validation-driven iterations help improve user journeys and ensure business outcomes.
          </p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={headerRowStyle}>
            <img src={s2} alt="Logo" style={imageStyle} />
            <h4 style={titleStyle}>Developing Shared Understanding</h4>
          </div>
          <p style={textStyle}>
            Our process ensures alignment between teams and stakeholders. Everyone understands what’s being built and why it matters.
          </p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <div style={headerRowStyle}>
            <img src={s3} alt="Logo" style={imageStyle} />
            <h4 style={titleStyle}>Proven Experience and Expertise</h4>
          </div>
          <p style={textStyle}>
            Our team brings years of experience in scalable development solutions, working across various industries to solve tough business and technical challenges.
          </p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <div style={headerRowStyle}>
            <img src={s4} alt="Logo" style={imageStyle} />
            <h4 style={titleStyle}>Security & Intellectual Property (IP)</h4>
          </div>
          <p style={textStyle}>
            We maintain top-level security, with strict measures to protect intellectual property and ensure compliance with global standards.
          </p>
        </div>

        {/* Card 5 */}
        <div style={cardStyle}>
          <div style={headerRowStyle}>
            <img src={s5} alt="Logo" style={imageStyle} />
            <h4 style={titleStyle}>Code Reviews</h4>
          </div>
          <p style={textStyle}>
            Code reviews are part of our core engineering culture, ensuring high-quality, maintainable code that adheres to best practices.
          </p>
        </div>

        {/* Card 6 */}
        <div style={cardStyle}>
          <div style={headerRowStyle}>
            <img src={s6} alt="Logo" style={imageStyle} />
            <h4 style={titleStyle}>Quality Assurance & Testing</h4>
          </div>
          <p style={textStyle}>
            Testing is integrated into development from day one to ensure the software works smoothly and as intended, with fewer bugs and better performance.
          </p>
        </div>

      </div>
    </div>
    </>
  );
}

// ✅ Styling objects
const cardStyle = {
  width: '550px',
  margin: '10px',
  padding: '20px',
  border: '1px solid #eee',
  borderRadius: '10px',
  textAlign: 'left',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  background: '#fff'
};

const headerRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px'
};

const imageStyle = {
  width: '35px',
  height: '35px',
  objectFit: 'contain'
};

const titleStyle = {
  margin: 0, // Remove default margin for heading
  fontSize: '18px'
};

const textStyle = {
  color: '#555',
  lineHeight: '1.6'
};

export default DesignDevelopmentApproach;
