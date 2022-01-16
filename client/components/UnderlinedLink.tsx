import Link from "next/link";
import { Url } from "../types";

type Props = {
  href: Url;
  children: string;
};
const UnderlinedLink = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <a className="underline text-[blue]" target="_blank" rel="noreferrer">
        {children}
      </a>
    </Link>
  );
};

export default UnderlinedLink;
