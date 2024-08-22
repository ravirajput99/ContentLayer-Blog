import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block text-light broder border-solid border-light border-2 py-3 px-10 bg-dark rounded-full font-semibold hover:scale-105 transition-all ease duration-150 capitalize",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
