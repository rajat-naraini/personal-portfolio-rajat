import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials:React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const testimonials = [
    {
      id: 1,
      content: "Rajat is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into elegant solutions is remarkable. He's not just technically proficient but also a thoughtful team member who elevates the entire project.",
      author: "Vikram Singh",
      position: "Lead Developer, National Informatics Centre",
      image: "/assets/images/testimonials/person1.jpg"
    },
    {
      id: 2,
      content: "Working with Rajat on the Vehicle Management System migration was a pleasure. He approached the complex legacy codebase with confidence and methodically rebuilt it using modern practices. His attention to detail and commitment to maintainable code has made ongoing development much smoother.",
      author: "Anita Patel",
      position: "Project Manager, National Informatics Centre",
      image: "/assets/images/testimonials/person2.jpg"
    },
    {
      id: 3,
      content: "Rajat's technical expertise is impressive, but what truly sets him apart is his problem-solving approach. When faced with our complex data processing requirements, he developed an innovative solution that not only met our needs but also improved overall system performance. He's a developer who truly thinks beyond the code.",
      author: "Michael Johnson",
      position: "CTO, XLSoftek.Inc",
      image: "/assets/images/testimonials/person3.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const pauseAutoplay = () => {
    setIsAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resumeAutoplay = () => {
    setIsAutoplay(true);
  };

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, currentIndex]);

  return (
    <section 
      className="py-16 bg-gray-950 text-white" 
      id="testimonials"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-2">• Endorsements</p>
          <h2 className="text-4xl font-mono font-bold mb-4">Testimonials</h2>
          <p className="text-gray-400 max-w-2xl text-center">
            What colleagues and clients have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Control buttons */}
          <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="mb-6 text-emerald-400">
                      <Quote size={32} />
                    </div>
                    
                    <p className="text-gray-300 text-lg italic mb-8">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/assets/images/testimonials/placeholder.jpg';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.author}</h4>
                        <p className="text-emerald-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Mobile navigation dots */}
          <div className="flex justify-center space-x-2 mt-8 md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? 'bg-emerald-400' : 'bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Desktop navigation dots */}
          <div className="hidden md:flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-emerald-400' : 'bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;