import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function CreateProjectButton() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative group  z-10">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e84393] animate-tilt  to-[#6c5ce7] rounded-lg blur-xl opacity-50 group-hover:opacity-100 transistion duration-200"></div>
        <button className="relative bg-systemWhite text-systemBlack rounded-lg">
          <Link
            href="/auth"
            className="flex gap-5 text-sm xl:text-xl p-5 font-normal  "
          >
            Cоздайте свой первый проект
            <span>|</span>
            <span className="flex gap-2 text-blue-400 items-center group-hover:text-[#555] transistion duration-200">
              Начать
              <span className="pt-1">
                <FaArrowRight />
              </span>
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}
