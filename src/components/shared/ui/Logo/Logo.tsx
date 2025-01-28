import logo from "@/assets/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative h-[100px]">
      <Image src={logo} alt="Logo" fill className="object-cover" />
    </div>
  );
};

export { Logo };
