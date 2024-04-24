import { Link } from "react-router-dom";

import { name } from "@acme/calcs";

import { api } from "../utils/api";

function Home() {
  const { data, error, isLoading } = api.pinger.ping.useQuery({
    name: "web",
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error: {error.message}</p>;

  return (
    <div className="flex w-full flex-col gap-4 text-center">
      <h1 className="text-4xl">Web</h1>
      <h2 className="text-xl">Loaded package</h2>
      <p>{name}</p>
      <h2 className="text-xl">tRPC Query</h2>
      <pre>{data?.reply}</pre>
      <p>
        <Link to="/about">Go to About</Link>
      </p>
      <p>
        <Link to="/create">Create a Lead</Link>
      </p>
    </div>
  );
}

export default Home;
