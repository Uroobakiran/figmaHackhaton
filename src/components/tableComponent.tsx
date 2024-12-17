import Image from 'next/image';
import React from 'react';

const TableComponent = () => {
  return (
    <div className='bg-white flex min-h-screen px-4 py-8'>
        <div className='overflow-x-auto mb-8'>
           <table className='w-full text-left border-collapse'>
                <thead className='bg-yellow-100'>
                    <tr>
                        <th className='p-3 font-bold text-gray-700'>Product</th>
                        <th className='p-3 font-bold text-gray-700'>Price</th>
                        <th className='p-3 font-bold text-gray-700'>Quantity</th>
                        <th className='p-3 font-bold text-gray-700'>Subtotal</th>
                        <th className='p-3'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b'>
                        <td className='p-3 flex items-center gap-4'>
                            <Image src='/img/AsgaardSofa.png' alt='' width={112.99} height={92.02} className='rounded' />
                            <span className='text-gray-800'>Asgaard Sofa</span>
                        </td>
                        <td className='p-3 text-gray-700'>Rs. 250,000.00</td>
                        <td className='p-3'><input type="number" defaultValue="1" min="1" className='w-12 text-center border rounded'/></td>
                        <td className='p-3'><button className='text-yellow-500 hover:text-red-500'>🗑</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='flex flex-col md:flex-row justify-end'>
            <div className='bg-yellow-50 p-6 rounded-lg shadow-md  md:w-1/3'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>Cart Totals</h2>
                <div className='flex justify-between mb-2'>
                    <span className='text-grau-600'>Subtotal:</span>
                    <span className='text-gray-800'>Rs.250,000.00</span>
                </div>
                <div className='flex justify-betwwen mb-4'>
                    <span className='text-grau-600 font-semibold'>Total:</span>
                    <span className='text-yellow-500 font-bold text-lg'>Rs.250,000.00</span>
                </div>
                <button className='w-full py-3 bg-yellow-500 text-white font-bold rounde-lg hover:bg-yellow-600 transition duration-300'>Check Out</button>
            </div>
        </div>
    </div>
  );
}

export default TableComponent;


