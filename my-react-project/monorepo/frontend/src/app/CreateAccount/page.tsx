// // // src/app/CreateAccount/page.tsx

// // "use client";

// // import { useRouter } from "next/navigation";
// // import CreateAccountForm from "@/components/forms/CreateAccountForm";
// // import { Button } from "@/components/ui/button";

// // export default function CreateAccountPage() {
// //   const router = useRouter();

// //   return (
// //     <div className="flex h-screen">
// //       {/* Left Section - Create Account Form */}
// //       <div className="flex-1 flex items-center justify-center bg-gray-100">
// //         <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
// //           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
// //             Create an Account
// //           </h2>
// //           <CreateAccountForm />
// //         </div>
// //       </div>

// //       {/* Right Section - Login Prompt with Tie-Dye Background */}
// //       <div
// //         className="w-1/3 flex flex-col justify-center items-center p-8 text-white"
// //         style={{
// //           backgroundImage: `
// //             radial-gradient(circle at 20% 20%, #3b82f6, transparent),
// //             radial-gradient(circle at 80% 80%, #2563eb, transparent),
// //             radial-gradient(circle at 50% 50%, #1e40af, transparent)
// //           `,
// //           backgroundSize: "cover",
// //         }}
// //       >
// //         <h2 className="text-2xl font-semibold text-center mb-4">
// //           Already have an account?
// //         </h2>
// //         <p className="text-lg text-center mb-6">Welcome back!</p>
// //         <Button
// //           onClick={() => router.push("/tempLogin")}
// //           className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-2 rounded-lg transition"
// //         >
// //           Login
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }











  
//   "use client";

// import { useRouter } from "next/navigation";
// import CreateAccountForm from "@/components/forms/CreateAccountForm";
// import { Button } from "@/components/ui/button";

// export default function CreateAccountPage() {
//   const router = useRouter();

//   return (
//     <div className="flex h-screen">
//       {/* Left Section – Create Account Form */}
//       <div className="flex-1 flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Create an Account
//           </h2>
//           <CreateAccountForm />
//         </div>
//       </div>

//       {/* Right Section – Login Prompt */}
//       <div
//         className="w-1/3 flex flex-col justify-center items-center p-8 text-white"
//         style={{
//           backgroundImage: `
//             radial-gradient(circle at 20% 20%, #3b82f6, transparent),
//             radial-gradient(circle at 80% 80%, #2563eb, transparent),
//             radial-gradient(circle at 50% 50%, #1e40af, transparent)
//           `,
//           backgroundSize: "cover",
//         }}
//       >
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           Already have an account?
//         </h2>
//         <p className="text-lg text-center mb-6">Welcome back!</p>
//         <Button
//           onClick={() => router.push("/login")}
//           className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-2 rounded-lg transition"
//         >
//           Login
//         </Button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CreateAccountForm from "@/components/forms/CreateAccountForm"; // if you need to use a separate component, otherwise use the multi‑step inline code.
import { Button } from "@/components/ui/button";

// Multi-step account creation version integrated with your original styling.
// If you prefer using your CreateAccountForm component, you can merge its functionality into the multi-step below.

type FormData = {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  net_id: string;
  security_question1: string;
  security_answer1: string;
  security_question2: string;
  security_answer2: string;
  requested_role: string;
};

export default function CreateAccountPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    net_id: "",
    security_question1: "",
    security_answer1: "",
    security_question2: "",
    security_answer2: "",
    requested_role: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Account creation failed");
      }
      setMessage("Account created successfully! Please wait for admin approval if a role change was requested.");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Step 1: Personal Details</h2>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Step 2: Contact Information</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Step 3: Account Credentials</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Step 4: Security Questions</h2>
            <input
              type="text"
              name="security_question1"
              placeholder="Security Question 1"
              value={formData.security_question1}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="security_answer1"
              placeholder="Security Answer 1"
              value={formData.security_answer1}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="security_question2"
              placeholder="Security Question 2"
              value={formData.security_question2}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="security_answer2"
              placeholder="Security Answer 2"
              value={formData.security_answer2}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {/* Role request field */}
            <select name="requested_role" value={formData.requested_role} onChange={handleChange} className="border p-2 w-full">
              <option value="">Select desired role (optional)</option>
              <option value="reviewer">Reviewer</option>
              <option value="donor">Donor</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section – Create Account Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
          <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }} className="space-y-4">
            {renderStep()}
            <div className="flex justify-between">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors">
                  Back
                </button>
              )}
              <div className="flex-1" />
              {step < 4 && (
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Next
                </button>
              )}
              {step === 4 && (
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
                  Submit
                </button>
              )}
            </div>
          </form>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
        </div>
      </div>

      {/* Right Section – Login Prompt with Tie-Dye Background */}
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
        <h2 className="text-2xl font-semibold text-center mb-4">Already have an account?</h2>
        <p className="text-lg text-center mb-6">Welcome back!</p>
        <Button
          onClick={() => router.push("/login")}
          className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-2 rounded-lg transition"
        >
          Login
        </Button>
      </div>
    </div>
  );
}