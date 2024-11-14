import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Button from "@/components/ui/firstbutton";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
        <div className="m-auto justify-center items-center">
            <Button className='text mx-12'>
                <LoginLink>Login</LoginLink>
            </Button>
        <div className='m-auto mt-6 align-middle'><Button className='text mx-11'>
                <RegisterLink>SignUp</RegisterLink>
        </Button>
        </div>
        </div>
        </div>
  )
}