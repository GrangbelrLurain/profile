"use client";
import Container from "@/components/container";
import MarkdownReader from "@/components/markdown/markdown-reader";
import useMarkdown from "@/lib/client/hook/use-markdown";
import { useSearchParams } from "next/navigation";

const BlogPost = () => {
  const params = useSearchParams();
  const postUrl = String(params.get("postUrl"));
  const { post } = useMarkdown(
    `https://api.github.com/repos/GrangbelrLurain/rooftop-cat-md/contents/${postUrl}`
  );
  if (!post) {
    return <p></p>;
  }
  return (
    <Container className="flex flex-col gap-2 py-5">
      <h2 className="font-bold text-3xl text-primary">{post.title}</h2>
      <MarkdownReader className="max-w-3xl">{post.content}</MarkdownReader>
    </Container>
  );
};

export default BlogPost;
