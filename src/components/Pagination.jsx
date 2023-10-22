import React from 'react'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react';

const Pagination = () => {
    const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 py-4 fixed bottom-0 bg-white'>
        <div className='flex justify-between  items-center w-11/12 max-w-[730px]'>
            <div className='flex gap-x-2'>
                { page > 1 &&
                    <button
                    className='rounded-md border-2 py-2 px-5'
                    onClick={() => handlePageChange(page-1)}>
                        Previous
                    </button>
                }
                { page < totalPages &&
                    <button 
                    className='rounded-md border-2 py-2 px-5'
                    onClick={() => handlePageChange(page+1)}>
                        Next
                    </button>
                }
            </div>
            
            <p className='font-bold text-sm'>
                Page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagination