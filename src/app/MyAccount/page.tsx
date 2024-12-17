import React from 'react'
import Image from 'next/image'
import LastSection from '@/components/last.Section'
import Link from 'next/link'
const Account = () => {
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
              <h1 className="text-3xl sm:text-5xl font-medium text-black"> My Account</h1>
              <p className="text-base sm:text-lg text-black mt-2">Home My account</p>
            </div>
          </div>

  <div className="flex flex-col lg:flex-row min-h-screen bg-[#FFFFFF] items-center lg:items-start">
    <div className="flex flex-col lg:flex-row justify-between max-w-5xl w-full lg:mx-auto px-4 lg:space-x-6 space-y-6 lg:space-y-0 py-8">
   
    <div className="bg-white  rounded-lg p-8 w-full lg:w-1/2">
      <h2 className="text-[36px] font-semibold mb-6 text-center lg:text-left">Login</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-black text-base font-bold mb-2"
            htmlFor="login-username"
          >
            Username or email address
          </label>
          <input
            id="login-username"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight "
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-base font-bold mb-2"
            htmlFor="login-password"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight "
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2 text-black">Remember me</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="border-black border-[1px]  text-black font-normal py-2 px-10 text-[20px] rounded-[15px]  ">
            Log In
          </button>
          <Link
            href="#"
            className="inline-block align-baseline font-normal text-base text-[#000000] ">
            Lost Your Password?
          </Link>
        </div>
      </form>
    </div>

    
    <div className="bg-white rounded-lg p-8 w-full lg:w-1/2">
      <h2 className="text-[36px] font-bold mb-6 text-center lg:text-left">Register</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-black text-base font-bold mb-2"
            htmlFor="register-email"
          >
            Email address
          </label>
          <input
            id="register-email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p className="text-[#000000] text-base mb-4">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-[#000000] text-base mb-4">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className='font-[600]'>privacy policy </span> 
         
          .
        </p>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="border-black border-[1px]  text-black font-normal py-2 px-10 text-[20px] rounded-[15px]  "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

      <LastSection />
    </div>
  )
}

export default Account
