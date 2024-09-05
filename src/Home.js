import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


  return (
    <div className="home">
      { isPending && <div>Loading... TEST 2!!!</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;