import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Update = ({ albums, setAlbums, title, setTitle }) => {

    const { id } = useParams();

    const navigate = useNavigate();

    const handleUpdate = async () => {

        if(!title){
            toast.error("Please enter title!")
            return;
        }

        try {
           const { data } =  await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
           const { userId } = data;
           const getAlbumIndex = albums.findIndex((album) => parseInt(album.id) === parseInt(id) )
           
            albums[getAlbumIndex] = {
                userId,
                id,
                title
               };
            setAlbums(albums);
           
           const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, {
            id,
            userId,
            title
           })
           
           toast.success(`Title updated to ${response.data.title}`)

           setTitle("")
           navigate(-1)
        } catch (error) {
            toast.error("Error updating Album")
            setTitle("")
            navigate('/')
        }

    }

  return (
    <div className="flex items-center justify-center">
        <Card className="w-96 h-auto p-2 mt-24">
            <CardHeader className="h-24 flex justify-center items-center" color="gray" variant="gradient">
                <Typography>Update Album</Typography>
            </CardHeader>
            <CardBody>
                <Input onChange={(e)=> setTitle(e.target.value)} value={title} label="Title"/>
            </CardBody>
            <CardFooter>
                <Button onClick={handleUpdate}>Update</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Update