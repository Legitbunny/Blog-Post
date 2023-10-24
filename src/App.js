// import Header from "./components/Header"
// import Blogs from "./components/Blogs"
// import Pagination from "./components/Pagination"
import { AppContext } from "./Context/AppContext"
import { useContext } from "react"
import { useEffect } from "react"
import "./App.css"
import { useSearchParams, useLocation,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import BlogPage from "./Pages/BlogPage"
import TagPage from "./Pages/TagPage"
import CategoryPage from "./Pages/CategoryPage"


export default function App() {
  const {fetchBlogPost} = useContext(AppContext)

  const {searchParams,setSearchParams} = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")) {
      // iska matlab tags wala page show karna hai 
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ")
      console.log(tag)
      fetchBlogPost(Number(page), tag)
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ")
      fetchBlogPost(Number(page),null, category)
    }
    else{
      fetchBlogPost(Number(page))
    }
  }, [location.pathname, location.search]);
  return (
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />
   </Routes>
  ) };

