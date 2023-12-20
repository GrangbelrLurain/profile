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
  const data = await fetch(`/api/markdowns/post?url=${url}`).then(
    async (req) => {
      const json = await req.json();
      return json;
    }
  );
  return data;
};

const useMarkdown = (url: string) => {
  const { data, error } = useSWR(`/api/markdowns/post${url}}`, () => {
    return fetcher(url);
  });
  const post = data?.response;
  return { post };
};

export default useMarkdown;
