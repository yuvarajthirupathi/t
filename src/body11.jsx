
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const BlogCarousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data.slice(0, 7)); // Get first 7 posts
      })
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Blog Posts</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={3} // Display 3 boxes at once
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop
          768: { slidesPerView: 2 },  // Tablet
          480: { slidesPerView: 1 },  // Mobile
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex flex-col justify-between border">
              <h3 className="font-semibold text-lg">{post.title.substring(0, 30)}...</h3>
              <p className="text-gray-600 text-sm">{post.body.substring(0, 80)}...</p>
              <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;

