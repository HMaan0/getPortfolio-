import SigninBody from "../../components/Signin/SigninBody";

const page = () => {
  return (
    <>
      <main className="w-full sm:h-screen min-h-svh bg-theme-bar flex justify-center items-center ">
        <div className="flex justify-center items-center flex-col gap-5 w-3/4 sm:w-1/2 lg:w-1/3   ">
          <SigninBody />
        </div>
      </main>
    </>
  );
};

export default page;
