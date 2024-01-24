"use client"

import { useState } from "react";

import {Button, ButtonGroup} from "@nextui-org/button";

import styles from "./Details.module.css";

export default function Details() {

    const [quantity, setQuantity] = useState(1);

    const suma = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const resta = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
  
    const valor = (event) => {
      const newValue = parseInt(event.target.value, 10);
      if (!isNaN(newValue) && newValue >= 1) {
        setQuantity(newValue);
      }
    };

    const Cart = () => {
        console.log("Producto añadido al carrito con cantidad:", quantity);
      };

    const list = [
        {
            "thumbnails": {
                "first": {
                    "url": "tortafrutilla1.jpeg"
                },
                "second": {
                    "url": "cupcake.jpeg"
                },
                "third": {
                    "url": null
                }
            },
            "_id": "65b015ea9e9cd4aa01fc252b",
            "name": "Torta de frutillas",
            "description": "Hola nena",
            "category": [
                "tortas",
                "frutales"
            ],
            "status": "featured",
            "price": 200,
            "ingredients": [
                {
                    "ingredient": "65b012adbf555c3a711163ab",
                    "quantity": 200,
                    "_id": "65b1037c356f3523ae42909d"
                }
            ],
            "extras": [],
            "__v": 0
        },
    ];
    return (
    <div className="mx-4 my-4 bg-orange-500 p-7 border-4 border-orange-50 rounded-lg" >
        <div className="grid mb-2 grid-cols-12 gap-2">
            <div className={`h-96 col-span-5 row-span-3 border-8  border-orange-50 rounded-lg shadow-2xl`}>
                <img className= {`${styles.img} `} src={`/${list[0].thumbnails.first.url}`} alt="" />
            </div>
            <div className={`h-full col-span-7 row-span-3 grid grid-cols-1 gap-2`}>

                <div className={`col-span-1 row-span-2 bg-orange-500 grid place-items-center border-8  border-orange-50 rounded-lg shadow-2xl`}>
                    {list[0].name}
                </div>

                <div className={`col-span-1 row-span-6 bg-orange-700 grid place-items-center border-8  border-orange-50 rounded-lg shadow-2xl`}>
                    <p>{list[0].description}</p>
                    <p><b>importante</b></p>
                    <p>acordate gordito boludo que los productos son artesanales devido a esto tiene 
                    un tiempo de fabricacion de aproximadamente 3 dias gato gordo inmundo</p>
                </div>

                <div className={`col-span-1 row-span-2 bg-orange-900 flex place-content-around items-center border-8  border-orange-50 rounded-lg shadow-2xl`}>unidad ${list[0].price}
                    <div className="flex h-full place-content-around items-center">
                        <button onClick={resta} className="w-9  h-8"><img src="/dereita.svg" alt="" /></button>
                        <input
                            type="text"
                            value={quantity}
                            onChange={valor}
                            className="mx-2 w-8 h-8 rounded-lg text-center"
                        />
                        <button onClick={suma} className="w-9  h-8"><img src="/izqueida.svg" alt="" /></button>
                    </div>
                    <div>Total: {quantity * list[0].price}</div>
                    <button onClick={Cart}>Agregar al carrito</button>
                </div>

            </div>
        </div>
        <div className="h-20 bg-orange-400 grid place-items-center border-8 border-orange-50 rounded-lg shadow-2xl">ingredients</div>
    </div>
     
    )
  }