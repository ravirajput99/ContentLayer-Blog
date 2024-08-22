import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import { sortBlogs } from "../utils";
export default function Home() {
  const sortedBlogs = sortBlogs(allBlogs);
  return (
    <main className="flex justify-center flex-col items-center">
      <HomeCoverSection blogs={sortedBlogs} />
    </main>
  );
}
