import { name } from "@acme/api";
import { api } from "../utils/api";
import { Link } from "react-router-dom";

function About() {
  const { data, error, isLoading } = api.greet.greeting.useQuery({
    name: "about",
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error: {error.message}</p>;

  return (
    <div className="flex w-full flex-col gap-4 text-center">
      <h1 className="text-4xl">About</h1>
      <h2 className="text-xl">Loaded package</h2>
      <p>{name}</p>
      <h2 className="text-xl">tRPC Query</h2>
      <pre>{data.reply}</pre>
      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
}

export default About;
