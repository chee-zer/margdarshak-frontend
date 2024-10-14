import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ChooseRolePage() {
  return (
    <div className="flex h-screen justify-center items-center bg-auth-flow font-inter">
      <Card className="w-[600px] h-[526px]">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Join Margdarshak
          </CardTitle>
          <CardDescription className="text-lg font-normal">
            Join our community to discover new insights, foster growth, and
            build lasting connections with mentors who can guide you on your
            journey!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3 justify-center">
          <Button className="w-[247px] h-[232px] text-lg font-medium">
            Join as mentor
          </Button>
          <Button className="w-[247px] h-[232px] text-lg font-medium">
            Join as mentee
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
