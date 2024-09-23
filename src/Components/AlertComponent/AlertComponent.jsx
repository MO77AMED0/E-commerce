import React, { useState } from 'react';

const AlertComponent = ({ brandData, showAlert, setShowAlert }) => {
    

    const handleClose = () => {
        setShowAlert(false);
    };

    return (
        <>
           <div className={!showAlert ? 'hidden' : ''}>
                    <div className="w-6/12 mx-auto fixed mt-10 top-5 left-96 z-50 bg-white rounded-md border border-gray-400">
                        <div className='border-gray-300 border-b flex justify-between items-center p-2'>
                            <span className="text-xl"></span>
                            <button 
                                className='text-lg font-semibold text-gray-500 hover:text-gray-900'
                                onClick={handleClose}
                            >
                                <i className="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <div className="flex">
                            <div className='w-1/2 p-2  flex flex-col justify-center '>
                                <h2 className='text-main'>{brandData[0]?.name}</h2>
                                <h2>{brandData[0]?.slug}</h2>
                            </div>
                            <div className='w-1/2'>
                                <img src={brandData[0]?.image} className='w-full' alt={brandData[0]?.name} />
                            </div>
                        </div>
                        <div className='border-t border-gray-300 p-2'>
                            <button 
                                className='p-3 bg-gray-400 text-white rounded'
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default AlertComponent;





















