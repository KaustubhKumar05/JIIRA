import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

const Join = () => {
  return (
    <div className="h-screen w-full bg-background-default flex justify-center items-center">
      <div className="w-1/2 max-w-sm p-5 rounded-lg border border-bord-default">
        <div className="flex flex-col gap-5">
          <p className="text-brand-default text-lg font-semibold mx-auto">
            Join an existing project
          </p>
          <Input placeholder="Enter project code" className="text-md" />          
          <div className="flex justify-between gap-5">
            <Button className="w-full text-base">Join</Button>
            <Link href="/">
              <a className="w-full">
                <Button className="w-full text-base" variant="outlined">
                  Cancel
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
