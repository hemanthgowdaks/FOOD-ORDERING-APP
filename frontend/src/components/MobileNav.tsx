import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
   return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500 text-orange-500 hover:text-orange-700" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>Welcome to QuickBite.com</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex">
                <Button className="flex-1 font-bold hover:text-gray-300 bg-orange-500 hover:bg-orange-700">Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
   )
}

export default MobileNav;