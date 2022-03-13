import Link from "next/link";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <button onClick={() => router.replace("/section2", "/", { shallow: true, scroll: false })}>Start</button>
      </div>
    </>
  );
};

export default Home;
