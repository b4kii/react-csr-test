import { useQuery } from "@tanstack/react-query";

const API_URL = "https://randomuser.me/api/";

async function fetchUser() {
  try {
    const res = await fetch(API_URL);

    const data = await res.json();

    return data.results[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}

function App() {
  const { data: user, isLoading } = useQuery({
    queryFn: () => fetchUser(),
    queryKey: ["user"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2 py-4">
      <h1>{user?.name.first}</h1>
    </div>
  );
}

export default App;
