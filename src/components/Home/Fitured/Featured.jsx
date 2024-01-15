"use client"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {Button} from "@nextui-org/button";

import { Image } from "@nextui-org/image";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

import styles from "./Featured.module.css"



export default function Carousel() {
  const list = [
      {
      title: "Cupcake",
      img: "img_1.jpg",
      price: "$500",
      },
      {
      title: "Lemonpie",
      img: "img_2.jpg",
      price: "$3500",
      },
      {
      title: "Postres en tasa",
      img: "img_3.jpg",
      price: "$900",
      },
      {
      title: "Torta frutilla",
      img: "img_4.jpg",
      price: "$3500",
      },
      {
      title: "Torta frutilla",
      img: "img_5.jpg",
      price: "$3500",
      },
      {
      title: "Torta Frutilla",
      img: "img_6.jpg",
      price: "$3500",
      },
  ];

  return (
      <div className={styles.container}>
      <h1 className={styles.heading}>Featured Nury</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}


        navigation={{
          nextEl: `.${styles.swiper_button_next}`,  // Usa la clase de módulo
          prevEl: `.${styles.swiper_button_prev}`,  // Usa la clase de módulo
          clickable: true,
        }}


        modules={[EffectCoverflow, Navigation]}
        className={styles.swiper_container}  // Usa la clase de módulo
      >

      {list.map((item, index) => (
          
          <SwiperSlide className={styles.swiper_slide}> 
              <Card shadow="sm" key={index}>
                  <CardBody className="overflow-visible p-0">
                      <img
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          alt={item.title}
                          className= {styles.img}
                          src={item.img}
                      />
                  </CardBody>
                  <CardFooter className={styles.cardFooter}>
                      <div className={styles.cardTitlePrice}>
                          <b className={styles.cardTitle}>{item.title}</b>
                          <p className={styles.cardPrice}>{item.price}</p>
                      </div>
                      <div className={styles.cardBtn}>
                          <Button className={styles.btn1} color="primary" size="lg" radius="full">
                              Detalles
                          </Button>
                          <Button className={styles.btn2} color="primary" size="lg" radius="full">
                              Comprar
                          </Button>
                      </div>
                  </CardFooter>
              </Card>
          </SwiperSlide>
      ))}            
      </Swiper>


      <div className={styles.slider_controler}>
          <div className={`${styles.swiper_button_prev} ${styles.slider_arrow}`}>
              <img className='w-28' src="/izqueida.svg" alt="" />
          </div>

          <Button color="primary" size="lg" radius="full">
              Button
          </Button>

          <div className={`${styles.swiper_button_next} ${styles.slider_arrow}`}>
              <img className='w-28' src="/dereita.svg" alt="" />
          </div>
      </div>
      
    </div>
  );
}
