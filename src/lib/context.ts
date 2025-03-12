import { createContext, useContext } from "react";

type Test = {
    name: string
}

export const TestContext = createContext<Test | undefined>(undefined);

export function useTextContext() {
    const test = useContext(TestContext);

    if (test === undefined) {
        throw new Error("context must be wrapper");
    }

    return test;
}