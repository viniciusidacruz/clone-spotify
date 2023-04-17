"use client";

import Link from "next/link";
import { MoreVertical } from "lucide-react";
import { Fragment, MouseEvent, useEffect, useRef, useState } from "react";

export const More = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent | any) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <MoreVertical
        onClick={() => setShowMenu(!showMenu)}
        className="text-zinc-500 cursor-pointer hover:text-zinc-400 ease-in duration-100"
      />

      {showMenu && (
        <Fragment>
          <div
            ref={menuRef}
            className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-zinc-800 outline-none rounded-md shadow-lg"
          >
            <div className="p-2">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 rounded-lg hover:bg-zinc-700"
              >
                Nova guia
              </Link>
              <Link
                href="/feedback"
                className="block px-4 py-2 text-sm text-gray-300 rounded-lg hover:bg-zinc-700"
              >
                Feedback
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
