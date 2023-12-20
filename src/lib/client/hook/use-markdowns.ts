"use client";

import useSWR from "swr";

type TResponse = {
  download_url: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  url: string;
};

type TData = {
  response: TResponse[];
};

const fetcher = async () => {
  const data = await fetch("/api/markdowns").then(async (req) => {
    const json = await req.json();
    return json;
  });
  return data;
};

const useMarkdowns = () => {
  const { data, error } = useSWR<TData>("/api/markdowns", fetcher);
  const markdowns = data?.response.filter(({ name }) => name.includes("md"));
  return { markdowns };
};

export default useMarkdowns;
