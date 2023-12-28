import {
  Button
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    
    <div className="flex justify-between items-center mb-4 w-full p-8 h-16 bg-black">
      <div className="text-white text-lg tracking-wider font-medium">
        Albums
      </div>
      <div>
      <Link to={`/add`}>
        <Button color="orange">Add New Album</Button>
      </Link>
      </div>
    </div>
    
  )
}

export default Nav