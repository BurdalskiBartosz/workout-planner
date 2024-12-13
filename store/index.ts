import { create } from "zustand";

type Store = {
  str: string;
};

export const useStore = create<Store>(() => ({
  str: "Hello World!",
}));
