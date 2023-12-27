import clsx from "clsx";
import Markdown, { Options } from "react-markdown";

type TMarkdownReaderProps = Options;

const MarkdownReader = (props: TMarkdownReaderProps) => {
  return (
    <Markdown
      components={{
        h1: ({ className, ...props }) => (
          <h1 className={clsx("text-3xl font-black", className)} {...props} />
        ),
        h2: ({ className, ...props }) => (
          <h2 className={clsx("text-2xl font-bold")} {...props} />
        ),
        p: ({ className, ...props }) => <p className="text-base" {...props} />,
      }}
      {...props}
    />
  );
};

export default MarkdownReader;
