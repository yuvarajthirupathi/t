import React from 'react';
import im1 from'../src/imgs/Group1.png'
import im2 from'../src/imgs/Rated-person1.png'
import im3 from'../src/imgs/Rated-person3.png'
import im4 from'../src/imgs/Rated-person2.png'
import im5 from'../src/imgs/Rated-person4.png'
import im6 from'../src/imgs/Rated-person5.png'
function TestimonialCarousel(){
  return(
    <>
    <h1 className='cut'>
      Why Coustomers love <br></br>working with us
    </h1>
    <img src={im1} alt="" srcset=""  className='cu'/>
    <div className='com'>
    <img src={im2} alt="" srcset="" />
    <img src={im3} alt="" srcset="" />
    <img src={im4} alt="" srcset="" />
    <img src={im5} alt="" srcset="" />
    <img src={im6} alt="" srcset="" />
    

    </div>
    
    </>


  
  );
}

export default TestimonialCarousel;
