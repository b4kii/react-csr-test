import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUserStore } from "@/features/users/users.store";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();

  // const { userName, age,  increment }= useUserStore((state) => state);
  // const userName = useUserStore.getState().userName; // doesnt trigger rerenders
  const userName = useUserStore((state) => state.userName); // doesnt trigger rerenders
  const age = useUserStore.getState().age;
  const increment = useUserStore((state) => state.increment)
  const setUserName = useUserStore((state) => state.setUserName)

  const handleChangeLanguage = (e: any) => {
    i18n.changeLanguage(e.target.value);
  }

  const handleClick = () => {
    setUserName("bakson" + age);
    increment()
  }

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <div>
      <div>
        <Button onClick={handleClick}>Increment</Button>
      </div>
      <div>
        {/* <button onClick={handleClick}>Increment</button> */}
        Zustand {userName}
        <div>
          { age }
        </div>
      </div>

    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Wybierz język" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="pl">Polski</SelectItem>
          <SelectItem value="en">Angielski</SelectItem>
          <SelectItem value="es">Hiszpański</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

      <h1>{t("title")}</h1>
      <div>Hello "/"!</div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link
          to="/users/$userId"
          params={{ userId: "1" }}
          search={{ q: "tee", asc: true, timestamp: 1}}
        >
          Users with param
        </Link>
      </div>
    </div>
  );
}
