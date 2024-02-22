"use client"
import { Card, CardBody, CardFooter } from "@nextui-org/card";


import styles from "./ProductList.module.css"
import Link from "next/link";
import { Dropdown,DropdownTrigger,DropdownMenu ,DropdownItem } from "@nextui-org/dropdown";
import { Pagination} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import { useContext, useState,useEffect, useMemo } from "react";
import { ProductContext } from "@/context/products/products";

export default function ProductList() {

    const { products } = useContext(ProductContext)
    const [filtrados, setFiltrados] = useState(products)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const [page, setPage] = useState(1);
    const productsPerPage = 8;

    const pages = Math.ceil(filtrados.length / productsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;

        return filtrados.slice(start, end);
    }, [page, filtrados]);

    const filtrarPorCategoria = (categoria) => {
        const productosFiltrados = products.filter(producto => {
            return producto.category.includes(categoria);
        });
        setFiltrados(productosFiltrados);
    };

    useEffect(() => {
        if (categoriaSeleccionada) {
            filtrarPorCategoria(categoriaSeleccionada);
        } else {
            setFiltrados(products);
        }
    }, [categoriaSeleccionada, products]);

    const [selectedKeys, setSelectedKeys] = useState(new Set(["Categorias"]));

    const selectedValue = useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    );

    return (
        <div>
            <span className={styles.containerDropdown}>
            <Dropdown>
                <DropdownTrigger>
                    <Button 
                    className="capitalize"
                    color="primary"
                    variant="solid"
                    >
                    {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu  
                    classNames={{base: styles.maxHeightDropdown}}
                    aria-label="Single selection example"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    style={{ maxHeight: '200px', overflowY: 'auto' }}
                >
                    <DropdownItem key="Todos" onClick={() => setCategoriaSeleccionada("")}>Todos</DropdownItem>
                    <DropdownItem key="salados" onClick={() => setCategoriaSeleccionada("salados")}>salados</DropdownItem>
                    <DropdownItem key="chocolatería" onClick={() => setCategoriaSeleccionada("chocolateria")}>chocolatería</DropdownItem>
                    <DropdownItem key="tartas" onClick={() => setCategoriaSeleccionada("tartas")}>tartas</DropdownItem>
                    <DropdownItem key="tortas" onClick={() => setCategoriaSeleccionada("tortas")}>tortas</DropdownItem>
                    <DropdownItem key="postres" onClick={() => setCategoriaSeleccionada("postres")}>postres</DropdownItem>
                    <DropdownItem key="individuales" onClick={() => setCategoriaSeleccionada("individuales")}>individuales</DropdownItem>
                    <DropdownItem key="frutales" onClick={() => setCategoriaSeleccionada("frutales")}>frutales</DropdownItem>
                    <DropdownItem key="regalos" onClick={() => setCategoriaSeleccionada("regalos")}>regalos</DropdownItem>
                    <DropdownItem key="temporada" onClick={() => setCategoriaSeleccionada("temporada")}>temporada</DropdownItem>
                    <DropdownItem key="catering" onClick={() => setCategoriaSeleccionada("catering")}>catering</DropdownItem>
                    <DropdownItem key="desayunos" onClick={() => setCategoriaSeleccionada("desayunos")}>desayunos</DropdownItem>
                    <DropdownItem key="panificados" onClick={() => setCategoriaSeleccionada("panificados")}>panificados</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </span>
            <div className="grid place-content-center">
                <div className="container mx-auto px-8 md:mx-auto flex flex-wrap justify-center gap-4">
                    {items.map((item, index) => (
                        <Link key={item._id} className={styles.card} href={`/products/details?id=${item._id}`}>
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
                <div className="grid place-content-center m-6">
                    <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="secondary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />                
                </div>
            </div>
        </div>
    );
    }
