import React, { useState } from 'react';
import imc from'../src/imgs/Deco-line.png'

function TechCategories() {
  const [activeCategory, setActiveCategory] = useState('Backend'); 
  

  const categories = [
    'Backend',
    'Frontend',
    'Databases',
    'CMS',
    'Cloud',
    'Testing',
    'DevOps'
  ];

  return (
    <>

    <img src={imc} alt='hi' className='hi2'/>
    <h1 className='hi'>Our<br></br> <strong>Tech Stack</strong></h1>
    
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        
      {categories.map((category) => (
        <span
          key={category}
          onClick={() => setActiveCategory(category)}
          style={{
            cursor: 'pointer',
            fontWeight: activeCategory === category ? 'bold' : 'normal',
            color: activeCategory === category ? '#A020F0' : '#333', // Purple for active
          }}
        >
          {category}
        </span>
      ))}
    </div>
    </>
  );
}

export default TechCategories;
