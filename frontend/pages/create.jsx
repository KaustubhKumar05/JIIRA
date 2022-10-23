import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

const Create = () => {
  return (
    <div className="h-screen w-full bg-background-default flex justify-center items-center">
      <div className="w-1/2 max-w-sm p-5 rounded-lg border border-bord-default">
        <div className="flex flex-col gap-4">
          <p className="text-brand-default text-lg font-semibold mx-auto">
            Create a new project
          </p>
          <Input placeholder="Name your project" className="text-md" />
          <TextBox
            placeholder="Enter a brief description (optional)"
            className="text-md"
          />
          <div className="flex justify-between gap-2">
            <Button className="w-full text-base">Create</Button>
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

export default Create;
