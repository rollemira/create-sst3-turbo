import "./App.css";
import { name } from "@acme/api";
import { api } from "./utils/api";

function App() {
  const { data, error, isLoading } = api.greet.greeting.useQuery({
    name: "web",
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-4xl">Admin</h1>
      <h2 className="text-xl">Loaded package</h2>
      <p>{name}</p>
      <h2 className="text-xl">tRPC Query</h2>
      <pre>{data.reply}</pre>
    </div>
  );
}

export default App;
