import Image from "next/image";
import React from "react";

const ProfileAvatar = ({ src, size }: { src: string; size: number }) => {
  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt="Avatar"
      className=" aspect-square rounded-full border-2 object-cover"
    />
  );
};

export default ProfileAvatar;
