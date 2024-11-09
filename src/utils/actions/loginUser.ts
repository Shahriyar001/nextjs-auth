"use server";

import { FormValues } from "@/app/login/page";

export const loginUser = async (data: FormValues) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  };

  const res = await fetch(`${process.env.BACKEND_URL}/login`, requestOptions);
  const userInfo = await res.json();
  return userInfo;
};