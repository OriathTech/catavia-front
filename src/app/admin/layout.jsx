import AdminNavbar from "./components/Menu/AdminNavbar"

export default function AdminLayout({ children }) {
    return (
        <main className="container mx-auto flex my-4 rounded-md  bg-indigo-500">
            <AdminNavbar/>
            {children}
        </main>
    )
}
