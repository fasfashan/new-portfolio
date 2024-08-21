"use client";
import React, { useState } from "react";
import Image from "next/image";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemDiscount, setItemDiscount] = useState("");
  const [appDiscount, setAppDiscount] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    const parsedTotalPrice = parseFloat(totalPrice.replace(/\./g, "")) || 0;
    const parsedQuantity = parseInt(quantity) || 0;

    if (name && parsedTotalPrice > 0 && parsedQuantity > 0) {
      setItems([
        ...items,
        { name, totalPrice: parsedTotalPrice, quantity: parsedQuantity },
      ]);

      // Reset form fields
      setName("");
      setTotalPrice("");
      setQuantity("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    const subtotal = items.reduce((total, item) => total + item.totalPrice, 0);
    const itemDiscountValue = parseFloat(itemDiscount.replace(/\./g, "")) || 0;
    const appDiscountValue = parseFloat(appDiscount.replace(/\./g, "")) || 0;
    const shippingCostValue = parseFloat(shippingCost.replace(/\./g, "")) || 0;

    const total =
      subtotal - itemDiscountValue - appDiscountValue + shippingCostValue;
    return total.toLocaleString("id-ID");
  };

  const calculatePricePerItem = () => {
    const subtotal = items.reduce((total, item) => total + item.totalPrice, 0);
    const itemDiscountValue = parseFloat(itemDiscount.replace(/\./g, "")) || 0;
    const appDiscountValue = parseFloat(appDiscount.replace(/\./g, "")) || 0;
    const shippingCostValue = parseFloat(shippingCost.replace(/\./g, "")) || 0;

    // Total diskon
    const totalDiscount = itemDiscountValue + appDiscountValue;

    // Total yang dikurangi diskon
    const totalAfterDiscount = subtotal - totalDiscount;

    // Harga per pcs dengan ongkir
    return items.map((item) => {
      // Diskon proporsional untuk setiap item
      const discount = (item.totalPrice / subtotal) * totalDiscount;
      const discountedPrice = item.totalPrice - discount;

      // Ongkir proporsional untuk setiap item
      const totalPriceWithShipping =
        discountedPrice + shippingCostValue / items.length;
      const pricePerItemWithShipping = totalPriceWithShipping / item.quantity;

      return pricePerItemWithShipping.toLocaleString("id-ID", {
        maximumFractionDigits: 0,
      });
    });
  };

  const formatNumber = (value) => {
    const number = parseFloat(value.replace(/\./g, "")) || 0;
    return number.toLocaleString("id-ID");
  };

  const handleChange = (setter) => (e) => {
    const formattedValue = e.target.value.replace(/\./g, "");
    setter(formattedValue);
  };

  const handleBlur = (setter) => (e) => {
    setter(formatNumber(e.target.value));
  };

  return (
    <div className="App container mx-auto max-w-2xl m-auto px-4 py-4 p-4">
      <form
        onSubmit={addItem}
        className="mb-6 p-8 border bg-slate-700 shadow-slate-900 rounded-xl mt-10"
      >
        <div className="mb-4 space-y-2">
          <label className="block text-white font-medium">Nama Kopi:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full p-2 shadow-inner"
            required
          />
        </div>
        <div className="mb-4 space-y-2">
          <label className="block text-white font-medium">Harga Total:</label>
          <input
            type="text"
            value={formatNumber(totalPrice)}
            onChange={handleChange(setTotalPrice)}
            onBlur={handleBlur(setTotalPrice)}
            className="border rounded w-full p-2 shadow-inner"
            required
          />
        </div>
        <div className="mb-4 space-y-2">
          <label className="block text-white font-medium">Jumlah:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border rounded w-full p-2 shadow-inner"
            required
          />
        </div>
        <button type="submit" className="bg-primary px-4 py-2 rounded">
          Tambah Item
        </button>
      </form>

      <div className="p-8 border bg-slate-700 shadow-slate-900 rounded-xl mt-10">
        <h2 className="text-xl text-white font-bold mb-4">Daftar Minuman</h2>
        <ul className="text-white mb-6 space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>
                🍺 {item.name} - Rp {item.totalPrice.toLocaleString("id-ID")}{" "}
                {item.quantity} pcs
              </span>
              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-8 border bg-slate-700 shadow-slate-900 rounded-xl mt-10">
        <div className="mb-4 space-y-2">
          <label className="block font-medium text-white">
            Diskon Item (Rp):
          </label>
          <input
            type="text"
            value={formatNumber(itemDiscount)}
            onChange={handleChange(setItemDiscount)}
            onBlur={handleBlur(setItemDiscount)}
            className="border rounded w-full p-2 shadow-inner"
          />
        </div>
        <div className="mb-4 space-y-2">
          <label className="block font-medium text-white">
            Diskon Aplikasi (Rp):
          </label>
          <input
            type="text"
            value={formatNumber(appDiscount)}
            onChange={handleChange(setAppDiscount)}
            onBlur={handleBlur(setAppDiscount)}
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4 space-y-2">
          <label className="block font-medium text-white">Ongkir:</label>
          <input
            type="text"
            value={formatNumber(shippingCost)}
            onChange={handleChange(setShippingCost)}
            onBlur={handleBlur(setShippingCost)}
            className="border rounded w-full p-2"
          />
        </div>
        <div className="bg-primary p-4 space-y-4 rounded-md">
          <p className="font-bold text-2xl">Total: Rp {calculateTotal()}</p>
          <ul className=" mb-6">
            {items.map((item, index) => (
              <li key={index}>
                🍺 {item.name} - Rp {calculatePricePerItem()[index]} per pcs
                (setelah diskon)
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Image
        className="m-auto rounded-xl"
        src="/meme-kopi.jpg"
        width={600}
        height={400}
        alt="DIgmar"
      />
    </div>
  );
}

export default App;
