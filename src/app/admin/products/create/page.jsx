"use client"
import { useContext, useState, useEffect } from "react"

import { ProductContext } from "@/context/products/products"
import { ElementsContext } from '@/context/elements/elements';

import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from '@nextui-org/button';

import ElementDropdown from '../components/ElementDropdown/ElementDropdown';
import ElementTable from '../components/ElementTable/ElementTable';

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

export default function productCreateAdminPage() {
    const { postProduct } = useContext(ProductContext);
    const { ingredients, extras } = useContext(ElementsContext);

    // Form Inputs
    const [inputName, setInputName] = useState("");
    const [inputDescription, setInputDescription] = useState("")
    const [inputCategory, setInputCategory] = useState([]);
    const [inputStatus, setInputStatus] = useState([]);
    const [inputIngredients, setInputIngredients] = useState([]);
    const [inputExtras, setInputExtras] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0)

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
            elements: elements,
        }

        console.log()
        const response = await postProduct(info);
        if (response.status === "success") {
            console.log("El producto ha sido creado")
            //mandar a pagina de details con id incluido "productId"
        } else {
            console.log("El producto no ha sido creado")
            //error
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

        console.log(ingredients)

        if (ingredientIndex !== -1) {
            return
        };

        const ingredientToAdd = {
            id: ingredient._id,
            name: ingredient.name,
            price: ingredient.price,
            category: ingredient.category,
            quantity: 1,
            total: ingredient.price
        };

        setInputIngredients((prev) => ([...prev, ingredientToAdd]));
        console.log(inputIngredients)
    }

    const addExtra = (extra) => {
        const extraIndex = inputExtras.findIndex((i) => i._id === extra._id);

        console.log(extras)

        if (extraIndex !== -1) {
            return
        };

        const extraToAdd = {
            id: extra._id,
            name: extra.name,
            price: extra.price,
            category: extra.category,
            quantity: 1,
            total: extra.price
        };

        setInputExtras((prev) => ([...prev, extraToAdd]));
        console.log(inputExtras)
    }

    const deleteIngredient = (id) => {
        setInputIngredients((prevElements) => prevElements.filter((element) => element._id !== id));
    }

    const deleteExtra = (id) => {
        setInputExtras((prevElements) => prevElements.filter((element) => element._id !== id));
    }

    return (
        <div className={`${styles.container}`}>

            <div className='flex flex-col items-center gap-4 w-fit w-11/12 mx-auto my-6'>
                <Input
                    label="Nombre"
                    type="text"
                    labelPlacement="outside"
                    placeholder="Ingresa Nombre"
                    defaultValue={inputName}
                    className="max-w-xs"
                    onValueChange={(value) => setInputName(value)}
                />

                <Textarea
                    label="Descripción"
                    type="text"
                    labelPlacement="outside"
                    placeholder="Ingresa una descripción"
                    defaultValue={inputDescription}
                    className="max-w-xs"
                    onValueChange={(value) => setInputDescription(value)}
                />

                <Select
                    label="Categorías"
                    labelPlacement="outside"
                    selectionMode="multiple"
                    placeholder="Selecciona Categorías"
                    selectedKeys={inputCategory}
                    className="max-w-xs"
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
                    placeholder="Selecciona un status"
                    defaultSelectedKeys={inputStatus}
                    className="max-w-xs"
                    onSelectionChange={setInputStatus}
                >
                    {productStatus.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                            {status.label}
                        </SelectItem>
                    ))}
                </Select>

            </div>
            <div className='container flex flex-wrap gap-4 justify-center'>
                <div className='flex flex-col gap-4 my-6 w-max overflow-x-auto'>
                    <h2>Ingredientes</h2>
                    <ElementDropdown items={ingredients} addElement={addIngredient} />
                    <ElementTable items={inputIngredients} updateQuantity={updateQuantityIngredient} deleteElement={deleteIngredient} />
                </div>

                <div className='flex flex-col gap-4 my-6 w-fit overflow-x-auto'>
                    <h2>Extras</h2>
                    <ElementDropdown items={extras} addElement={addExtra} />
                    <ElementTable items={inputExtras} updateQuantity={updateQuantityExtra} deleteElement={deleteExtra} />
                </div>
            </div>

            <div className='flex justify-around gap-6 items-end'>
                <Input
                    isReadOnly
                    type='number'
                    label="Total"
                    labelPlacement="outside"
                    value={totalPrice}
                    className="w-fit"
                />

                <Button onClick={() => handleSubmit()}>
                    Crear Producto
                </Button>
            </div>
        </div>
    )
}