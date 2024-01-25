"use client"

import { useState,useEffect } from "react";
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
                        "url": null
                    },
                    "third": {
                        "url": null
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

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
      }, []);

    const [quantity, setQuantity] = useState(1);

    const suma = () => {
        if (quantity < 100) {
        setQuantity(prevQuantity => prevQuantity + 1);
        }
    };
  
    const resta = () => {
      if (quantity > 1) {
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

    const nombresIngredientes = (ingredients) => {
        if (!ingredients || ingredients.length === 0) {
            return "No hay ingredientes disponibles.";
        }
        
        const ingredientNombre = ingredients.map((ingredient) => ingredient.ingredient.name);
        const nombres = ingredientNombre.join(", ");
        
        return `Este producto está hecho con ${nombres}.`;
    };
    
    const ingredientsText = nombresIngredientes(list[0].payload.ingredients);

    return (
    <div className={`mx-4 my-4 p-7 border-4 ${styles.conteiner}`} >
        <div className={`grid mb-2 grid-cols-12 gap-2 ${styles.conteinerTarjeta}`}>
            <div className={`col-span-5 row-span-3 ${styles.conteinerImg}`}>
                <img className= {`${styles.img} `} src={`/${list[0].payload.thumbnails.first.url}`} alt="" />
            </div>
            <div className={`h-full col-span-7 row-span-3 grid grid-cols-1 gap-2`}>

                <div className={`col-span-1 row-span-2 grid place-items-center ${styles.conteinerName}`}>
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

                <div className={`col-span-1 row-span-2 flex place-content-around items-center ${styles.conteinerCantidad}`}>
                    <p className={`${styles.text}`}>unidad ${list[0].payload.price}</p>
                    <div className={`flex h-full place-content-around items-center`}>
                        <button onClick={resta} className={`w-9  h-8`}><img src="/dereita.svg" alt="" /></button>
                        <input
                            type="text"
                            value={quantity}
                            onChange={valor}
                            className={`mx-2 w-16  rounded-lg text-center ${styles.num}`}
                        />
                        <button onClick={suma} className={`w-9  h-8`}><img src="/izqueida.svg" alt="" /></button>
                    </div>
                    <div>
                        <p className={`${styles.text}`}>Total: {quantity * list[0].payload.price}</p>
                    </div>
                    <Button className={`${styles.text}`} onClick={Cart} color="primary">
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