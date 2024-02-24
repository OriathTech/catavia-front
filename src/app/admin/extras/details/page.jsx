"use client"
import { useSearchParams } from 'next/navigation';
import { useContext, useState, useEffect } from "react"

import { ElementsContext } from '@/context/elements/elements';
import { ProductContext } from '@/context/products/products';

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from '@nextui-org/button';
import { CircularProgress } from "@nextui-org/progress";

import styles from "./page.module.css"

const extraStatus = [
    { label: "Online", value: "online" },
    { label: "Offline", value: "offline" }
]

export default function extraDetailsAdminPage() {
    const searchParams = useSearchParams();
    const extraId = searchParams.get('id');
    const { extras, getExtraById, deleteElement, updateElement } = useContext(ElementsContext);
    const { fetchProducts } = useContext(ProductContext)

    const [extra, setExtra] = useState(null);

    // Form Inputs
    const [inputName, setInputName] = useState("");
    const [inputStatus, setInputStatus] = useState([]);
    const [inputPrice, setInputPrice] = useState(0);

    useEffect(() => {
        if (extraId) {
            const extra = getExtraById(extraId);
            if (extra) {
                setExtra(extra);
                setInputName(extra.name);
                setInputStatus([extra.status]);
            }
        }
    }, [extras]);

    const handleSubmit = async () => {
        const info = {
            name: inputName,
            category: "extra",
            price: inputPrice,
            status: Array.from(inputStatus)[0]
        }

        const response = await updateElement(extraId, info);
        if (response.status === "success") {
            console.log("El extra ha sido actualizado")
            if (response.reload) {
                fetchProducts()
            }
        }
    }

    const handleDeleteExtra = async () => {

    }

    return (
        <>
            {!extra ? (
                <div className={`grid place-items-center ${styles.containerLoading}`}>
                    <CircularProgress color="primary" size="lg" aria-label="Buscando Producto..." label="Buscando Producto..." />
                </div>
            ) : (
                <div className={`container mx-auto my-4 p-4 ${styles.conteiner}`} >
                    <h1 className={`p-5 ${styles.text}`}>Modificar Ingrediente</h1>

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

                            <Input
                                label="Precio por Gramo"
                                type="number"
                                isRequired={true}
                                labelPlacement="outside"
                                placeholder="Ingresa un precio"
                                defaultValue={inputPrice}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                                onValueChange={(value) => setInputPrice(value)}
                            />

                        </div>

                        <div className={`flex flex-col gap-8 ${styles.containerInputs}`}>

                            <Input
                                isReadOnly
                                type='text'
                                isRequired={true}
                                label="Categoría"
                                labelPlacement="outside"
                                value={"Extra"}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                            />

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
                                {extraStatus.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div >

                    <div className='flex justify-around flex-col md:flex-row gap-6 md:items-end p-5'>

                        <Button className={styles.input} variant="bordered" onClick={() => handleDeleteIngredient()}>
                            Borrar Ingrediente
                        </Button>

                        <Button className={styles.input} variant="bordered" onClick={() => handleSubmit()}>
                            Guardar Cambios
                        </Button>

                    </div>
                </div>
            )}
        </>
    )
}