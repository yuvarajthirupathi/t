import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const BlogCarousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data.slice(0, 7)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="hi">Latest Blog Posts</h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3 }, // Desktop
            768: { slidesPerView: 2 }, // Tablet
            480: { slidesPerView: 1 }, // Mobile
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="p-4">
              {/* <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex flex-col justify-between border"> */}
              <div className="hero1">
                <h3 className="hello2">{post.title.substring(0, 30)}...</h3>
                <p className="hello3">{post.body.substring(0, 80)}...</p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogCarousel;

