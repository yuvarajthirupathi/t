import React from 'react';
import Te from "../src/imgs/te1.png";
import Te1 from "../src/imgs/te2.png";
import Te2 from "../src/imgs/te3.png";
import Te3 from "../src/imgs/te4.png";
import Te4 from "../src/imgs/te5.png";
import Te5 from "../src/imgs/te6.png";
import Te6 from "../src/imgs/te7.png";
import Te7 from "../src/imgs/te8.png";
import Te8 from "../src/imgs/te9.png";

function TechStackAndProcess() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
     
      

      
      <div style={gridContainerStyle}>
        
        <img src={Te} alt="Tech Logo" style={logoImageStyle} />
        <img src={Te1} alt="Tech Logo" style={logoImageStyle} />
        <img src={Te2} alt="Tech Logo" style={logoImageStyle} />
        <img src={Te3} alt="Tech Logo" style={logoImageStyle} />
        <img src={Te4} alt="Tech Logo" style={logoImageStyle} />

        

        <img src={Te5} alt="Tech Logo" style={logoImageStyle} />
        <img src={Te6} alt="Tech Logo" style={logoImageStyle} />
        <img src={Te7} alt="Tech Logo" style={logoImageStyle} />
        <img src={Te8} alt="Tech Logo" style={logoImageStyle} />
      </div>
    </div>
  );
}

// ✅ Simple Grid Styling
const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', // 5 images per row
  gap: '20px',
  justifyItems: 'center',
  marginTop: '30px'
};

// ✅ Image Style (No Box, Clean)
const logoImageStyle = {
  width: '120px',
  height: '100px',
  
};

export default TechStackAndProcess;

