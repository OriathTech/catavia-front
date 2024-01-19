import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";



export default function AdminNavbar() {
    return (
        <div className="hidden md:inline-block rounded-md w-1/5 bg-sky-500  h-96">

            <nav className="flex flex-col">
                <Link className="mx-auto my-12" href="/admin" aria-current="page">
                    Menu
                </Link>
                <Link className="mx-auto my-4" href="/admin/products" aria-current="page">
                    Productos
                </Link>
                <Link className="mx-auto my-4" href="/admin/ingredients" aria-current="page">
                    Ingredientes
                </Link>
                <Link className="mx-auto my-4" href="/admin/extras" aria-current="page">
                    Extras
                </Link>
                <Link className="mx-auto my-4" href="/admin/users" aria-current="page">
                    Usuarios
                </Link>
            </nav>
        </div>
    )
}