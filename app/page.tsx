import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <div
      className="w-full bg-slate-300 h-full overflow-auto"
      style={{
        backgroundImage: "url('/assets/landing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Intro />
    </div>
  );
}
