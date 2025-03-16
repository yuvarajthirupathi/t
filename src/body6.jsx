import React from 'react';
import T from'../src/imgs/Deco-line.png'
import Ti from'../src/imgs/Rect.png'
import Ti1 from'../src/imgs/Rect1.png'
import Ti2 from'../src/imgs/Rect3.png'
import Ti3 from'../src/imgs/frame1.png'
import Ti4 from'../src/imgs/Person1.png'
import Ti5 from'../src/imgs/Person2.png'
import Ti6 from'../src/imgs/Person3.png'
function CaseStudies(){
  return(
    <>
    <div className='all1'>
      <div className='en'>
      <img src={T} alt='ji'/>
      <h1> Way of bulding  <br></br>Great Software</h1>
      </div>
    <div className='Ci1'>
      
      <div className='Cii1'>
      <h1> Build the right team to scale</h1>
      <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers</p>
      <p>Our delivery model helps you cut costs and deliver within budget.</p>
      <img src={Ti3} alt="" srcset="" /><br></br><br></br>
      <img src={Ti4} alt="" srcset="" />
      </div>
      <div>
        <img src={Ti} alt="" srcset="" />

      </div>
      <br></br>
    </div>
    <div className='Ci2'>
      <div>
      <img src={Ti1} alt="" srcset="" />
      </div>
      <div className='Cii2'>
      <h1> Build the right team to scale</h1>
      <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks<br></br> with you long term not the case with freelancers</p>
      <p>Our delivery model helps you cut costs and deliver within budget.</p>
      <img src={Ti3} alt="" srcset="" /><br></br><br></br>
      <img src={Ti5} alt="" srcset="" />
      

      </div>
      
        
    </div>
    <div className='Ci3'>
      <div className='Cii3'>
      <h1> Build the right team to scale</h1>
      <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks <br></br>with you long term not the case with freelancers</p>
      <p>Our delivery model helps you cut costs and deliver within budget.</p>
      <img src={Ti3} alt="" srcset="" /><br></br><br></br>
      <img src={Ti6} alt="" srcset="" />
      </div>
      <div>
        <img src={Ti2} alt="" srcset="" />

      </div>
        
    </div>
    </div>
    </>
  )
}
export default CaseStudies;
