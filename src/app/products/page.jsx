"use client"
import { useContext, useState, useEffect, useMemo } from "react";
import { ProductContext } from "@/context/products/products";
import { SessionContext } from "@/context/session/session";
import Link from "next/link";

import { Card } from "@nextui-org/card";
import { Pagination } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";

import { Label } from "@/app/components/Label/Label";

import styles from "./page.module.css"

export default function ProductsPage() {
    const { products, categories } = useContext(ProductContext);
    const { session } = useContext(SessionContext);
    const [filtrados, setFiltrados] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState({value: "todos", label: "Todos"});
    const [selectedKeys, setSelectedKeys] = useState(new Set(["todos"]));
    const [page, setPage] = useState(1);
    const productsPerPage = 12;



    useEffect(() => {
        const filteredProducts = products.filter(product => product.status !== "offline");

        if (selectedCategory.value !== "todos") {
            filtrarPorCategoria(selectedCategory.value, filteredProducts);
        } else {
            setFiltrados(filteredProducts);
        }
    }, [selectedCategory, products]);

    const pages = Math.ceil(filtrados.length / productsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;

        return filtrados.slice(start, end);
    }, [page, filtrados]);

    const filtrarPorCategoria = (categoria, array ) => {
        const filteredProducts = array.filter(producto => {
            return producto.category.includes(categoria);
        });
        setFiltrados(filteredProducts);
    };

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <div>
            {!session && (
                <div className={`container mx-auto`}>
                    <h2 className={` md:my-8 md:mr-8  md:ml-4 p-1 md:w-full rounded-lg pl-3 bg-red-400 ${styles.text}`}>Únete a nuestra comunidad. ¡Inicia sesión o regístrate para formar parte!</h2>
                </div>
            )}

            <div className={`w-full flex flex-col md:flex-row container mx-auto `}>
                <span className={`mt-8 md:my-8 mx-8 md:ml-8 md:mr-0 rounded-lg ${styles.containerDropdown}`}>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                className={`capitalize w-full ${styles.textLink}`}
                                color="primary"
                                variant="solid"
                            >
                                {selectedKeys}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            classNames={{ base: styles.maxHeightDropdown }}
                            aria-label="Single selection example"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                            items={categories}
                        >
                            {(item) => (
                                <DropdownItem
                                    key={item.value} onPress={() => setSelectedCategory(item)}>
                                    {item.label}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </span>
                <h2 className={`m-6 md:my-8 md:mr-8  md:ml-4 p-1 md:w-full rounded-lg pl-3 bg-orange-200 ${styles.categoryContainer}`}> Mostrando Categoría: {selectedCategory.label}</h2>
            </div>

            <div className="container mx-auto">
                <div className={`${styles.container}`}>
                    {items.map((item, index) => (

                        <Card className={styles.card} shadow="sm" key={item._id} isPressable as={Link} href={`products/details?id=${item._id}`}>
                            <div className={styles.label}>
                                <Label className={styles.text} price={item.price} />
                            </div>
                            <div >
                                <Image alt="Thumbnail Producto Catavia" className={styles.img} src={item.thumbnails?.first.url ? item.thumbnails.first.url : "/defaultProduct.png"} />
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
