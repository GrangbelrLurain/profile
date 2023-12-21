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

const fetcher = async () => {
  const data = await fetch(
    "https://api.github.com/repos/GrangbelrLurain/rooftop-cat-md/contents"
  ).then(async (req) => {
    const json = await req.json();
    return json;
  });
  return data || [];
};

const useMarkdowns = () => {
  const { data, error } = useSWR<TResponse[]>(
    "https://api.github.com/repos/GrangbelrLurain/rooftop-cat-md/contents",
    fetcher
  );
  const markdowns = data?.filter(({ name }) => name.includes("md"));
  return { markdowns };
};

export default useMarkdowns;
