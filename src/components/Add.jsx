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
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const [ title, setTitle ] = useState("");
    const [ userId, setUserId ] = useState("");
    const navigate = useNavigate();

    const handleAdd = async () => {
        try {

            if(! (title && userId)){
                toast.error("Please enter all inputs!")
                return;
            }

            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
            const id = data.length + 1;
            const response = await axios.post(`https://jsonplaceholder.typicode.com/albums`, {
                id,
                userId,
                title
            })
            
            toast.success(`New Album ${response.data.title} has been added`)
            setUserId("")
            setTitle("")
            navigate('/')
        } catch (error) {
            toast.error("Error adding album")
            setUserId("")
            setTitle("")
            navigate('/')
        }
    }

  return (
    <div className="flex items-center justify-center">
    <Card className="w-96 h-auto p-2 mt-24">
        <CardHeader className="h-24 flex justify-center items-center" color="gray" variant="gradient">
            <Typography>Add Album</Typography>
        </CardHeader>
        <CardBody>
            <div className="flex flex-col gap-4">
            <Input onChange={(e)=> setUserId(e.target.value)} value={userId} label="User Id"/>
            <Input onChange={(e)=> setTitle(e.target.value)} value={title} label="Title"/>
            </div>
        </CardBody>
        <CardFooter>
            <Button onClick={handleAdd}>Add</Button>
        </CardFooter>
    </Card>
</div>
  )
}

export default Add