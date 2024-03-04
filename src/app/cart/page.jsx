"use client"

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/cart/cart";
import { getDeliveryDate } from "@/utils/getDeliveryDate";

import Link from "next/link";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Toaster, toast } from "sonner";

import { ArrowLeftIcon } from "@/app/components/icons/ArrowLeftIcon/ArrowLeftIcon";
import { ArrowRightIcon } from "@/app/components/icons/ArrowRightIcon/ArrowRightIcon";
import { DeleteIcon } from "@/app/admin/components/icons/DeleteIcon/DeleteIcon";


import { generateLinkWathsapp } from "@/utils/generateLinkWathsapp";

import styles from "./page.module.css"


export default function Cart() {
  const { cart, deleteProductCart, deleteAllProductsCart, updateQuantityProduct, addDeliveryDate, checkout } = useContext(CartContext);
  const deliveryDate = getDeliveryDate()
  const router = useRouter()

  const calculateTotalPrice = (item) => {
    return (cart.products.find(product => product.productId === item.productId)?.quantity || 0) * item.price;
  };

  const calculateTotal = () => {
    let total = 0;
    cart.products.forEach(item => {
      total += calculateTotalPrice(item);
    });
    return total;
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    console.log("aca Llego")
    if (newQuantity >= 1 && newQuantity <= 100) {
      updateQuantityProduct(productId, newQuantity);
    }
  };

  const handleCheckout = async () => {

    if (deliveryDate > cart.deliveryDate) {
      return toast.error("Ingrese una Fecha de Entrega válida. Recuerde que el mimino es 3 días a partir de la fecha actual.");
    }
    
    try {
      const response = await checkout(cart)
      if (response.payload) {
        const message = generateLinkWathsapp(response.payload)
        window.open(message, "_blank");
      } else {
        return toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error en el servidor. Intente mas tarde")
    }
  }

  return (
    <div className={`${styles.container} container mx-auto my-14 p-4`}>
      <Toaster position="top-right" richColors />
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
          <>
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
                  <tr key={item.productId} className={`${styles.text} ${styles.tr} border-b text-center`}>
                    <td className="py-2 px-4"><img src={item.thumbnail ? item.thumbnail : "/defaultProduct.png"} alt="Producto" className={`${styles.img} h-20 w-20 rounded-lg object-cover mx-auto`} /></td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4 flex">
                      <Button className={styles.arrowBtn} isIconOnly startContent={<ArrowRightIcon />} onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)} />
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item.productId, parseInt(e.target.value))}
                        min="1"
                        max="100"
                        inputMode="numeric"
                        className={`w-16 rounded-lg text-center ${styles.input}`}
                      />
                      <Button className={styles.arrowBtn} isIconOnly startContent={<ArrowLeftIcon />} onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)} />
                    </td>
                    <td className="py-2 px-4">${calculateTotalPrice(item)}</td>
                    <td className="py-2 px-4"><Button className={`${styles.text} ${styles.btn} p-2 bg-red-500 text-white`} onClick={() => deleteProductCart(item.productId)} radius="full" isIconOnly> <DeleteIcon />  </Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center flex-wrap items-center md:justify-end md:gap-4">
              <Input
                isRequired={true}
                placeholder={deliveryDate}
                type="date"
                variant={"flat"}
                className={`${styles.btn} w-auto my-3`}
                min={deliveryDate}
                label="Fecha de Entrega"
                defaultValue={cart.deliveryDate}
                onValueChange={(value) => addDeliveryDate(value)}
              />
              <div className="flex justify-center items-center my-3" >
                <Button className={`${styles.text} ${styles.btn}  bg-red-500 text-white`} onClick={deleteAllProductsCart} radius="full"> <DeleteIcon /> Eliminar </Button>

                <span className={`${styles.text} px-2 md:px-4`}> Total: ${calculateTotal()}</span>

                <Button className={`${styles.text} ${styles.btn} text-white`} onClick={handleCheckout} radius="full" color="success"> Comprar </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
