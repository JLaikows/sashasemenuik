"use client";

import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const onChange = (key: string) => (e: { target: { value: any } }) => {
    setData({ ...data, [key]: e.target.value });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await signIn("credentials", { ...data, redirect: false });
      setIsLoading(false);

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("/admin");
    } catch (e) {
      setIsLoading(false);
      setError(e as string);
    }
  };
  return (
    <main className="transition faded-element-fast flex items-center justify-center flex-col md:flex-row items-center p-2 md:p-2 lg:p-64 lg:pt-0">
      <Box className="relative mt-32 lg:mt-0 flex flex-col justify-center items-center p-10 accent lg:p-20 rounded-lg">
        <FormControl>
          <TextField
            className="mb-4 bg-white"
            title="Email"
            name="Email"
            placeholder="Email"
            value={data.email}
            onChange={onChange("email")}
          />
          <TextField
            className="mb-4 bg-white"
            title="Password"
            name="Password"
            placeholder="Password"
            value={data.password}
            onChange={onChange("password")}
          />
          <Button variant="contained" onClick={onSubmit} disabled={isLoading}>
            {isLoading ? <CircularProgress size="small" /> : "Submit"}
          </Button>
        </FormControl>
      </Box>
    </main>
  );
}
