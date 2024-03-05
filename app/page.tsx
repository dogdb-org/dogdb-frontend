"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/testsSlice/testsSlice";
import { useTheme } from "next-themes";
export default function Home() {
  const { setTheme } = useTheme();
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <main className="min-h-screen bg-primary p-24">
      <div className="flex justify-center gap-8">
        <h1 className="text-black dark:text-white">DogDB Frontend</h1>
        <Button onClick={() => setTheme("light")}>Light Mode</Button>
        <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
      </div>
      <div className="mt-4 flex justify-center gap-8">
        <p className="text-black dark:text-white">
          Counter: {state.tests.value}
        </p>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </main>
  );
}
