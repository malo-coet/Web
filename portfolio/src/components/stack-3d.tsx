"use client";

import Image from "next/image";

export function Stack3D() {
  return (
    <div aria-label="Stack 3D" className="flex h-[450px]">
      <Image
        src="/miniroom.png"
        alt="Atelier 3D"
        width={1440}
        height={724}
        className="h-full w-full object-cover object-[55%]"
        priority={false}
        draggable={false}
      />
    </div>
  );
}
