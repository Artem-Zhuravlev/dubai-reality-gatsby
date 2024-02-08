import { Settings } from "react-slick"

export const settings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  centerMode: true,
  dots: true,
  speed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        speed: 0,
        cssEase: undefined
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        speed: 0,
        cssEase: undefined
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        centerMode: true,
        speed: 0,
        cssEase: undefined
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        centerMode: false,
        speed: 0,
        cssEase: undefined
      }
    },
  ]
}