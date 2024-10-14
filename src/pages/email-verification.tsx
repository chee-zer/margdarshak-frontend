import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function VerifyEmailPage() {
  return (
    <div className="flex h-screen justify-center items-center bg-auth-flow font-inter">
      <Card className="w-[536px] h-[375px]">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
          <img src="/mail-check.svg" className="h-[94px] w-[94px]"></img>
            Verify Your Email address 
          </CardTitle>
          <CardDescription className="text-lg font-normal">
          <span className="font-bold">Please click on the link </span>
          <span>in the email we just sent you to 
          confirm your email address</span>
          </CardDescription>
        </CardHeader>
        <CardContent >
          <div className="flex gap-3 justify-center">
          <Button className="w-[199px] h-[51px] text-lg font-medium flex gap-2">
            <img src="/mail.png"></img>
            Resend Email
          </Button>
          <Button className="w-[199px] h-[51px] text-lg font-medium" variant={"secondary"}>
            Change Mail ID
          </Button>
          </div>
          <div className="flex justify-center mt-3 gap-1">
            <span className="text-gray-500 font-bold text-lg">Already Verified ?</span>
            <span>
                <Link to={'/'} className="text-blue-600 text-lg">Login here</Link>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
