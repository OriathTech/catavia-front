"use client"
import { Card} from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Label } from "./Label/Label";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { useState, useEffect } from "react";

import { Image } from "@nextui-org/image";

import { Navigation, Pagination } from 'swiper/modules';

import styles from "./Carousel.module.css"


export default function Carousel() {
    const list = [
        {
            title: "Torta de Frutillas con Chocolate",
            img: "/cupcake.jpeg",
            price: 500,
            key: 1,
        },
        {
            title: "Mousse de Fernet y Chocolate",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 2,
        },
        {
            title: "Cupcakes X6",
            img: "/cataviaLogo2.png",
            price: 99999,
            key: 3,
        },
        {
            title: "Cupcakes de Jamon y Queso",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 4,
        },
        {
            title: "postres",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 5,
        },
        {
            title: "cataviaLogo",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 6,
        },
        {
            title: "cataviaLogo",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 7,
        },
        {
            title: "cataviaLogo",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 8,
        },
        {
            title: "cataviaLogo",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 9,
        },
        {
            title: "cataviaLogo",
            img: "/cataviaLogo2.png",
            price: 3500,
            key: 10,
        },
    ];

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <div className={`${styles.container} mx-auto`}>
            <h1 className={styles.title}>Bienvenidos a Catavia Artesanal</h1>
            <>
                {domLoaded && (
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        breakpoints={{
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            800: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1300: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1800: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                            2500: {
                                slidesPerView: 6,
                                spaceBetween: 60,
                            }
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}

                        navigation={{
                            nextEl: `.next`,
                            prevEl: `.prev`,
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className={styles.swiper}
                    >
                        {list.map((item, index) => (

                            <SwiperSlide key={item.key} className={styles.slide}>
                                <div className={styles.labelContainer}>
                                <Label price={item.price}/>
                                </div>
                                <Card className={styles.card} shadow="sm" key={item.key} isPressable onPress={() => console.log("item" + item.title)}>
                                    <div className={styles.body}>
                                        <Image alt="Card background" className={`${styles.img} object-cover rounded-xl`} src={item.img} />
                                    </div>
                                    <div className={styles.footer}>
                                        <div><p className={styles.text}>{item.title}</p></div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </>

            <div className={styles.controlsContainer}>
                <div className={`prev ${styles.slider_arrow}`}>
                    <img src="/dereita.svg" alt="" />
                </div>

                <Button className={styles.button} size="lg" radius="full">
                    Ver más
                </Button>

                <div className={`next ${styles.slider_arrow}`}>
                    <img src="/izqueida.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
