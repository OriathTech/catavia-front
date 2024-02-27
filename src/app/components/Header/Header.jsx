"use client"
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/context/session/session";
import { CartContext } from "@/context/cart/cart";

import Link from "next/link";
import Image from 'next/image'

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

import { MenuIcon } from "@/app/admin/components/icons/MenuIcon/MenuIcon";
import { SessionIcon } from "../icons/SessionIcon/SessionIcon";
import { CartIcon } from "../icons/CartIcon/CartIcon";

import styles from './Header.module.css'

export default function Header() {
    const router = useRouter()
    const { session, logout } = useContext(SessionContext);
    const { quantityTotalProducts } = useContext(CartContext)
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        session?.name ? setIsLogged(true) : setIsLogged(false)
    }, [session])

    const handleLogout = async () => {
        try {
            const response = await logout()
            if (response.status = "success") {
                router.refresh();
                router.push("/");
            }
        } catch (error) {
            console.log("error")
        }
    }

    return (
        <>
            <header className={styles.header}>
                <Image
                    className={styles.logo}
                    src="/images/logos/cataviaLogo3.png"
                    width={176}
                    height={221}
                    alt="Catavia Artesanal - Logo"
                />
            </header>

            <Navbar className={styles.navbar}>
                <NavbarContent className="sm:hidden" justify="start">
                    <Dropdown className={styles.dropdown}>
                        <DropdownTrigger>
                            <Button isIconOnly size="md" startContent={<MenuIcon />} color="warning"></Button>
                        </DropdownTrigger>
                        <DropdownMenu classNames={{
                            base: `${styles.menuBase}`,
                            list: `${styles.menuList}`
                        }} aria-label="Menú desplegable para Mobiles">
                            <DropdownItem as={Link} href="/" key="home" className={styles.menuLink}>Inicio</DropdownItem>
                            <DropdownItem as={Link} href="/products" key="products" className={styles.menuLink}>Productos</DropdownItem>
                            <DropdownItem as={Link} href="/contact" key="contact" className={styles.menuLink}>Contacto</DropdownItem>
                            <DropdownItem as={Link} href="/admin" key="admin" className={`${styles.menuLink} ${session?.role !== "admin" ? "hidden" : ""}`}>Admin</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-6" justify="center">
                    <NavbarItem>
                        <Link className={styles.link} href="/">
                            Inicio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={styles.link} href="/products">
                            Productos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={styles.link} href="/contact">
                            Contacto
                        </Link>
                    </NavbarItem>
                    <NavbarItem className={`${session?.role !== "admin" ? "hidden" : ""}`}>
                        <Link className={styles.link} href="/admin" >
                            Admin
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <NavbarContent justify="start">
                            <Dropdown className={styles.dropdown}>
                                <DropdownTrigger>
                                    <Button className={styles.button} isIconOnly size="lg" startContent={isLogged ? <SessionIcon fill="#8cc63e"/> : <SessionIcon fill="#ef4d3c"/>}></Button>
                                </DropdownTrigger>
                                <DropdownMenu classNames={{
                                    base: `${styles.menuBase}`,
                                    list: `${styles.menuList}`
                                }} aria-label="Acciones de Sesión">
                                    <DropdownItem as={Link} href="/login" key="login" className={styles.menuLink}>Iniciar Sesión</DropdownItem>
                                    <DropdownItem as={Link} href="/register" key="register" className={styles.menuLink}>Registrarse</DropdownItem>
                                    {isLogged && <DropdownItem onClick={handleLogout} key="logout" className={`${styles.menuLink}`}>Cerrar Sesión</DropdownItem>}
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarContent>
                    </NavbarItem>
                    <NavbarItem className="flex gap-1">
                        <Button className={styles.button} as={Link} href="/cart" isIconOnly size="lg" startContent={<CartIcon />}></Button>
                        <span>{quantityTotalProducts}</span>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
