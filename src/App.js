import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { AppContext } from "./Context/AppContext"
import { useContext } from "react"
import { useEffect } from "react"
import "./app.css"

export default function App() {
  const {fetchBlogPost} = useContext(AppContext)

  useEffect(() => {
    fetchBlogPost()
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center bg-[--bg-color] ">
      <Header/>
      <Blogs className=''/>
      <Pagination />
    </div>
  )};

