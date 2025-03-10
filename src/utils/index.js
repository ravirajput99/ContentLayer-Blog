import { compareDesc, parseISO } from "date-fns";

export const cx = (...className) => className.filter(Boolean).join(" ");
export const sortBlogs = (blogs) =>
  blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
