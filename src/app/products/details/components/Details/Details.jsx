"use client"

import { ProductContext } from '@/context/products/products';
import { CartContext } from '@/context/cart/cart';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


import { useContext, useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { ArrowLeftIcon } from '@/app/components/icons/ArrowLeftIcon/ArrowLeftIcon';
import { ArrowRightIcon } from '@/app/components/icons/ArrowRightIcon/ArrowRightIcon';

import { Button } from "@nextui-org/button";
import { StrawberryIcon } from "@/app/admin/components/icons/StrawberryIcon/StrawberryIcon";

import styles from "./Details.module.css";

export default function Details() {

    //-- encontrar Prod --
    const searchParams = useSearchParams();
    const id = searchParams.get('id')

    const { getProductById, products } = useContext(ProductContext)

    const [product, setProduct] = useState({})

    useEffect(() => {
        const prod = getProductById(id)
        setProduct(prod)
    }, [products])

    //-- Agregar al carrito --

    const {addProductCart} = useContext(CartContext)

    const handleAddToCart = () => {

        addProductCart(product, quantity);
    
        alert("¡Producto agregado al carrito!" , quantity)
    };

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
            if (newValue < 100 && newValue >= 1) {
                setQuantity(newValue);
            }
        }
    };
    // ---texto de ingredientes---

    const nombresIngredientes = (ingredients) => {
        if (!ingredients || ingredients.length === 0) {
            return "No hay ingredientes disponibles.";
        }

        const ingredientNombre = ingredients
            .filter(ingredient => ingredient.category === "ingredient")
            .map(ingredient => ingredient.name);
        const nombres = ingredientNombre.join(", ");

        return nombres ? `Este producto está hecho con ${nombres}.` : "No hay ingredientes disponibles.";
    };

    const ingredientsText = nombresIngredientes(product.elements);

    return (
        <div className={`container mx-auto my-10 p-7 border-4 ${styles.conteiner}`} >
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
                                            <img alt="Card background" className={`${styles.img} object-cover rounded-xl`} src={product.thumbnails?.first.url ? product.thumbnails.first.url : "/defaultProduct.png"} />
                                        </SwiperSlide>
                                        {product.thumbnails?.second.url && (
                                            <SwiperSlide className={styles.slide}>
                                                <img alt="Card background" className={`${styles.img} object-cover rounded-xl`} src={product.thumbnails.second.url} />
                                            </SwiperSlide>
                                        )}
                                        {product.thumbnails?.third.url && (
                                            <SwiperSlide className={styles.slide}>
                                                <img alt="Card background" className={`${styles.img} object-cover rounded-xl`} src={product.thumbnails.third.url} />
                                            </SwiperSlide>
                                        )}
                                        <div className={`${styles.controlsContainer}`}>
                                            <div className={`prev ${styles.slider_arrow}`}>
                                                <ArrowRightIcon />
                                            </div>

                                            <div className={`next ${styles.slider_arrow}`}>
                                                <ArrowLeftIcon />
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
                        <p className={`${styles.name} `}>{product.name}</p>
                        <>
                            {domLoaded && (product.description ? (
                                <p className={styles.text}>{product.description}</p>
                            ) : null
                            )}
                        </>
                        <br />
                        <p className={`mb-3 ${styles.text}`}>
                            <span className={`flex items-center gap-4 ${styles.sub}`}>
                                <StrawberryIcon className={styles.svg} />Ingredientes:
                            </span>
                            {ingredientsText}
                        </p>
                    </div>

                    <div className={`col-span-1 row-span-6`}>
                        <p className={`mb-3 ${styles.text}`}>
                            <span className={`flex items-center gap-4 ${styles.sub}`}>
                                <StrawberryIcon className={styles.svg} />Recorda:
                            </span>
                            Que para realizar un pedido de mis productos, 
                            te pido amablemente que lo hagas
                            con al menos 3 días de anticipación. De esta manera, 
                            puedo asegurarme de prepararlo todo con el cuidado y
                            la atención que mereces.
                        </p>
                    </div>

                    <div className={`col-span-1 row-span-2 flex flex-col sm:flex-row sm:place-content-around items-center ${styles.conteinerCantidad}`}>
                        <p className={`${styles.text}`}>unidad ${product.price}</p>
                        <div className={`flex h-full place-content-around justify-evenly items-center`}>
                            <button onClick={() => updateQuantity('resta')} className={`w-8  h-8`}><ArrowRightIcon /></button>
                            <input
                                type="text"
                                value={quantity}
                                onChange={valor}
                                className={`mx-2 w-16  rounded-lg text-center ${styles.num}`}
                            />
                            <button onClick={() => updateQuantity('suma')} className={`w-8  h-8`}><ArrowLeftIcon /></button>
                        </div>
                        <div className={""}>
                            <p className={`${styles.text}`}>Total: {quantity * product.price}</p>
                        </div>
                        <Button className={`${styles.text} ${styles.btn}`} onClick={handleAddToCart}  color="primary">
                            Agregar al carrito
                        </Button>
                    </div>

                </div>
            </div>
        </div>

    )
}