import { create } from "zustand";

type UserStore = {
    userName: string;
    age: number;
    increment: () => void;
    setUserName: (name: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
    userName: "Baki",
    age: 20,
    increment: () => {
        set((state) => ({
            age: state.age + 1
        }));
    },
    setUserName: (newName: string) => {
        set({ userName: newName });
    },
}));
