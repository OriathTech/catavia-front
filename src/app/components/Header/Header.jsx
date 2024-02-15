"use client"

import { useContext } from "react";
import { SessionContext } from "@/context/session/session";
import { CartContext } from "@/context/cart/cart";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { MenuIcon } from "@/app/admin/components/icons/MenuIcon/MenuIcon";
import { CartIcon } from "./Sub/CartIcon/CartIcon";
import Image from 'next/image'

import styles from './Header.module.css'

export default function Header() {
    const { session } = useContext(SessionContext);
    const { quantityTotalProducts } = useContext(CartContext)

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
                            <DropdownItem as={Link} href="/admin" key="admin" className={`${styles.menuLink} ${session.role !== "admin" ? "hidden" : ''}`}>Admin</DropdownItem>
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
                    <NavbarItem className={`${session.role !== "admin" ? "hidden" : ''}`}>
                        <Link className={styles.link} href="/admin" >
                            Admin
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="warning" href="#" variant="flat">
                            Sign Up
                        </Button>
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
