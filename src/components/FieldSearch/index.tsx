"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import lockSource from "@/assets/lock.svg";

export const FieldSearch = () => {
  const [fieldValueSearch, setFieldValueSearch] = useState(
    "https://meuspotify.com.br"
  );

  const { push } = useRouter();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    push(fieldValueSearch);
  };

  return (
    <div className="rounded bg-[#2c2c2c] h-10 flex items-center w-full max-w-2xl px-4 justify-center gap-4">
      <Image
        width={16}
        height={16}
        src={lockSource}
        title="Site 100% seguro"
        alt="Cadeado identificando que é um site seguro"
      />

      <form onSubmit={handleSearch} className="w-full">
        <input
          type="url"
          value={fieldValueSearch}
          onChange={(event) => setFieldValueSearch(event.target.value)}
          className="bg-transparent outline-none w-full text-gray-400 text-sm"
        />
      </form>
    </div>
  );
};
