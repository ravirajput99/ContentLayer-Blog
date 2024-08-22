import Image from "next/image";
import Tag from "../Elements/Tag";
import Link from "next/link";

const HomeCoverSection = ({ blogs }) => {
  const blog = blogs[0];
  console.log(blog);
  return (
    <div className="w-full inline-block">
      <article className=" flex flex-col mx-10 justify-end items-start relative h-[85vh]">
        <div className=" absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          fill
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />
        <div className="text-light z-0 w-3/4 flex flex-col items-start justify-center p-16">
          <Tag link={`/catagories/${blog.tags[0]}`} name={blog.tags[0]} />
          <Link href={blog.url_path} className="mt-6">
            <h1 className="font-bold capitalize text-4xl">
              <span className="bg-gradient-to-r from-light to-light bg-[length:0px_4px] hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block font-in mt-4 text-xl">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
