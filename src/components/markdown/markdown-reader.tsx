import clsx from "clsx";
import Markdown, { Options } from "react-markdown";

type TMarkdownReaderProps = Options;

const MarkdownReader = (props: TMarkdownReaderProps) => {
  return (
    <Markdown
      components={{
        h1: ({ className, ...props }) => (
          <h1
            className={clsx("text-3xl font-black py-2", className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
};

export default MarkdownReader;
