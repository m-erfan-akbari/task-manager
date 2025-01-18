import React from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { X } from "lucide-react";

export default function Modal({ children, close }) {
  const ref = useOutsideClick(close);
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center overflow-hidden bg-gray-600/20 backdrop-blur-sm">
      <div
        ref={ref}
        className="relative max-h-[95%] overflow-y-auto overflow-x-hidden rounded-md bg-white px-6 py-4 drop-shadow-md"
      >
        <X
          className="absolute right-2 top-2 cursor-pointer text-red-500"
          onClick={close}
        />
        {children}
      </div>
    </div>
  );
}
