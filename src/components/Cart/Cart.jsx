import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/cart/cart";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { DeleteIcon } from "@/app/admin/components/icons/DeleteIcon/DeleteIcon";


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
    <div className="container mx-auto p-4">
      {cart.products.length === 0 ? (
        <div className="grid place-content-center">
          <p className={`${styles.text} py-2 px-auto md:px-4 mb-8`}>No hay productos en el carrito. Por favor, agregue algunos productos.</p>
          <Button className={`${styles.text} py-2 px-auto md:px-4 mb-5`} radius="full" color="secondary" as={Link} href="/products">
            Comprar
          </Button>
        </div>
      ) : (
        <div className="grid place-content-center">
          <table className={`${styles.tabla} w-full`}>
            <thead className= {`${styles.thead}`}>
              <tr className={`${styles.text}`}>
                <th className= {`${styles.th1} py-2 px-auto md:px-4`}>Producto</th>
                <th className="py-2 px-auto md:px-4 md-px-4">Nombre</th>
                <th className="py-2 px-auto md:px-4">Precio Individual</th>
                <th className="py-2 px-auto md:px-4">Cantidad</th>
                <th className="py-2 px-auto md:px-4">Precio Total</th>
                <th className= {`${styles.th2} py-2 px-auto md:px-4`}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map(item => (
                <tr key={item._id} className= {`${styles.text} ${styles.tr} border-b text-center`}>
                  <td className="py-2 px-auto md:px-4"><img src={item.url} alt="Producto" className= {`${styles.img} h-20 w-20 rounded-lg object-cover mx-auto`}/></td>
                  <td className="py-2 px-auto md:px-4">{item.name}</td>
                  <td className="py-2 px-auto md:px-4">${item.price}</td>
                  <td className="py-2 px-auto md:px-4">
                    <div className={`${styles.containerInput} flex h-full place-content-around justify-evenly items-center`}>
                      <button onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)} className={`w-auto h-8`}><img className={styles.arrow} src="/dereita.svg" alt="Decrease Quantity" /></button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item._id, parseInt(e.target.value))}
                        min="1"
                        max="100" 
                        inputMode="numeric"
                        className={`w-16 rounded-lg text-center ${styles.input}`}
                      />
                      <button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)} className={`w-auto h-8`}><img className={styles.arrow} src="/izqueida.svg" alt="Increase Quantity" /></button>
                    </div>
                  </td>
                  <td className="py-2 px-auto md:px-4">${calculateTotalPrice(item)}</td>
                  <td className="py-2 px-auto md:px-4"><Button className={`${styles.text} ${styles.btn} p-2 bg-red-500 text-white`} onClick={() => deleteProductCart(item._id)} radius="full" isIconOnly> <DeleteIcon/>  </Button></td>
                </tr>
              ))}
            </tbody>
            {/* Botones finales */}
            <tbody>
              <tr className="text-center">
                <td className="py-2 px-auto md:px-4">
                  <Button className={`${styles.text} ${styles.btn} p-2 bg-red-500 text-white`} onClick={deleteAllProductsCart} radius="full"> <DeleteIcon/> Carrito </Button>
                </td>
                <td colSpan="3"></td>
                <td className={`${styles.text} py-2 px-auto md:px-4`}> Total: ${calculateTotal()}</td>
                <td className="py-2 px-auto md:px-4">
                  <Button className={`${styles.text} ${styles.btn} p-2 text-white`} radius="full" color="success"> Compra </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
