'use client'
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
// import blogData from "./blogData";
import {API_BASE_URL} from "@/utils/constants"

async function getBlog(){
  const res = await fetch(`https://app.scansphere.org/api/blog`, {mode:'cors'})
  return await res.json();
}

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
  
    const loadData = async () => {
      const data = await getBlog();
      console.log("Loading data...")
      console.log(data.data)
      setData(data.data);
    }
    loadData();

  }, []);


  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {data.map((blog) => (
            <div key={blog.id} className="w-full">
              {/* <p className="text-white-600">{blog.title}</p> */}
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
