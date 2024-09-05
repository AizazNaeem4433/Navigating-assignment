import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="max-w-md text-center">
        <Link href={"/homepage"} className="flex justify-center font-semibold text-xl items-center p-2">Home</Link>
        <div className="text-lg">Nevigation Assignment</div>
      </div>
    </main>
  );
}
