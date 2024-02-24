"use client"
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "@/context/session/session";
import { CartContext } from "@/context/cart/cart";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { MenuIcon } from "@/app/admin/components/icons/MenuIcon/MenuIcon";
import { CartIcon } from "./Sub/CartIcon/CartIcon";
import Image from 'next/image'

import styles from './Header.module.css'

export default function Header() {
    const { session, logout } = useContext(SessionContext);
    const { quantityTotalProducts } = useContext(CartContext)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        session?.name ? setIsVisible(true) : setIsVisible(false)
    }, [session])

    const handleLogout = async () => {
        try {
            const response = await logout()
            if(response.status = "success") {
                console.log(`Esta es la response.data de axios ${JSON.stringify(response)}`)
                console.log("Te has deslogeado")
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
                    alt="Logo Catavia Artesanal"
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
                        }} aria-label="Static Actions">
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
                                    <Button isIconOnly size="md" startContent={<MenuIcon />} color="warning"></Button>
                                </DropdownTrigger>
                                <DropdownMenu classNames={{
                                    base: `${styles.menuBase}`,
                                    list: `${styles.menuList}`
                                }} aria-label="Static Actions">
                                    <DropdownItem as={Link} href="/login" key="login" className={styles.menuLink}>Login</DropdownItem>
                                    <DropdownItem as={Link} href="/register" key="register" className={styles.menuLink}>Register</DropdownItem>
                                    {isVisible && <DropdownItem onClick={handleLogout} key="logout" className={`${styles.menuLink}`}>Logout</DropdownItem> }
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarContent>
                    </NavbarItem>
                    <NavbarItem className="flex gap-1">
                        <CartIcon />
                        <span>{quantityTotalProducts}</span>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
