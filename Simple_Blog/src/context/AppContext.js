import { createContext, useState } from "react";


import { baseUrl } from "../baseUrl";
// step 1
export  const AppContext=createContext();


export default function AppContextProvider({children}){

    const [loading, setLoading]=useState(false);
    const [posts, setPosts]= useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalpages]=useState(null);


    // data filling pending

    async function fetchBlogPosts(page=1, tag=null ,category){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&tag=${category}`;
        }
        try{
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalpages(data.totalPages);
        }
        catch(error){
            console.log("Error is fetching data");
            setPage(1);
            setPosts([]);
            setTotalpages(null);
        }

        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={

        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalpages,
        fetchBlogPosts,
        handlePageChange
    };

    // step 2
    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}