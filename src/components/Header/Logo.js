import Image from "next/image";
import Link from "next/link";
import profileImage from "@/public/profile-img.png";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark gap-2">
      <div className="w-16 border border-solid border-dark rounded-full">
        <Image
          src={profileImage}
          alt="Ravi Rajput"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="bold text-xl">Ravi Rajput</span>
    </Link>
  );
};

export default Logo;
