import { useEffect, useState } from "react"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react"
import axios from "axios"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';

const Albums = ({ dataFetched, setDataFetched, albums, setAlbums }) => {

  

  const deleteHandle = async (id) => {

    try {
      const newAlbum = albums.filter((album) => album.id != id);
      setAlbums(newAlbum);

      await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
    
      toast.success("Delete successful!")
    } catch (error) {
      toast.error("Delete unsuccessful!")
    }
    
     
  }

  useEffect(()=>{
    async function fetch() {
      
      const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
      setAlbums(response.data)
      setDataFetched(true);
    }

    if(!dataFetched){
      fetch();
    }
    
  },[])

  return (
    <div className="grid grid-cols-3 gap-8 justify-items-center mb-8">
      {
        albums.map((album) => (
          <div key={album.id}>
          <Card className="w-96">
            <CardBody>
              <Typography variant="h5">
                {album.title}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-between">
              
              <Link to={`/update/${album.id}`}>
              <Button>Update</Button>
              </Link>
              
              <Button color="red" onClick={() => deleteHandle(album.id)}>Delete</Button>
            </CardFooter>
          </Card>
          </div>
        ))
      }
    </div>
  )
}

export default Albums