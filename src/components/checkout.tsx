"use client"
import React, { useState } from "react"

const Checkout = () => {
    const [paymentMethod , setPaymentMethod] = useState("direct-bank-transfer")
  return (
    <div className="p- min-h-screen">
    <div className="max-w-4xl mx-auto  bg-white p-6 rounded-lg ">
      
      <div className="mb-8 ">
        <div className="flex justify-between">
        <h2 className="text-[24px] font-medium mb-4">Order Summary</h2>
        <h2 className="text-[24px] font-medium mb-4">Subtotal</h2>
        </div>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <div className="flex text-[16px]">
            <p className="text-[#9F9F9F] font-light">Asgaard sofa</p>
            <p className="font-normal pl-1 text-[#000000]"> X  1</p>
          </div>
          <p className="font-light">Rs. 250,000.00 </p>
        </div>
        <div className="flex justify-between text-[16px] items-center mb-2">
          <p className="font-normal">Subtotal</p>
          <p className="font-light">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="text-[16px] font-normal">Total</p>
          <p className="text-[24px] font-bold text-[#B88E2F]">Rs. 250,000.00</p>
        </div>
      </div>

     
      <div className="mb-8">
        <div className="space-y-4">
          <h1>Direct Bank Transfer</h1>
          <p className="text-base text-[#9F9F9F] font-light ml-7">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex items-center">
            <input
              id="direct-bank-transfer"
              type="radio"
              name="payment-method"
              value="direct-bank-transfer"
              checked={paymentMethod === "direct-bank-transfer"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 text-[#000000] focus:ring-[#000000] border-gray-300"
            />
            <button
              className="ml-3 text-[#9F9F9F] text-base font-medium "
            >
              Direct Bank Transfer
            </button>
          </div>
          <div className="flex items-center">
            <input
              id="cash-on-delivery"
              type="radio"
              name="payment-method"
              value="cash-on-delivery"
              checked={paymentMethod === "cash-on-delivery"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label
              htmlFor="cash-on-delivery"
              className="ml-3 text-base font-medium text-[#9F9F9F]"
            >
              Cash On Delivery
            </label>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-base text-black font-light">
          Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and for
          other purposes described in our <span className="font-semibold">privacy policy</span>
          
          .
        </p>
      </div>
      <button
        className="w-full text-black py-3 rounded-lg text-[20px] font-normal border border-black"
      >
        Place order
      </button>
    </div>
  </div>
  )
}

export default Checkout
