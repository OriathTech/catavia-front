"use client"
import { useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { UsersContext } from "@/context/users/users";
import { Button } from "@nextui-org/button";

import { Toaster, toast } from 'sonner'


export default function UsersDetailsPage() {
    const searchParams = useSearchParams();
    const userId = searchParams.get('id');
    const { getTickets, getUserById, users} = useContext(UsersContext);

    const [user, setUser] = useState(null);
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const user = getUserById(userId);
        setUser(user);
    }, [users])

    const loadTickets = async () => {
        const response = await getTickets(userId);
        if(response.status === "success") {
            setTickets(response.payload)
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    }

    return (
        <div>
            <Toaster position="top-right" richColors />
            <div>
                INFO USUARIO
            </div>

            <div>
                <Button onClick={loadTickets}/>
                INFO TICKETS
            </div>
        </div>
    );
}