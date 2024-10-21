import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import Navbar from './Navbar';

const AlbumsShortcuts: React.FC = () => {
  const albums = [
    {
      name: 'Summer 2023',
      images: [
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
      ],
    },
    {
      name: 'Company Retreat',
      images: [
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
      ],
    },
    {
      name: 'Holiday Photos',
      images: [
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
        'https://elearningindustry.com/wp-content/uploads/2022/08/How-To-Make-Your-Next-Group-Project-A-Nice-And-Fun-Experience.jpg',
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 mt-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg border border-orange-300">
              <h3 className="text-lg font-semibold text-center text-gray-800 p-2">{album.name}</h3>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                modules={[Navigation, Pagination]}
              >
                {album.images.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img src={image} alt={`${album.name} Image ${imgIndex + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumsShortcuts;
