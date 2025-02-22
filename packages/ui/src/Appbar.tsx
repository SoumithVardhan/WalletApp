import { Avatar }  from "./Avatar";
import { Filter } from "./Filter";
import { Logo } from "./Logo";
import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onSignout: any,
    onLogoClick:any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout,
    onLogoClick
}: AppbarProps) => {
  
    return <div className="flex justify-between text-[#6a51a6] border-b border-slate-300 px-5 sm:px-12 ">
         <div className="flex items-center" onClick={onLogoClick}>
         <Logo />
            </div>
        <div className="flex gap-2 justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
       
         </div>
    </div>
}