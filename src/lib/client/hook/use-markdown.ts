"use client";

import useSWR from "swr";

type TPost = {
  title: string;
  content: string;
};

type TData = {
  response: TPost;
};

const fetcher = async (url: string) => {
  const data = await fetch(url).then(async (req) => {
    const json = await req.json();
    return json;
  });
  return data;
};

const useMarkdown = (url: string) => {
  const { data, error } = useSWR(url, () => {
    return fetcher(url);
  });

  let post: TPost | undefined;
  if (data) {
    const title = data.name;
    const content = Buffer.from(data.content, data.encoding).toString("utf-8");
    post = { title, content };
  }

  return { post };
};

export default useMarkdown;
