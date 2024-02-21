"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


import { useState, useEffect } from "react";

import {Button} from "@nextui-org/button";
import { StrawberryIcon } from "@/app/admin/components/icons/StrawberryIcon/StrawberryIcon";

import styles from "./Details.module.css";

export default function Details() {
    const list = [
        {
            "status": "success",
            "message": "El elemento ha sido actualizado.",
            "payload": {
                "thumbnails": {
                    "first": {
                        "url": "tortafrutilla1.jpeg"
                    },
                    "second": {
                        "url": "tortafrutilla2.jpeg"
                    },
                    "third": {
                        "url": "cupcake.jpeg"
                    }
                },
                "_id": "65b1677814c4fd9e18e25884",
                "name": "Torta de frutillas",
                "description": "Una tarta de frutillas es un postre clásico que consta de una base de masa horneada, generalmente de masa quebrada o masa para tarta, rellena con crema pastelera o queso crema, y cubierta con frutillas frescas.",
                "category": [
                    "tortas",
                    "frutales"
                ],
                "status": "featured",
                "price": 200,
                "ingredients": [
                    {
                        "ingredient": {
                            "name": "Harina de trigo",
                            "pricexg": 2,
                            "status": true,
                            "_id": "65b012adbf555c3a711163ab"
                        },
                        "quantity": 100,
                        "_id": "65b170aa6566ee0eaa1ffab8"
                    },
                    {
                        "ingredient": {
                            "name": "manteca",
                            "pricexg": 2,
                            "status": true,
                            "_id": "65b012adbf555c3a711163ab"
                        },
                        "quantity": 100,
                        "_id": "65b170aa6566ee0eaa1ffab8"
                    },
                    {
                        "ingredient": {
                            "name": "frutillas",
                            "pricexg": 2,
                            "status": true,
                            "_id": "65b012adbf555c3a711163ab"
                        },
                        "quantity": 100,
                        "_id": "65b170aa6566ee0eaa1ffab8"
                    },

                ],
                "extras": [],
                "__v": 0
            }
        }
    ];
    // ---hidratacion---


    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
      }, []);

    // ---cantidad y precio---

    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (operation) => {
        if (operation === 'suma' && quantity < 100) {
          setQuantity(prevQuantity => prevQuantity + 1);
        } else if (operation === 'resta' && quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
        }
      };
  
    const valor = (event) => {
      const newValue = parseInt(event.target.value, 10);
      if (!isNaN(newValue)) {
        if(newValue < 100 && newValue >= 1){
            setQuantity(newValue);
        }
      }
    };

    const Cart = () => {
        console.log("Producto añadido al carrito con cantidad:", quantity);
      };
    
    // ---texto de ingredientes---

    const nombresIngredientes = (ingredients) => {
        if (!ingredients || ingredients.length === 0) {
            return "No hay ingredientes disponibles.";
        }
        
        const ingredientNombre = ingredients.map((ingredient) => ingredient.ingredient.name);
        const nombres = ingredientNombre.join(", ");
        
        return `Este producto está hecho con ${nombres}.`;
    };
    
    const ingredientsText = nombresIngredientes(list[0].payload.ingredients);

    //---slider de mierda---


    return (
    <div className={`container mx-auto mb-4 p-7 border-4 ${styles.conteiner}`} >
        <div className={`grid mb-2 grid-cols-12 gap-2 ${styles.conteinerTarjeta}`}>
            <div className={`lg:col-span-5 lg:row-span-3 row-span-1 col-span-12 ${styles.conteinerImg}`}>
                
                <div className={`${styles.slider_container} `}>
                    <div className={`${styles.conteinerImg} `}>
                        <>
                        {domLoaded && (
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
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
                                <SwiperSlide className={styles.slide}>
                                            <img alt="Card background" className={`${styles.img} object-cover rounded-xl`} src={`/${list[0].payload.thumbnails.first.url}`} />
                                </SwiperSlide>
                                <SwiperSlide className={styles.slide}>
                                            <img alt="Card background" className={`${styles.img} object-cover rounded-xl`} src={`/${list[0].payload.thumbnails.second.url}`} />
                                </SwiperSlide>
                                <SwiperSlide className={styles.slide}>
                                            <img alt="Card background" className={`${styles.img} object-cover rounded-xl`} src={`/${list[0].payload.thumbnails.third.url}`} />
                                </SwiperSlide>
                                <div className={`${styles.controlsContainer}`}>
                                    <div className={`prev ${styles.slider_arrow}`}>
                                        <img src="/dereita.svg" alt="" />
                                    </div>

                                    <div className={`next ${styles.slider_arrow}`}>
                                        <img src="/izqueida.svg" alt="" />
                                    </div>
                                </div>
                            </Swiper>
                            
                        )}

                        </>
                    </div>
                </div>

            </div>
            <div className={`h-full lg:col-span-7 row-span-3 grid grid-cols-1 gap-2 col-span-12 ml-0 lg:ml-6`}>

                <div className={`col-span-1 row-span-2 `}>
                    <p className={`${styles.name} `}>{list[0].payload.name}</p>
                    <>
                    {domLoaded && (list[0].payload.description ? (
                        <p className={styles.text}>{list[0].payload.description}</p>
                        ) : null
                    )}
                    </>
                    <br/>
                    <p className= {`mb-3 ${styles.text}`}>
                        <span className={`flex items-center gap-4 ${styles.sub}`}>
                        <StrawberryIcon className={styles.svg}  />Ingredientes:
                        </span>
                            {ingredientsText}
                    </p>
                </div>

                <div className={`col-span-1 row-span-6`}>
                    <p className= {`mb-3 ${styles.text}`}> 
                    <span className={`flex items-center gap-4 ${styles.sub}`}>
                        <StrawberryIcon className={styles.svg}  />Ingredientes:
                    </span>
                    acordate gordito boludo que los productos 
                    son artesanales devido a esto tiene 
                    un tiempo de fabricacion de aproximadamente 3 dias gato gordo inmundo
                    </p>
                </div>

                <div className={`col-span-1 row-span-2 flex flex-col sm:flex-row sm:place-content-around items-center ${styles.conteinerCantidad}`}>
                    <p className={`${styles.text}`}>unidad ${list[0].payload.price}</p>
                    <div className={`flex h-full place-content-around justify-evenly items-center`}>
                        <button onClick={() => updateQuantity('resta')} className={`w-8  h-8`}><img src="/dereita.svg" alt="" /></button>
                        <input
                            type="text"
                            value={quantity}
                            onChange={valor}
                            className={`mx-2 w-16  rounded-lg text-center ${styles.num}`}
                        />
                        <button onClick={() => updateQuantity('suma')} className={`w-8  h-8`}><img src="/izqueida.svg" alt="" /></button>
                    </div>
                    <div className={""}>
                        <p className={`${styles.text}`}>Total: {quantity * list[0].payload.price}</p>
                    </div>
                    <Button className={`${styles.text} ${styles.btn}`} onClick={Cart} color="primary">
                        Agregar al carrito
                    </Button>
                </div>

            </div>
        </div>
    </div>
     
    )
  }