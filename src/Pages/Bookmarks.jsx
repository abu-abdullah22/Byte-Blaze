import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../Components/BlogCard";
import EmptyState from "../Components/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]) ;
    useEffect(()=> {
        const storedBlogs = getBlogs() ;
        setBlogs(storedBlogs) ;
    }, [])

    const handleDelete = id => {
        deleteBlog(id) ;
        const storedBlogs = getBlogs() ;
        setBlogs(storedBlogs) ;
    }
    if(blogs.length< 1) return <EmptyState message={'NO Bookmarks Available'} address={'/blogs'} label={'Browse Blogs'}></EmptyState>
    return (
        <div className="grid lg:px-12 gap-8 py-8 grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    );
};

export default Bookmarks;