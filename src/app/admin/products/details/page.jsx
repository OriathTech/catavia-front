"use client"
import { useSearchParams } from 'next/navigation';
import { useContext, useState, useEffect } from "react"

import { ProductContext } from "@/context/products/products"
import { ElementsContext } from '@/context/elements/elements';

import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from '@nextui-org/button';
import { CircularProgress } from "@nextui-org/progress";

import ElementDropdown from '../components/ElementDropdown/ElementDropdown';
import ElementTable from '../components/ElementTable/ElementTable';
import UploadImg from '../components/UploadImg/UploadImg';

import styles from "./page.module.css"

const productCategories = [
    { label: "Catering", value: "catering" },
    { label: "Chocolatería", value: "chocolatería" },
    { label: "Desayunos", value: "desayunos" },
    { label: "Frutales", value: "frutales", },
    { label: "Individuales", value: "individuales" },
    { label: "Panificados", value: "panificados" },
    { label: "Postres", value: "postres" },
    { label: "Regalos", value: "regalos" },
    { label: "Salados", value: "salados" },
    { label: "Tartas", value: "tartas" },
    { label: "Temporada", value: "temporada" },
    { label: "Tortas", value: "tortas" }
]

const productStatus = [
    { label: "Online", value: "online" },
    { label: "Offline", value: "offline" },
    { label: "Featured", value: "featured" },
]

export default function ProductDetailsAdminPage() {
    const searchParams = useSearchParams();
    const productId = searchParams.get('id');
    const { products, getProductById, deleteProduct, updateProduct } = useContext(ProductContext);
    const { ingredients, extras } = useContext(ElementsContext);

    const [product, setProduct] = useState(null);

    // Form Inputs
    const [inputName, setInputName] = useState("");
    const [inputDescription, setInputDescription] = useState("")
    const [inputCategory, setInputCategory] = useState([]);
    const [inputStatus, setInputStatus] = useState([]);
    const [inputIngredients, setInputIngredients] = useState([]);
    const [inputExtras, setInputExtras] = useState([]);

    //Thumbnails
    const [inputFirst, setFirst] = useState(null);
    const [inputSecond, setSecond] = useState(null);
    const [inputThird, setThird] = useState(null);

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (productId) {
            const product = getProductById(productId);
            console.log(product)
            if (product) {
                setProduct(product);
                setInputName(product.name);
                setInputDescription(product.description);
                setInputCategory(product.category);
                setInputStatus([product.status]);
                setFirst(product.thumbnails.first.url)
                setSecond(product.thumbnails.second.url)
                setThird(product.thumbnails.third.url)

                const elements = product.elements.map((element) => {
                    const total = element.quantity * element.price;
                    return { ...element, total: total };
                });

                const ingredientElements = elements.filter(element => element.category === 'ingredient');
                const extraElements = elements.filter(element => element.category === 'extra');

                setInputIngredients(ingredientElements);
                setInputExtras(extraElements);
            }
        }
    }, [products]);

    useEffect(() => {
        const totalIngredients = inputIngredients.reduce((total, ingredient) => total + ingredient.total, 0);

        const totalExtras = inputExtras.reduce((total, extra) => total + extra.total, 0);

        const totalGeneral = totalIngredients + totalExtras;

        setTotalPrice(totalGeneral);
    }, [inputIngredients, inputExtras]);

    const handleSubmit = async () => {

        const allElements = [...inputIngredients, ...inputExtras];

        const elements = allElements.map(element => {
            const { total, ...elementWithoutTotal } = element;
            return elementWithoutTotal;
        });

        const info = {
            name: inputName,
            description: inputDescription,
            category: Array.from(inputCategory),
            status: Array.from(inputStatus)[0],
            elements: elements
        }

        const response = await updateProduct(productId, info);
        if (response.status === "success") {
            console.log("El producto ha sido actualizado")
            //Manejar resultado: success quedar en pagina pero avisar al admin
            //error: mostrar mensaje de error
        }
    }

    const handleDeleteProduct = async () => {
        const response = await deleteProduct(productId)
        if (response.status === "success") {
            //Manejar que verga hacer
        }
    }


    const updateQuantityIngredient = (newQuantity, item) => {
        const updatedArray = inputIngredients.map((ingredient) => {
            if (ingredient._id === item._id) {
                const newTotal = newQuantity * ingredient.price;
                return { ...ingredient, quantity: newQuantity, total: newTotal };
            } else {
                return ingredient;
            }
        });

        setInputIngredients(updatedArray);
    };

    const updateQuantityExtra = (newQuantity, item) => {
        const updatedArray = inputExtras.map((extra) => {
            if (extra._id === item._id) {
                const newTotal = newQuantity * extra.price;
                return { ...extra, quantity: newQuantity, total: newTotal };
            } else {
                return extra;
            }
        });

        setInputExtras(updatedArray);
    };

    const addIngredient = (ingredient) => {

        const ingredientIndex = inputIngredients.findIndex((i) => i._id === ingredient._id);

        if (ingredientIndex !== -1) {
            return
        };

        const ingredientToAdd = {
            _id: ingredient._id,
            name: ingredient.name,
            price: ingredient.price,
            category: ingredient.category,
            quantity: 1,
            total: ingredient.price
        };

        setInputIngredients((prev) => ([...prev, ingredientToAdd]));
    }

    const addExtra = (extra) => {
        const extraIndex = inputExtras.findIndex((i) => i._id === extra._id);

        if (extraIndex !== -1) {
            return
        };

        const extraToAdd = {
            _id: extra._id,
            name: extra.name,
            price: extra.price,
            category: extra.category,
            quantity: 2,
            total: extra.price
        };

        setInputExtras((prev) => ([...prev, extraToAdd]));
    }

    const deleteIngredient = (id) => {
        setInputIngredients((prevElements) => prevElements.filter((element) => element._id !== id));
    }

    const deleteExtra = (id) => {
        setInputExtras((prevElements) => prevElements.filter((element) => element._id !== id));
    }

    return (
        <>
            {!product ? (
                <div className={`grid place-items-center ${styles.containerLoading}`}>
                    <CircularProgress color="primary" size="lg" aria-label="Buscando Producto..." label="Buscando Producto..." />
                </div>
            ) : (
                <div className={`container mx-auto my-4 p-4 ${styles.conteiner}`} >
                    <h1 className={`p-5 ${styles.text}`}>Modificar Producto</h1>

                    <div className={`flex flex-col md:flex-row justify-around gap-4 p-5`}>
                        <div className={`flex flex-col gap-8 ${styles.containerInputs}`}>
                            <Input
                                label="Nombre"
                                type="text"
                                isRequired={true}
                                labelPlacement="outside"
                                placeholder="Ingresa Nombre"
                                defaultValue={inputName}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                                onValueChange={(value) => setInputName(value)}
                            />
                            <Textarea
                                label="Descripción"
                                type="text"
                                isRequired={true}
                                labelPlacement="outside"
                                placeholder="Ingresa una descripción"
                                defaultValue={inputDescription}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                                onValueChange={(value) => setInputDescription(value)}
                            />
                        </div>
                        <div className={`flex flex-col gap-8 ${styles.containerInputs}`}>
                            <Select
                                label="Categorías"
                                labelPlacement="outside"
                                isRequired={true}
                                selectionMode="multiple"
                                placeholder="Selecciona Categorías"
                                selectedKeys={inputCategory}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                                onSelectionChange={setInputCategory}
                            >
                                {productCategories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                        {category.label}
                                    </SelectItem>
                                ))}
                            </Select>

                            <Select
                                label="Status"
                                labelPlacement="outside"
                                isRequired={true}
                                placeholder="Selecciona un status"
                                defaultSelectedKeys={inputStatus}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                                onSelectionChange={setInputStatus}
                            >
                                {productStatus.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>

                    <div className={`flex flex-col xl:flex-row justify-around gap-4 p-5`}>
                        <div className={`flex flex-col gap-4 ${styles.containerInputs} my-4`}>
                            <div className={`flex flex-row items-center`}>
                                <h2 className='ml-3 mr-8'>Ingredientes</h2>
                                <ElementDropdown items={ingredients} addElement={addIngredient}/>
                            </div>
                            <ElementTable items={inputIngredients} updateQuantity={updateQuantityIngredient} deleteElement={deleteIngredient} />
                        </div>

                        <div className={`flex flex-col gap-4 ${styles.containerInputs} my-4`}>
                            <div className={`flex flex-row items-center`}>
                                <h2 className='ml-3 mr-8'>Extras</h2>
                                <ElementDropdown items={extras} addElement={addExtra} />
                            </div>
                            <ElementTable items={inputExtras} updateQuantity={updateQuantityExtra} deleteElement={deleteExtra}/>
                        </div>
                    </div>

                    <div className='flex justify-around flex-col md:flex-row gap-6 md:items-end p-5'>
                        <Button className={styles.input} variant="bordered" onClick={() => deleteProduct()}>
                            Borrar
                        </Button>

                        <Input
                            isReadOnly
                            type='number'
                            label="Total"
                            placeholder="Total" 
                            labelPlacement="outside"
                            value={totalPrice}
                            classNames={{
                                base: `${styles.input}`,
                            }}
                            className="w-fit"
                        />

                        <Button className={styles.input} variant="bordered" onClick={() => handleSubmit()}>
                            Guardar Cambios
                        </Button>
                    </div>
                        <UploadImg item={product} />
                </div>
            )}
        </>
    )
}


