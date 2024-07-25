"use client";

const handleLowerPage = () => {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });
}

export default function Navbar() {
  return (
    <nav className="flex w-full h-[40px] justify-center text-white ">
      <div className="flex flex-row w-3/4 justify-between pt-10 tracking-wide">
        <a>@bensonfm</a>
        <div className="flex space-x-10">
          <button className="hover:underline hover:underline-offset-8" onClick={handleLowerPage}>portfolio</button>
          <button className="hover:underline hover:underline-offset-8">experience</button>
          <button className="hover:underline hover:underline-offset-8">contact</button>
        </div>
      </div>
    </nav>
  );
}
