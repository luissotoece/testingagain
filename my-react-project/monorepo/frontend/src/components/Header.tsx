"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/images/ua-logo.png" alt="UA Logo" className="h-10 w-auto cursor-pointer" onClick={() => router.push("/Dashboard")} />
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/Dashboard")}>
            UASAMS
          </h1>
        </div>
        <nav className="flex items-center space-x-4">
          <button onClick={() => router.push("/Dashboard")} className="hover:underline">
            Home
          </button>
          <button onClick={() => router.push("/scholarships")} className="hover:underline">
            Scholarships
          </button>
          <button onClick={() => router.push("/Apply")} className="hover:underline">
            Apply
          </button>
          <button onClick={() => router.push("/UploadDocument")} className="hover:underline">
            Upload
          </button>
          <button onClick={handleSignOut} className="hover:underline">
            Sign Out
          </button>
        </nav>
      </div>
    </header>
  );
}