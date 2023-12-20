"use client";
import Container from "@/components/container";
import useMarkdown from "@/lib/client/hook/use-markdown";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const params = useParams();
  const postUrl = String(params.postUrl);
  const { post } = useMarkdown(
    `https://api.github.com/repos/GrangbelrLurain/rooftop-cat-md/contents/${postUrl}`
  );
  if (!post) {
    return <p></p>;
  }
  return (
    <Container className="flex flex-col gap-2 py-5">
      <h2 className="font-bold text-2xl">{post.title}</h2>
      <p>{post.content}</p>
    </Container>
  );
};

export default BlogPost;
