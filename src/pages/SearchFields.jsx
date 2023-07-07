import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchFields = () => {


    

    return (
        <div>
            <div className='search-fields py-9'>
                <div className="container">
                    <div className="search-content flex justify-between items-center ">
                        <div>
                            <button className="btn btn-warning">Dhaka</button>
                        </div>
                        <div className='relative'>
                            <li className='flex bg-white mx-auto h-8 w-full max-w-2xl  rounded-full pr-3'>
                                <input
                                    className='h-8 p-4 border rounded-[20px] w-full text-base focus:ring-0 outline-none'
                                    type='text'
                                    name='search'
                                    id='search'
                                    placeholder='Search'
                                />
                                <button className='absolute right-[30px] top-[10px]'>
                                    {/* <BiSearchAlt /> */}
                                    <BsSearch />
                                </button>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='category-list pb-10'>
                <div className="container">
                    <h2>category</h2>
                </div>
            </div>
        </div>
    );
};

export default SearchFields;