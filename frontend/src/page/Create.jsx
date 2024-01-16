import React, {useState} from 'react'
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

function Create() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  async function handleSave(){
    const data={title,author,publishYear}
    setLoading(true);

    try{
      await axios.post("http://localhost:4000/book",data,config)
      setLoading(false)
      enqueueSnackbar("Book created sucessfully", {variant: 'success'})
      navigate("/")
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading && <Spinner />}

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[6000px] p-4 mx-auto'>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type='text'
            value={title}
            onChange={e=>setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
           />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type='text'
            value={author}
            onChange={e=>setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
           />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={e=>setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
           />
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleSave}>
          Save
        </button>

      </div>
    </div>
  )
}

export default Create