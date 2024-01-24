"use client"
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { Image } from "@nextui-org/image";

import styles from "./Catalog.module.css"
import Link from "next/link";

export default function Catalog() {
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
            "description": "",
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
        {
            "thumbnails": {
                "first": {
                    "url": "cupcake.jpeg"
                },
                "second": {
                    "url": "cupcake.jpeg"
                },
                "third": {
                    "url": null
                }
            },
            "_id": "65b015ea9e9cd4aa01fc2523",
            "name": "Torta de frutillas",
            "description": "",
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
            "_id": "65b015ea9e9cd4aa01fc352b",
            "name": "Torta de frutillas",
            "description": "",
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
            "_id": "65b015ea9e9cd5aa01fc252b",
            "name": "Torta de frutillas",
            "description": "",
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
            "_id": "65b015ea4e9cd4aa01fc252b",
            "name": "Torta de frutillas",
            "description": "",
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
            "_id": "62b015ea9e9cd4aa01fc252b",
            "name": "Torta de frutillas",
            "description": "",
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
        <div className="container mx-auto px-8 md:mx-auto flex flex-wrap justify-center gap-4">
            {list.map((item, index) => (
                <Link className="w-full md:w-1/5" href={`/products/details?id=${item._id}`}>
                    <Card className="w-full" shadow="sm" key={item._id} isPressable onPress={() => console.log("item" + item.title)}>
                        <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.name}
                                    className= {styles.img}
                                    src={item.thumbnails.first.url}
                                />
                        </CardBody>
                        <CardFooter className={styles.cardFooter}>
                            <div className={styles.cardTitlePrice}>
                                <p className={styles.cardTitle}>{item.name}</p>
                                <p className={styles.cardPrice}>${item.price}</p>
                            </div>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
    }
