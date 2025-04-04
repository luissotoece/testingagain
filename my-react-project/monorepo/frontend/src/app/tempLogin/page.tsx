// src/app/tempLogin/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      {/* Left Section - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700 font-semibold">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button
              onClick={() => router.push("/Dashboard")}
              className="w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:from-blue-500 hover:via-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Login
            </Button>
          </form>
        </div>
      </div>

      {/* Right Section - Tie-Dye Background with Create Account Prompt */}
      <div
        className="w-1/3 flex flex-col justify-center items-center p-8 text-white"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #3b82f6, transparent),
            radial-gradient(circle at 80% 80%, #2563eb, transparent),
            radial-gradient(circle at 50% 50%, #1e40af, transparent)
          `,
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          New here?
        </h2>
        <p className="text-lg text-center mb-6">Create an account to get started!</p>
        <Button
          onClick={() => router.push("/CreateAccount")}
          className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-2 rounded-lg transition"
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}



// // src/app/tempLogin/page.tsx

// "use client";

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";

// export default function TempLogin() {
//   const router = useRouter();

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Placeholder Login Page
//         </h2>
//         <p className="text-center text-gray-600">
//           This is a temporary login page. The actual login functionality will be implemented soon.
//         </p>

//         {/* Buttons for navigation */}
//         <div className="mt-6 flex flex-col gap-3">
//           <Button
//             onClick={() => router.push("/Apply")}
//             className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
//           >
//             Start New Student Application
//           </Button>

//           <Button
//             onClick={() => router.push("/UploadDocument")}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
//           >
//             Upload Existing Application
//           </Button>

//           <Button
//             onClick={() => router.push("/MyApplications")}
//             className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md"
//           >
//             My Applications
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }





