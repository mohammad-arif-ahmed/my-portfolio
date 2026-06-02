import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import networking from "../assets/images/networking.jpg";
import cctv from "../assets/images/cctv.jpg";
import mikrotik from "../assets/images/mikrotik.jpg";
import hardware from "../assets/images/hardware.jpg";

const galleryImages = [
  {
    image: networking,
    title: "Networking Solutions",
    description: "LAN, WAN & Network Infrastructure",
  },
  {
    image: cctv,
    title: "CCTV Installation",
    description: "Security Camera Setup & Maintenance",
  },
  {
    image: mikrotik,
    title: "MikroTik Configuration",
    description: "Router Setup & Network Management",
  },
  {
    image: hardware,
    title: "Hardware Troubleshooting",
    description: "Computer Repair & IT Support",
  },
];

const HeroGallery = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700 shadow-xl">

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {galleryImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">

              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[500px]
                  object-cover
                "
              />

              {/* Overlay */}

              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
                "
              />

              {/* Text */}

              <div
                className="
                absolute
                bottom-0
                left-0
                p-8
                text-white
                "
              >
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-200">
                  {item.description}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default HeroGallery;