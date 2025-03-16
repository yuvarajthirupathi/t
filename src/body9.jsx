import React from 'react';
import Te from "../src/imgs/R1.png";
import Te1 from "../src/imgs/R2.png";
import Te2 from "../src/imgs/R3.png";
import Te5 from "../src/imgs/R4.png";
import Te4 from "../src/imgs/R5.png";
import T from'../src/imgs/Deco-line.png'



function FeaturedBlogs() {
  const blogs = [
    { image: Te, title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
    { image: Te1, title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
    { image: Te2, title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
    { image: Te4, title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
    { image: Te5, title: 'How to Build a Scalable Application up to 1 Million Users on AWS' }
  ];

  return (
    <div style={{ padding: '40px 20px', margin: '0 auto', }}>
      
      <img src={T} alt='hi' className='hi2'/>
      <h1 className='hi'>Featured <strong>Blogs</strong></h1>
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', marginTop: '30px', paddingBottom: '90px' }}>
        {blogs.map(function (item, index) {
          return (
            <div key={index} style={{ minWidth: '250px', border: '1px solid #eee', borderRadius: '8px'}}>
              <img src={item.image} alt="Blog" style={{ width: '100%', height: '150px', }} />
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '14px', marginBottom: '10px', color: '#333' }}>{item.title}</p>
                <a href="#" style={{ color: 'purple', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px' }}>Read More →</a>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div style={{ marginTop: '60px', padding: '60px 30px', borderRadius: '12px', background: 'linear-gradient(to right, #f8f9fa, #e9ecef)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>Hire the best developers and designers around!</h3>
        <a href="#" style={{ padding: '20px 80px', background: 'linear-gradient(to right, orange, #ff5858)', color: '#fff', textDecoration: 'none', fontWeight: 'bold', }}>
          Hire Top Developers
        </a>
      </div>

    </div>
  );
}

export default FeaturedBlogs;
