"use client"
import { useContext } from "react";
import { CartContext } from "@/context/cart/cart";

import Link from "next/link";

import { Button } from "@nextui-org/button";

import { ArrowLeftIcon } from "@/app/components/icons/ArrowLeftIcon/ArrowLeftIcon";
import { ArrowRightIcon } from "@/app/components/icons/ArrowRightIcon/ArrowRightIcon";
import { DeleteIcon } from "@/app/admin/components/icons/DeleteIcon/DeleteIcon";

import styles from "./page.module.css"


export default function Cart() {
  const { cart, deleteProductCart, deleteAllProductsCart, updateQuantityProduct, checkout } = useContext(CartContext);

  const calculateTotalPrice = (item) => {
    return (cart.products.find(product => product._id === item._id)?.quantity || 0) * item.price;
  };

  const calculateTotal = () => {
    let total = 0;
    cart.products.forEach(item => {
      total += calculateTotalPrice(item);
    });
    return total;
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 100) {
      updateQuantityProduct(productId, newQuantity);
    }
  };

  return (
    <div className={`${styles.container} container mx-auto my-14 p-4`}>
      <h1 className={styles.title}>Carrito de compras</h1>
      <div className="grid place-content-center">
        {cart.products.length === 0 ? (
          <div className="overflow-x-auto grid place-content-center">
            <p className={`${styles.text} py-2 px-4 mb-8`}>No hay productos en el carrito. Por favor, agregue algunos productos.</p>
            <Button className={`${styles.text} py-2 px-4 mb-5`} radius="full" color="secondary" as={Link} href="/products">
              Volver al Catálogo
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className={`${styles.table}`}>
              <thead className={`${styles.tableHead}`}>
                <tr>
                  <th className={`${styles.tableHeadStart} py-2 px-4`}>Producto</th>
                  <th className={`py-2 px-4 md-px-4`}>Nombre</th>
                  <th className={`py-2 px-4`}>Precio Individual</th>
                  <th className={`py-2 px-4`}>Cantidad</th>
                  <th className={`py-2 px-4`}>Precio Total</th>
                  <th className={`${styles.tableHeadEnd} py-2 px-4`}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map(item => (
                  <tr key={item._id} className={`${styles.text} ${styles.tr} border-b text-center`}>
                    <td className="py-2 px-4"><img src={item.thumbnail ? item.thumbnail : "/defaultProduct.png" } alt="Producto" className={`${styles.img} h-20 w-20 rounded-lg object-cover mx-auto`} /></td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">
                      <div className={`${styles.containerInput} flex h-full place-content-around justify-evenly items-center`}>
                        <Button className={styles.arrowBtn} isIconOnly startContent={<ArrowRightIcon />} onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)} />
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item._id, parseInt(e.target.value))}
                          min="1"
                          max="100"
                          inputMode="numeric"
                          className={`w-16 rounded-lg text-center ${styles.input}`}
                        />
                        <Button className={styles.arrowBtn} isIconOnly startContent={<ArrowLeftIcon />} onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)} />
                      </div>
                    </td>
                    <td className="py-2 px-4">${calculateTotalPrice(item)}</td>
                    <td className="py-2 px-4"><Button className={`${styles.text} ${styles.btn} p-2 bg-red-500 text-white`} onClick={() => deleteProductCart(item._id)} radius="full" isIconOnly> <DeleteIcon />  </Button></td>
                  </tr>
                ))}
              </tbody>

              <tbody>
                <tr className="text-center">
                  <td className="py-2 px-auto md:px-4">
                    <Button className={`${styles.text} ${styles.btn} p-2 bg-red-500 text-white`} onClick={deleteAllProductsCart} radius="full"> <DeleteIcon /> Eliminar </Button>
                  </td>
                  <td colSpan="3"></td>
                  <td className={`${styles.text} py-2 px-auto md:px-4`}> Total: ${calculateTotal()}</td>
                  <td className="py-2 px-auto md:px-4">
                    <Button className={`${styles.text} ${styles.btn} p-2 text-white`} radius="full" color="success"> Comprar </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
