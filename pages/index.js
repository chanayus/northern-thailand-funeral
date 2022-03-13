import Link from "next/link";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <button className="bg-gray-300 py-3 px-10 rounded font-bold" onClick={() => router.replace("/section2", "/", { shallow: true, scroll: false })}>Start</button>
      </div>
    </>
  );
};

export default Home;
