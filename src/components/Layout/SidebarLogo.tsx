import { useRouter } from "next/router";
import { TbMessageCircleFilled } from "react-icons/tb";
import React from "react";

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
            hover:bg-blue-300
            hover:bg-opacity-10
        "
    >
      <TbMessageCircleFilled size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;