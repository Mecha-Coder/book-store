import React, {useState, useEffect} from "react"
import axios from "axios"
import Spinner from "../components/Spinner"
import LayoutCard from "../components/LayoutCard"
import LayoutTable from "../components/LayoutTable"
import { Link } from "react-router-dom"
import { MdOutlineAddBox} from "react-icons/md"

function Home() {
  const [book, setBook]       = useState([]);
  const [loading, setLoading] = useState(false); 
  const [showType, setShowType]   = useState(false)

  useEffect(()=>{
    setLoading (true);
    
    async function fetchData(){
      try{
        const result = await axios.get("http://localhost:4000/book")
        setBook(result.data.data)
      } catch (error) {console.log("Code 1 " + error.message)}
    }
    fetchData()
    setLoading(false)
  },[])

  return (
    <div className="p-4">

    <div className="flex justify-center items-center gap-x-4">
      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
        onClick={()=>{setShowType(false)}}
      >
        Table
      </button>

      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
        onClick={()=>{setShowType(true)}}
      >
        Card
      </button>
    </div>

    <div className="flex justify-between items-center">
      <h1 className="text-3xl my-8">BookList</h1>

      <Link to="/book/create">
        <MdOutlineAddBox className="text-sky-800 text-4xl" />
      </Link>
      </div>

      {loading? <Spinner /> : (showType? <LayoutCard book={book}/>: <LayoutTable book={book}/>)
      }

   </div> 
  )
}

export default Home