"use client"
import { useContext, useState, useEffect, useMemo } from "react";
import { ProductContext } from "@/context/products/products";

import { Card } from "@nextui-org/card";
import { Pagination } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";

import { Label } from "@/app/components/Label/Label";

import styles from "./ProductList.module.css"

export default function ProductList() {
    const { products, categories } = useContext(ProductContext);
    const [filtrados, setFiltrados] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState("todos");
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Categorias"]));
    const [page, setPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        if (selectedCategory !== "todos") {
            filtrarPorCategoria(selectedCategory);
        } else {
            setFiltrados(products);
        }
    }, [selectedCategory, products]);

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
                        classNames={{ base: styles.maxHeightDropdown }}
                        aria-label="Single selection example"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                        style={{ maxHeight: '200px', overflowY: 'auto' }}
                        items={categories}
                    >
                        {(item) => (
                            <DropdownItem key={item.value} onPress={() => setSelectedCategory(item.value)}>
                                {item.label}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </span>
            <div className="container mx-auto">
                <div className={styles.container}>
                    {items.map((item, index) => (

                        <Card className={styles.card} shadow="sm" key={item._id} isPressable onPress={() => console.log("item" + item.name)}>
                            <div className={styles.label}>
                                <Label className={styles.text} price={item.price} />
                            </div>
                            <div >
                                <Image alt="ghj" className={styles.img} src={item.thumbnails?.first.url ? item.thumbnails.first.url : "/defaultProduct.png" } />
                            </div>
                            <div className={styles.footer} >
                                <p className={styles.text}>{item.name}</p>
                            </div>
                        </Card>

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
