"use client"
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "@/context/products/products";
import Link from "next/link";

import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import { ArrowLeftIcon } from "../icons/ArrowLeftIcon/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon/ArrowRightIcon";
import { Label } from "../Label/Label";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import styles from "./Carousel.module.css"


export default function Carousel() {
    const { products } = useContext(ProductContext);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            return product.status === "featured"
        })
        setFeaturedProducts(filteredProducts)
        setDomLoaded(true);
    }, [products]);

    return (
        <div className={`${styles.container} mx-auto`}>
            <h1 className={styles.title}>Bienvenidos a Catavia Artesanal</h1>
            <>
                {domLoaded && (
                    <>
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
                            {featuredProducts.map((item, index) => (
                                <SwiperSlide key={item._id} className={styles.slide}>
                                    <div className={styles.labelContainer}>
                                        <Label price={item.price} />
                                    </div>
                                    <Card as={Link} href={`/products/details?id=${item._id}`} className={styles.card} shadow="sm" isPressable>
                                        <div className={styles.body}>
                                            <Image
                                                className={`${styles.img} object-cover rounded-xl`}
                                                alt={item.name}
                                                src={item.thumbnails.first.url ? item.thumbnails.first.url : "/defaultProduct.png"}
                                            />
                                        </div>
                                        <div className={styles.footer}>
                                            <div><p className={styles.text}>{item.name}</p></div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={`  ${styles.controlsContainer}`}>
                            <div className={`prev  ${styles.slider_arrow}`}>
                                <Button className={` ${styles.btn}`} isIconOnly startContent={<ArrowRightIcon />} />
                            </div>

                            <Button as={Link} href="/products" className={styles.button} size="lg" radius="full">
                                Ver más
                            </Button>

                            <div className={`next ${styles.slider_arrow}`}>
                                <Button className={styles.btn} isIconOnly startContent={<ArrowLeftIcon />} />
                            </div>
                        </div>
                    </>
                )}
            </>
        </div>
    );
}
