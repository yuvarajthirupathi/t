import React from 'react';
import img from'../src/imgs/Logo.png'
import imi from'../src/imgs/google.png'


function Footer() {
  return (
    <>
    <div className='joker'>
        <div>
            <img src={img} alt="alt" srcset="" />
            <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
            <img src={imi} alt="li"/>


        </div>
        <div>
            <h1>Link</h1>
            <p>
            About Us<br></br> Services <br></br>Case Studies <br></br>How it works<br></br> Blog<br></br> Careers<br></br> Areas We Serve
            </p>
          
        </div>
        <div>
            <h1>Contact</h1>
            <p>Lorem Ipsum is simply dummy text<br></br> of the printing and typesetting <br></br>industry.</p>
            <p>+908 89097 890</p>
        </div>
        
    </div>
    <div>
    <hr></hr>
    <p className='hi'>copy rights</p>
    </div>
    </>

  );
}

export default Footer;
