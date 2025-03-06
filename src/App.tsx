import { useQuery } from "@tanstack/react-query";


function App() {
  return (
    <div className="p-2 py-4">
      <h1>{user?.name.first}</h1>
    </div>
  );
}

export default App;
