
"use client"

import { Button } from '@nextui-org/button';
import { DeleteIcon } from '@/app/admin/components/icons/DeleteIcon/DeleteIcon';

export default function ElementTable({items, updateQuantity, deleteElement}) {
    return (
        <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        <th className={`py-2 px-4`}>Nombre</th>
                        <th className={`py-2 px-4 md-px-4`}>Precio X u</th>
                        <th className={`py-2 px-4`}>Cantidad</th>
                        <th className={`py-2 px-4`}>Total</th>
                        <th className={`py-2 px-4`}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {!Array.isArray(items) ? (
                        console.log(typeof (inputExtras))
                    ) : (
                        items.map(item => (
                            <tr key={item._id} className={`border-b text-center`}>
                                <td className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4">{item.price}</td>
                                <td className="py-2 px-4">
                                    <div className={`flex h-full place-content-around justify-evenly items-center`}>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(parseInt(e.target.value), item)}
                                            min="1"
                                            max="100"
                                            inputMode="numeric"
                                            className={`w-16 rounded-lg text-center`}
                                        />
                                    </div>
                                </td>
                                <td className="py-2 px-4">{item.total}</td>
                                <td className="py-2 px-4">
                                    <Button onClick={() => deleteElement(item._id)} className={`p-2 bg-red-500 text-white`} radius="full" isIconOnly>
                                        <DeleteIcon />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}