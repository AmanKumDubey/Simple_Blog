import React, { useContext }  from "react";
import { AppContext } from "../context/AppContext";
import react from "react";

const Pagination=()=>{
    const {page,handlePageChange,totalPages}=useContext(AppContext);
    return (
        <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-gray-200">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">

                <div className="flex gap-x-2">
                {page>1 &&
                    <button 
                    className="rounded-md border-2 px-4 py-1 bg-white text-yellow-500 font-bold hover:bg-sky-700 ..."
                    onClick={()=>handlePageChange(page-1)}>
                        Previous
                    </button>
                }
                {
                    page<totalPages &&
                    <button 
                    className="rounded-md border-2 px-4 py-1 bg-white text-yellow-500 font-bold hover:bg-sky-700 ..."
                    onClick={()=>handlePageChange(page+1)}>
                        Next
                    </button>
                }
                </div>

                <p className="font-bold text-sm text-red-400">
                    Page {page} of  {totalPages}
                </p>
            </div>
        </div>
    );
}

export default Pagination;