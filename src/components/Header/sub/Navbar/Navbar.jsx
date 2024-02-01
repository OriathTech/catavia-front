"use client"

import Link from 'next/link';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {Badge} from "@nextui-org/badge";
import {Avatar} from "@nextui-org/avatar";
import styles from "./navbar.module.css"


export default function Navbar() {
    return (
        <section className={styles.conteinernavbar}>
        <div className={styles.elementsnavbar}>
            <div className={styles.conteinerlink}>
                <span>
                    <Link href="/">Home</Link>
                </span>
                <span className={styles.menulink}>
                    <Link href="/products">Menu</Link>
                </span>
                <span>
                    <Link href="/contact">Contactame</Link>
                </span>
            </div>

            <div className={styles.conteinerbutons}>

                <Link rel="stylesheet" href="/card" className={styles.conteinercard}>
                    <Badge content="5" size="md" color="primary">
                    <Avatar
                        size="md"
                        radius="lg"
                        src="cat.svg"
                    />
                    </Badge>
                </Link> 

            </div>   
        </div>


        <div className={styles.conteineruser}>
            <Dropdown>
            <DropdownTrigger>
                <Avatar
                        size="md"
                        radius="lg"
                        src="catuser.svg"
                    />
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
                <DropdownItem key="login" href="/login">
                login
                </DropdownItem>
                <DropdownItem key="register" href="/register">
                register
                </DropdownItem>
            </DropdownMenu>
            </Dropdown>

        </div>

        </section>
    );
  }

