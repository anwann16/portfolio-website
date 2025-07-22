export default function Home() {
  return (
    <div className="w-full h-[1000px] px-10 py-5 md:py-10 overflow-hidden">
      <h2 className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
        Get to Know Me!
        <svg
          className="absolute -bottom-0.5 w-full max-h-1.5"
          viewBox="0 0 55 5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
            strokeWidth="2"
          ></path>
        </svg>
      </h2>
    </div>
  );
}
