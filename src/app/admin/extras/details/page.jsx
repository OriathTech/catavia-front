"use client"
import { useSearchParams } from 'next/navigation';
import { useContext, useState, useEffect } from "react"

import { ElementsContext } from '@/context/elements/elements';
import { ProductContext } from '@/context/products/products';

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from '@nextui-org/button';

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
                <div className={styles.container}>
                    <h1>Buscando Extra...</h1>
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
                            value={"Extra"}
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
                            {extraStatus.map((status) => (
                                <SelectItem key={status.value} value={status.value}>
                                    {status.label}
                                </SelectItem>
                            ))}
                        </Select>

                    </div>

                    <Button onClick={() => handleSubmit()}>
                        Guardar Cambios
                    </Button>

                    <Button onClick={() => handleDeleteExtra()}>
                        Borrar Extra
                    </Button>
                </div>
            )}
        </>
    )
}