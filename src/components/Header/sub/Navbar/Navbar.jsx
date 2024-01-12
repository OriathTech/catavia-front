import Link from 'next/link';
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
                    <Link href="/Menu">Menu</Link>
                </span>
                <span>
                    <Link href="/Contactame">Contactame</Link>
                </span>
            </div>

            <div className={styles.conteinerbutons}>

                <Link rel="stylesheet" href="/Card" className={styles.conteinercard}>
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
            <Link href="/Login" className="">
                <Avatar
                    size="md"
                    radius="lg"
                    src="catuser.svg"
                />
            </Link>

        </div>
        </section>
    );
  }

