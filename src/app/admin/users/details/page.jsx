"use client"
import { useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { UsersContext } from "@/context/users/users";
import { Button } from "@nextui-org/button";

import { Input } from "@nextui-org/input";
import { CircularProgress } from "@nextui-org/progress";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import styles from "./page.module.css"

import { Toaster, toast } from 'sonner'


export default function UsersDetailsPage() {
    const searchParams = useSearchParams();
    const userId = searchParams.get('id');
    const { getTickets, getUserById } = useContext(UsersContext);

    const [user, setUser] = useState(null);
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const user = getUserById(userId);
        setUser(user);
    }, [userId ])

    const loadTickets = async () => {
        const user = getUserById(userId);
        setUser(user);
        const response = await getTickets(userId);
        if (response.status === "success") {
            setTickets(response.payload)
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    }

    useEffect(() => {
        console.log("user ------------", user);
        console.log("tickets----------", tickets);    
    }, [user, tickets])

    return (
        <>
            {!user ? (
                <div className={`grid place-items-center ${styles.containerLoading}`}>
                    <Toaster position="top-right" richColors />
                    <CircularProgress color="primary" size="lg" aria-label="Buscando Usuario..." label="Buscando Producto..." />
                </div>
            ) : (
                <div className={`container mx-auto my-4 p-4 ${styles.conteiner}`} >
                    <Toaster position="top-right" richColors />
                    <h1 className={`p-5 ${styles.text}`}>Usuario</h1>

                    <div className={`flex flex-col md:flex-row justify-around gap-4 p-5`}>
                        <div className={`flex flex-col gap-8 ${styles.containerInputs}`}>
                            <Input
                                isReadOnly
                                label="Nombre"
                                type="text"
                                labelPlacement="outside"
                                placeholder="Ingresa Nombre"
                                defaultValue={user.name}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                                onValueChange={(value) => setInputName(value)}
                            />

                            <Input
                                isReadOnly
                                label="Email"
                                labelPlacement="outside"
                                placeholder="Ingresa un precio"
                                defaultValue={user.email}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                                onValueChange={(value) => setInputPrice(value)}
                            />
                        </div>

                        <div className={`flex flex-col gap-8 ${styles.containerInputs}`}>
                            <Input
                                isReadOnly
                                label="Fecha de Nacimiento"
                                labelPlacement="outside"
                                defaultValue={user.birthday}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                            />

                            <Input
                                isReadOnly
                                label="Celular"
                                labelPlacement="outside"
                                defaultValue={user.whatsapp}
                                classNames={{
                                    base: `${styles.input}`,
                                }}
                            />
                        </div>
                    </div >

                    <div className='flex justify-around flex-col md:flex-row gap-6 md:items-end p-5'>

                        <Button className={styles.input} variant="bordered" onClick={() => handleDeleteUser()}>
                            Borrar user
                        </Button>

                        <Button className={styles.input} variant="bordered" onClick={() => loadTickets()}>
                            Cargar Tickets
                        </Button>

                    </div>

                    {tickets.length > 0 && (
                        <div>
                            <Accordion variant="splitted">
                                {tickets.map(ticket => (
                                    <AccordionItem key={ticket._id} aria-label={`Dia de compra: ${ticket.purchaseDate}`} title={`Dia de compra: ${ticket.purchaseDate}`}>
                                        <div className={`flex flex-col md:flex-row justify-around gap-4 p-5`}>
                                            <div className={`flex flex-col gap-8 ${styles.containerInputs}`}>
                                                <Input
                                                    isReadOnly
                                                    label="Dia de Compra"
                                                    type="text"
                                                    labelPlacement="outside"
                                                    placeholder="Ingresa Nombre"
                                                    defaultValue={ticket.purchaseDate}
                                                    classNames={{
                                                        base: `${styles.input}`,
                                                    }}
                                                    onValueChange={(value) => setInputName(value)}
                                                />
                                            </div>

                                            <div className={`flex flex-col gap-8 ${styles.containerInputs}`}>
                                                <Input
                                                    isReadOnly
                                                    label="Dia de Entrega"
                                                    labelPlacement="outside"
                                                    defaultValue={ticket.deliveryDate}
                                                    classNames={{
                                                        base: `${styles.input}`,
                                                    }}
                                                />
                                            </div>
                                        </div >
                                        <div className="overflow-x-auto grid mx-10">
                                            <table className={`${styles.tabla}`}>
                                                <thead className={`${styles.tableHead}`}>
                                                    <tr>
                                                        <th className={`${styles.tableHeadStart} py-2 px-4`}>Name</th>
                                                        <th className={`${styles.tableHeadEnd} py-2 px-4`}>Quantity</th>
                                                        <th className={`py-2 px-4 md-px-4`}>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {ticket.cart.map(items => (
                                                        <tr key={items._id} className={`${styles.tr} border-b text-center`}>
                                                            <td className="py-2 px-4">{items.name}</td>
                                                            <td className="py-2 px-4">{items.quantity}</td>
                                                            <td className="py-2 px-4">{items.price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h2 className="place-self-end mx-6">Total: {ticket.total} </h2>
                                        </div>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    )}
                </div>
            )}
        </>

    );
}