import React, { useContext }  from "react";
import {AppContext} from '../context/AppContext';
import Spinner from "./Spinner";


const Blogs=()=>{

    const {posts,loading}= useContext(AppContext);
    return (
        <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]">

                {
                    loading ? <div className="flex justify-center items-center mt-[200px]">(<Spinner/>) </div>: 
                    (
                        posts.length===0?
                        (
                            <div className="text-center hover:text-red-700 ...">
                                <p> No Post Found</p>
                            </div>
                        ): 
                        (
                            posts.map((posts)=>(
                                <div>
                                    <p className="font-bold text-lg"> {posts.title}</p>
                                    <p className="text-sm mt-[4px]">
                                         By <span className="italic">{posts.author}</span> on <span className="underline font-bold">{posts.category}</span>   
                                    </p>
                                    <p className="text-sm mt-[4px]">
                                        Posted on {posts.date}
                                    </p>
                                    <p className="text-md mt-[14px]">{posts.content}</p>

                                    <div className="text-blue-700 flex gap-x-3">
                                        {posts.tags.map( (tag,index)=>{
                                            return <span key={index} className="underline font-bold text-xs mt-[5px]">{` # ${tag}`}</span> 
                                        })}
                                    </div>

                                </div>
                            )
                                
                            )
                        )
                    )
                }
        </div>
    );
}

export default Blogs;