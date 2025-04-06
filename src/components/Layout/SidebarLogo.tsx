import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="
        flex
        h-14 w-14
        cursor-pointer items-center
        justify-center
        rounded-full
        p-4
        transition
        hover:bg-indigo-300
        hover:bg-opacity-10
      "
    >
      <Image
        src="/havadis_logo.png"
        alt="Havadis Logo"
        width={32}
        height={32}
      />
    </div>
  );
};

export default SidebarLogo;
