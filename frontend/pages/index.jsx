import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Head>
        <title>jiira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full bg-background-default flex justify-center items-center">
        <div className="w-1/2 max-w-sm p-5 rounded-lg border border-bord-default">
          <div className="flex flex-col gap-8">
            <p className="text-brand-default text-lg font-semibold mx-auto">
              Manage tasks better
            </p>
            <div className="flex flex-col gap-5">
              <Link href="/create">
                <a>
                  <Button className="w-full text-base">Create a project</Button>
                </a>
              </Link>
              <Link href="/join">
                <a>
                  <Button variant="outlined" className="w-full text-base">
                    Join a project
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
