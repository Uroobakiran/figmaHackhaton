import React from 'react';
import Image from 'next/image';
import Checkout from '@/components/checkout';
import LastSection from '@/components/last.Section';

const CheckOut = () => {
  return (
    <div className="bg-white">
     
      <div
        className="relative bg-cover bg-center w-full h-[316px] mb-8 flex items-center justify-center"
        style={{ backgroundImage: "url('/img/shopbanner.png')" }}
      >
        <div className="text-center">
          <Image
            src="/img/logo.png"
            alt="logo"
            height={77}
            width={77}
            className="mx-auto"
          />
          <h1 className="text-3xl sm:text-5xl font-medium text-black">Checkout</h1>
          <p className="text-base sm:text-lg text-black mt-2">Home My account</p>
        </div>
      </div>

     
      <div className="flex flex-wrap lg:justify-between justify-start bg-white rounded-lg p-4 sm:p-8 w-full lg:w-3/4 mx-auto">
        <div className="w-full lg:w-1/2 px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center lg:text-left">Billing details</h2>
          <form className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="first name"
                >
                  First Name
                </label>
                <input
                  id="first name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="last name"
                >
                  Last Name
                </label>
                <input
                  id="last name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="company name"
              >
                Company Name (Optional)
              </label>
              <input
                id="company name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="country name"
              >
                Country / Region
              </label>
              <input
                id="country name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="street address"
              >
                Street Address
              </label>
              <input
                id="street address"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="town / city"
              >
                Town / City
              </label>
              <input
                id="town / city"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="province"
              >
                Province
              </label>
              <input
                id="province"
                type="text"
                placeholder="Western Province"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="zip code"
              >
                Zip Code
              </label>
              <input
                id="zip code"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email address"
              >
                Email Address
              </label>
              <input
                id="email address"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>

            <div>
              <input
                id="additional information"
                type="text"
                placeholder="Additional information"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight"
              />
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 px-2 mt-8 lg:mt-0">
          <Checkout />
        </div>
      </div>
      <LastSection />
    </div>
  );
};

export default CheckOut;
