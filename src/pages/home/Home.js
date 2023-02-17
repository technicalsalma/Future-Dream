import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import '../../App.css'


const Home = () => {
    const slides = [
        {
          url: 'https://exomac.jamstacktemplates.dev/images/hero-image/hero-4.jpg',
          
        },
        {
          url: 'https://exomac.jamstacktemplates.dev/images/hero-image/hero-3.jpg',
        },
        {
          url: 'https://exomac.jamstacktemplates.dev/images/hero-image/hero-1.jpg',
        },
    
        {
          url: 'https://exomac.jamstacktemplates.dev/images/hero-image/hero-2.jpg',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
      const slideLength = slides.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

      const prevSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      
      };
    
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
      };
    
      
      function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    
      useEffect(() => {
        setCurrentSlide(0);
      }, []);
    
      useEffect(() => {
        if (autoScroll) {
          auto();
        }
        return () => clearInterval(slideInterval);
      }, [currentSlide]);

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
       
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  {/* <img src={slide.image} alt="slide" className="image" /> */}
                  <div className="content"> 
                    <h2 className='text-3xl font-extrabold w-[350px]'>Designing awesome brands & experiences</h2>
                    <p>We are an agency located in Bangladesh. We think strategy, craft design, develop digital and create motion. To forward your brand and business.</p>
                    <hr className='hr'/>
                    <button className="--btn --btn-primary">Get Started</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
    );
};

export default Home;