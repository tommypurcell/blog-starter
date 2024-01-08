/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ToUHq97zsjR
 */
export default function Hero() {
  return (
    <div className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-[#2c3e50] to-[#000428]">
      <div className="absolute inset-0 overflow-hidden"></div>
      <h1 className="relative z-10 text-9xl font-extrabold text-white">
        What will you blog?
      </h1>
    </div>
  );
}

function Heading5Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17 13v-3h4" />
      <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
    </svg>
  );
}
