import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const userSearchSchema = z.object({
  q: z.string().min(2, {message: "Search key is too short"}),
  asc: z.boolean(),
  timestamp: z.number()
});

// type UserSearch = z.infer<typeof userSearchSchema>

export const Route = createFileRoute("/users/$userId")({
  validateSearch: userSearchSchema,
  loaderDeps: ({ search: { q, asc, timestamp } }) => ({ q, asc, timestamp }),
  component: UserComponent,
  loader: async ({ deps , params}) => {
    return `This is data from loader function params: ${params.userId}\nsearch: ${deps.q}, ${deps.asc}, ${deps.timestamp}`
  },
  pendingComponent: () => <div>Loading..</div>,
  errorComponent: () => <div>Error</div>
});

function UserComponent() {
  const data = Route.useLoaderData();
  const { q } = Route.useSearch();
  const { userId } = Route.useParams();

  return (
    <div>
      <div>Loader data: {data}</div>
      <div>Path params: {userId}</div>
      <div>Query params: {q}</div>
    </div>
  )
}
