"use client"
import { useSearchParams } from 'next/navigation';
import { useContext, useState, useEffect } from "react"

import { ElementsContext } from '@/context/elements/elements';
import { ProductContext } from '@/context/products/products';

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from '@nextui-org/button';

import styles from "./page.module.css"

const ingredientStatus = [
    { label: "Online", value: "online" },
    { label: "Offline", value: "offline" }
]

export default function ingredientDetailsAdminPage() {
    const searchParams = useSearchParams();
    const ingredientId = searchParams.get('id');
    const { ingredients, getIngredientById, deleteElement, updateElement } = useContext(ElementsContext);
    const { fetchProducts } = useContext(ProductContext)

    const [ingredient, setIngredient] = useState(null);

    // Form Inputs
    const [inputName, setInputName] = useState("");
    const [inputStatus, setInputStatus] = useState([]);
    const [inputPrice, setInputPrice] = useState(0);

    useEffect(() => {
        if (ingredientId) {
            const ingredient = getIngredientById(ingredientId);
            if (ingredient) {
                setIngredient(ingredient);
                setInputName(ingredient.name);
                setInputStatus([ingredient.status]);
            }
        }
    }, [ingredients]);

    const handleSubmit = async () => {
        const info = {
            name: inputName,
            category: "ingredient",
            price: inputPrice,
            status: Array.from(inputStatus)[0],
        }

        const response = await updateElement(ingredientId, info);
        if (response.status === "success") {
            console.log("El ingrediente ha sido actualizado")
            //Hay que mostrarle al admin que todo salio bien o no
            if (response.reload) {
                fetchProducts()
            }
        }
    }

    const handleDeleteIngredient = async () => {

    }

    return (
        <>
            {!ingredient ? (
                <div className={styles.container}>
                    <h1>Buscando Ingrediente...</h1>
                </div>
            ) : (
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

                        <Input
                            label="Precio por Gramo"
                            type="number"
                            labelPlacement="outside"
                            placeholder="Ingresa un precio"
                            defaultValue={inputPrice}
                            className="max-w-xs"
                            onValueChange={(value) => setInputPrice(value)}
                        />

                        <Input
                            isReadOnly
                            type='text'
                            label="Categoría"
                            labelPlacement="outside"
                            value={"Ingrediente"}
                            className="w-fit"
                        />

                        <Select
                            label="Status"
                            labelPlacement="outside"
                            placeholder="Selecciona un status"
                            defaultSelectedKeys={inputStatus}
                            className="max-w-xs"
                            onSelectionChange={setInputStatus}
                        >
                            {ingredientStatus.map((status) => (
                                <SelectItem key={status.value} value={status.value}>
                                    {status.label}
                                </SelectItem>
                            ))}
                        </Select>

                    </div>

                    <Button onClick={() => handleSubmit()}>
                        Guardar Cambios
                    </Button>

                    <Button onClick={() => handleDeleteIngredient()}>
                        Borrar Ingrediente
                    </Button>
                </div>
            )}
        </>
    )
}