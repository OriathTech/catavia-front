"use client"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {Button} from "@nextui-org/button";

import { Image } from "@nextui-org/image";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { useState,useEffect } from "react";

import { EffectCoverflow, Navigation } from 'swiper/modules';

import styles from "./Featured.module.css"


export default function Featured() {
  const list = [
      {
      title: "tortafrutilla",
      img: "tortafrutilla1.jpeg",
      price: "$500",
      key: 1, 
      },
      {
      title: "tortafrutilla2",
      img: "tortafrutilla2.jpeg",
      price: "$3500",
      key: 2, 
      },
      {
      title: "cupcake",
      img: "cupcake.jpeg",
      price: "$900",
      key: 3,
      },
      {
      title: "lemonpie",
      img: "lemonpie.jpeg",
      price: "$3500",
      key: 4 ,
      },
      {
      title: "postres",
      img: "postres.jpeg",
      price: "$3500",
      key: 5 ,
      },
      {
      title: "cataviaLogo",
      img: "cataviaLogo2.png",
      price: "$3500",
      key: 6,
      },
  ];

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
      <div className={styles.container}>
      <h1 className={styles.heading}>Featured Nury</h1>
      <>
      {domLoaded && (
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
              <Card shadow="sm" key={item.key} isPressable onPress={() => console.log("item" + item.title)}>
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
                          <p className={styles.cardTitle}>{item.title}</p>
                          <p className={styles.cardPrice}>{item.price}</p>
                      </div>
                  </CardFooter>
              </Card>
          </SwiperSlide>
      ))}            
      </Swiper>
    )}
    </>

      <div className={styles.slider_controler}>
          <div className={`${styles.swiper_button_prev} ${styles.slider_arrow}`}>
              <img src="/dereita.svg" alt="" />
          </div>

          <Button color="primary" size="lg" radius="full">
              Ver Mas
          </Button>

          <div className={`${styles.swiper_button_next} ${styles.slider_arrow}`}>
              <img src="/izqueida.svg" alt="" />
          </div>
      </div>
      
    </div>
  );
}
