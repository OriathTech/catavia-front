"use client"

import { Button } from '@nextui-org/button';

import styles from "./UploadImg.module.css"

export default function UploadImg({items, updateQuantity, deleteElement}) {
    return (
<div class="container mx-auto py-8">
  <h2 class="text-3xl font-bold mb-4">Imágenes</h2>
  <p class="text-gray-600 mb-4">La imagen número 1 es la que se mostrará en las tarjetas de productos.</p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* <!-- Imagen 1 --> */}
    <div class="bg-gray-200 p-4 rounded-lg">
      <h3 class="text-xl font-semibold mb-2">Imagen 1</h3>
      <img src="ruta-a-imagen-1.jpg" alt="Imagen 1" class="mb-2"/>
      <div class="flex justify-between">
        <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Borrar</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Cargar</button>
      </div>
    </div>

    {/* <!-- Imagen 2 --> */}
    <div class="bg-gray-200 p-4 rounded-lg">
      <h3 class="text-xl font-semibold mb-2">Imagen 2</h3>
      <img src="ruta-a-imagen-2.jpg" alt="Imagen 2" class="mb-2"/>
      <div class="flex justify-between">
        <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Borrar</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Cargar</button>
      </div>
    </div>

    {/* <!-- Imagen 3 --> */}
    <div class="bg-gray-200 p-4 rounded-lg">
      <h3 class="text-xl font-semibold mb-2">Imagen 3</h3>
      <img src="ruta-a-imagen-3.jpg" alt="Imagen 3" class="mb-2"/>
      <div class="flex justify-between">
        <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Borrar</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Cargar</button>
      </div>
    </div>
  </div>
</div>
    )}