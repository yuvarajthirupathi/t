import React, { useEffect, useState } from "react";

import imj from '../src/imgs/mobile.png'
import imk from '../src/imgs/Code_perspective_matte.png'

const ServicesCarousel = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBlogs(data.slice(0, 7)))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand", // Lazy loading for performance
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="services-carousel">
      <h2>Services we offer</h2>

      <div className="carousel">
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <input type="radio" name="slider" id="slide4" />
        <input type="radio" name="slider" id="slide5" />

        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="card">
              <div className="icon">
                <img src={imj} alt="hello" />
              </div>
              <div className="title">Mobile App Development</div>
              <div className="desc">
                A Website is an extension of yourself and we can help you to
                express it properly.
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card">
              <div className="icon">
                <img src={imk} alt="hello" />
              </div>
              <div className="title">Web Design & Development</div>
              <div className="desc">
                Your website is your number one marketing asset because we live
                in a digital ageA Website is an extension of yourself and we can
                help you to express it properly. Your website is your number one
                marketing asset because we live in a digital age..
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card">
              <div className="icon">
                <img src={imj} alt="hello" />
              </div>
              <div className="title">Software Testing Service</div>
              <div className="desc">
                We help ensure your software performs well in all conditions
                with rigorous testing.A Website is an extension of yourself and
                we can help you to express it properly. Your website is your
                number one marketing asset because we live in a digital age.
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card">
              <div className="icon">⚙️</div>
              <div className="title">Software Development</div>
              <div className="desc">
                Custom software solutions tailored to your business needs and
                growth.
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card">
              <div className="icon">☁️</div>
              <div className="title">Cloud Services</div>
              <div className="desc">
                Scalable and secure cloud solutions for modern businesses.A
                Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-nav">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
          <label htmlFor="slide5"></label>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
