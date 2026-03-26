import React from "react";
import RequestInformation from "./components/RequestInformation";

const Home = () => {
  return (
    <div>
      <RequestInformation />
      <h1 className="text-3xl font-medium underline">Hello world!</h1>
      <div className="h-72">
        <p className="text-lg text-gray-500">
          This is a sample Next.js app with Tailwind CSS.
        </p>
      </div>
      <div className="h-72">
        <p className="text-lg text-gray-500">
          This is a sample Next.js app with Tailwind CSS.
        </p>
      </div>
      <RequestInformation isDark />
    </div>
  );
};

export default Home;
