import React from 'react';
import T from'../src/imgs/Deco-line.png'
import Ti from'../src/imgs/Case-study.png'
import Ti1 from'../src/imgs/Case-study1.png'
import Ti2 from'../src/imgs/Case-study2.png'
function CaseStudies(){
  return(
    <>
    <div className='all'>
      <div className='en'>
      <img src={T} alt='ji'/>
      <h1> Our Resent  <br></br>Case study</h1>
      </div>
    <div className='mi1'>
      <div>
        <img src={Ti} alt="" srcset="" />

      </div>
      <div className='mii1'>
      <h1> Website Design for SCFC Canada</h1>
      <p>Born out of a vision, a single-minded objective that puts service before<br></br> anything else, Swift Clearance and Forwarding Corp. surging forth to deliver <br></br>the best services in the shipping and logistics scenario. Its meteoric rise stems<br></br> out of a solid foundation. The management boasts of over 20 years of rich and <br></br>varied experience in the shipping and freight forwarding industry.</p>
      <span className='read'>read more</span>

      </div>
      <br></br>
    </div>
    <div className='mi2'>
      <div>
      <img src={Ti1} alt="" srcset="" />
      </div>
      <div className='mii2'>
      <h1> Website Design for SCFC Canada</h1>
      <p>Born out of a vision, a single-minded objective that puts service before<br></br> anything else, Swift Clearance and Forwarding Corp. surging forth to deliver <br></br>the best services in the shipping and logistics scenario. Its meteoric rise stems<br></br> out of a solid foundation. The management boasts of over 20 years of rich and <br></br>varied experience in the shipping and freight forwarding industry.</p>
      <span className='read'>read more</span>
      

      </div>
        
    </div>
    <div className='mi3'>
      <div> <img src={Ti2} alt="" srcset="" /></div>
      
      <div className='mii3'>
      <h1> Website Design for SCFC Canada</h1>
      <p>Born out of a vision, a single-minded objective that puts service before<br></br> anything else, Swift Clearance and Forwarding Corp. surging forth to deliver <br></br>the best services in the shipping and logistics scenario. Its meteoric rise stems<br></br> out of a solid foundation. The management boasts of over 20 years of rich and <br></br>varied experience in the shipping and freight forwarding industry.</p>

      <p  className='read'><span>read more</span></p>>
        
      </div>
        
    </div>
    </div>
    </>
  )
}





export default CaseStudies;
