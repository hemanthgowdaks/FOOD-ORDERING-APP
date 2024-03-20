import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const {user,logout } = useAuth0();
    
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
            <CircleUserRound className="text-orange-500" />
                {user?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to="/user-profile" className="font-bold hover:text-orange-500">
                    User Profile
                </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button onClick={()=>logout()} variant="ghost"
          className="flex flex-1 font-bold text-white bg-orange-500 hover:bg-orange-700 hover:text-gray-300" >Log Out</Button>
            </DropdownMenuItem>

        </DropdownMenuContent>
    </DropdownMenu>

    
  )
}

export default UsernameMenu;