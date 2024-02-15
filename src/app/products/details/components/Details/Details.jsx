"use client"

import { useState,useEffect, useRef } from "react";
import {Button} from "@nextui-org/button";

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
                "description": "hola nena como estas mi amor queres mostrarme las patas o que?",
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
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("ul > li > img")[currentIndex];

        if (imgNode) {
        imgNode.scrollIntoView({
            behavior: "smooth"
        });
        }

    }, [currentIndex]);


    const scrollToImage = (direction) => {
        if (direction === 'prev') {
          setCurrentIndex(currentIndex + 1)
        }
    }
    

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
    <div className={`container mx-auto mb-4 p-7 border-4 ${styles.conteiner}`} >
        <div className={`grid mb-2 grid-cols-12 gap-2 ${styles.conteinerTarjeta}`}>
            <div className={`md:col-span-5 md:row-span-3 row-span-1 col-span-12 ${styles.conteinerImg}`}>
                
                <div className={`${styles.slider_container} `}>
                    <div className={`${styles.leftArrow} `} onClick={() => scrollToImage('prev')}>&#10092;</div>
                    <div className={`${styles.rightArrow} `} onClick={() => scrollToImage('next')}>&#10093;</div>
                    <div className={`${styles.container_images} `}>
                        <ul ref={listRef}>
                            <li key="1" className= {`${styles.li} `}>
                                <img className= {`${styles.img} `} src={`/${list[0].payload.thumbnails.first.url}`} alt="" />
                            </li>
                            <li key="2" className= {`${styles.li} `}>
                                <img className= {`${styles.img} `} src={`/${list[0].payload.thumbnails.second.url}`} alt="" />
                            </li >
                            <li key="3" className= {`${styles.li} `}>
                                <img className= {`${styles.img} `} src={`/${list[0].payload.thumbnails.third.url}`} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.dots_container} `}>

                    </div>
                </div>

            </div>
            <div className={`h-full md:col-span-7 row-span-3 grid grid-cols-1 gap-2 col-span-12`}>

                <div className={`col-span-1 row-span-2 grid place-items-center  ${styles.conteinerName}`}>
                    <p className={`${styles.name} `}>{list[0].payload.name}</p>
                </div>

                <div className={`col-span-1 row-span-6 grid place-items-center ${styles.conteinerDescripcion}`}>
                <>
                {domLoaded && (list[0].payload.description ? (
                    <p className={styles.text}>{list[0].payload.description}</p>
                    ) : null
                )}
                </>
                    <p className={`${styles.text}`}><b>importante</b></p>
                    <p className={`${styles.text}`}>
                    acordate gordito boludo que los productos 
                    son artesanales devido a esto tiene 
                    un tiempo de fabricacion de aproximadamente 3 dias gato gordo inmundo
                    </p>
                </div>

                <div className={`col-span-1 row-span-2 flex flex-col sm:flex-row sm:place-content-around items-center ${styles.conteinerCantidad}`}>
                    <p className={`${styles.text}`}>unidad ${list[0].payload.price}</p>
                    <div className={`${styles.containerImput} flex h-full place-content-around justify-evenly items-center`}>
                        <button onClick={() => updateQuantity('resta')} className={`w-9  h-8`}><img src="/dereita.svg" alt="" /></button>
                        <input
                            type="text"
                            value={quantity}
                            onChange={valor}
                            className={`mx-2 w-16  rounded-lg text-center ${styles.num}`}
                        />
                        <button onClick={() => updateQuantity('suma')} className={`w-9  h-8`}><img src="/izqueida.svg" alt="" /></button>
                    </div>
                    <div className={""}>
                        <p className={`${styles.text}`}>Total: {quantity * list[0].payload.price}</p>
                    </div>
                    <Button className={`mr-1 ${styles.text} ${styles.btn}`} onClick={Cart} color="primary">
                        Agregar al carrito
                    </Button>
                </div>

            </div>
        </div>

        <div className={`h-20 grid place-items-center  ${styles.conteinerIngredientes}`}>
            <p className={styles.text}>
                {ingredientsText}
            </p>
        </div>
    </div>
     
    )
  }