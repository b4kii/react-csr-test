import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";

const userSearchSchema = z.object({
  q: z.string().min(2, { message: "Search key is too short" }),
  asc: z.boolean(),
  timestamp: z.number(),
});

// type UserSearch = z.infer<typeof userSearchSchema>

export const Route = createFileRoute("/users/$userId")({
  validateSearch: userSearchSchema,
  loaderDeps: ({ search: { q, asc, timestamp } }) => ({ q, asc, timestamp }),
  component: UserComponent,
  loader: async ({ deps, params }) => {
    return `This is data from loader function params: ${params.userId}\nsearch: ${deps.q}, ${deps.asc}, ${deps.timestamp}`;
  },
  pendingComponent: () => <div>Loading..</div>,
  errorComponent: () => <div>Error</div>,
});

const userLoginFormSchema = z.object({
  login: z.string()
          .min(2, { message: "Username too short" })
          .email({message: "Invalid email"}),
  password: z.string(),
});

type UserLoginForm = z.infer<typeof userLoginFormSchema>;

// const API_URL = "https://randomuser.me/api/";
const API_URL = "http://localhost:3069/users";

async function fetchUser() {
  try {
    const res = await fetch(API_URL);

    const data = await res.json();
    
    console.log(data);
    // return data.results[0];
    return data[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}

function UserComponent() {
  const data = Route.useLoaderData();
  const { q } = Route.useSearch();
  const { userId } = Route.useParams();

  const { data: user, isLoading, refetch, isFetching} = useQuery({
    queryFn: () => fetchUser(),
    queryKey: ["user"],
    enabled: false
  });

  const { register, handleSubmit, setError, formState: { errors }, } = useForm<UserLoginForm>({
    resolver: zodResolver(userLoginFormSchema),
    defaultValues: {
      login: "baki"
    }
  });

  // const onSubmit: SubmitHandler<UserLoginForm> = async (data) => {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //     throw new Error();
  //     console.log(data);
  //   } catch (error) {
  //     setError("login", { message: "Invalid login" }); // root error = global error
  //   }
  // };

  const onSubmit: SubmitHandler<UserLoginForm> = async (data) => {
      console.log(data);
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div>Loader data: {data}</div>
      <div>Path params: {userId}</div>
      <div>Query params: {q}</div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register("login")} type="text" placeholder="Login" />
            {errors.login && <div>{errors.login.message}</div>}
          </div>
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </div>
          <button>Sign in</button>
        </form>
      </div>
      <button onClick={() => refetch()}>
        {isFetching ? "Looooading.." : "Fetch some user"}
      </button>
      <h1>{user?.firstname}</h1>
    </div>
  );
}
