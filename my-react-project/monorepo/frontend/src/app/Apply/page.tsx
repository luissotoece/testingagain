// // // src/app/Apply/page.tsx

// // "use client";
// // //import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { useState, useEffect } from "react";

// // export default function ApplyPage() {
// //   const [selectedOption, setSelectedOption] = useState("quick-apply");
// //   const [savedScholarships, setSavedScholarships] = useState<string[]>([]);
// //   const [savedApplications, setSavedApplications] = useState<any[]>([]);
// //   const router = useRouter();

// //   // Load saved applications on page load
// //   // Load saved scholarships and applications on page load
// //   useEffect(() => {
// //     const storedScholarships = JSON.parse(
// //       localStorage.getItem("savedScholarships") || "[]"
// //     );
// //     setSavedScholarships(storedScholarships);

// //     const storedApplications = JSON.parse(
// //       localStorage.getItem("savedApplications") || "[]"
// //     );
// //     setSavedApplications(storedApplications);
// //   }, []);

// //   // Scholarship Data
// //   const scholarships = [
// //     {
// //       id: "arizona-excellence",
// //       name: "Arizona Excellence Scholarship",
// //       description:
// //         "Awarded to outstanding students demonstrating academic excellence.",
// //     },
// //     {
// //       id: "engineering-general",
// //       name: "Engineering General Scholarship",
// //       description:
// //         "Scholarship for students pursuing degrees in engineering disciplines.",
// //     },
// //     {
// //       id: "continuing-undergrad",
// //       name: "Continuing Undergraduate Scholarship",
// //       description:
// //         "For current undergraduates who have demonstrated continued academic success.",
// //     },
// //     {
// //       id: "ua-foundation",
// //       name: "UA Foundation Scholarship",
// //       description:
// //         "Funded by the UA Foundation to support student success across all majors.",
// //     },
// //     {
// //       id: "as-government",
// //       name: "Associated Student Government Scholarship",
// //       description:
// //         "Awarded to students who are actively engaged in student government and leadership.",
// //     },
// //     {
// //       id: "hispanic-alumni-club",
// //       name: "Hispanic Alumni Club Scholarship",
// //       description:
// //         "Supporting Hispanic and Latinx students in their pursuit of higher education.",
// //     },
// //   ];

// //   // Function to save a scholarship
// //   // const handleSaveScholarship = (scholarshipId: string) => {
// //   //   if (!savedScholarships.includes(scholarshipId)) {
// //   //     setSavedScholarships([...savedScholarships, scholarshipId]);
// //   //   }
// //   // };
// //   // Function to save a scholarship
// //   const handleSaveScholarship = (scholarshipId: string) => {
// //     if (!savedScholarships.includes(scholarshipId)) {
// //       const updatedScholarships = [...savedScholarships, scholarshipId];
// //       setSavedScholarships(updatedScholarships);
// //       localStorage.setItem(
// //         "savedScholarships",
// //         JSON.stringify(updatedScholarships)
// //       );
// //     }
// //   };

// //   // Function to unsave a scholarship
// //   // const handleUnsaveScholarship = (scholarshipId: string) => {
// //   //   setSavedScholarships(savedScholarships.filter(id => id !== scholarshipId));
// //   // };
// //   // Function to unsave a scholarship
// //   const handleUnsaveScholarship = (scholarshipId: string) => {
// //     const updatedScholarships = savedScholarships.filter(
// //       (id) => id !== scholarshipId
// //     );
// //     setSavedScholarships(updatedScholarships);
// //     localStorage.setItem(
// //       "savedScholarships",
// //       JSON.stringify(updatedScholarships)
// //     );
// //   };

// //   // Function to delete application
// //   const handleDeleteApplication = (scholarshipId: string) => {
// //     const updatedApplications = savedApplications.filter(
// //       (app) => app.scholarshipId !== scholarshipId
// //     );
// //     setSavedApplications(updatedApplications);
// //     localStorage.setItem(
// //       "savedApplications",
// //       JSON.stringify(updatedApplications)
// //     );
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col">
// //       {/* Top Header */}
// //       <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center space-x-4">
// //             <img
// //               src="/images/ua-logo.png"
// //               alt="UA Logo"
// //               className="h-10 w-auto"
// //             />
// //             <h1 className="text-xl font-bold">UASAMS</h1>
// //           </div>
// //           <nav className="flex items-center space-x-4">
// //             <div className="flex items-center space-x-2">
// //               <select
// //                 className="text-black px-2 py-1 rounded"
// //                 defaultValue="I am"
// //               >
// //                 <option>I am</option>
// //                 <option>Student</option>
// //                 <option>Faculty</option>
// //                 <option>Admin</option>
// //               </select>
// //               <button className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition">
// //                 Go
// //               </button>
// //             </div>
// //             <button className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition">
// //               Sign Out
// //             </button>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Main Content Layout */}
// //       <div className="flex flex-1">
// //         {/* Left Sidebar */}
// //         <aside className="w-1/4 bg-white shadow-md p-6">
// //           <h3 className="text-lg font-semibold mb-4">Menu</h3>
// //           <ul className="space-y-4">
// //             <li>
// //               <button
// //                 className={`w-full text-left px-3 py-2 rounded ${
// //                   selectedOption === "quick-apply"
// //                     ? "bg-gray-200"
// //                     : "hover:bg-gray-100"
// //                 }`}
// //                 onClick={() => setSelectedOption("quick-apply")}
// //               >
// //                 Quick Apply Scholarships
// //               </button>
// //             </li>
// //             <li>
// //               <button
// //                 className={`w-full text-left px-3 py-2 rounded ${
// //                   selectedOption === "saved-scholarships"
// //                     ? "bg-gray-200"
// //                     : "hover:bg-gray-100"
// //                 }`}
// //                 onClick={() => setSelectedOption("saved-scholarships")}
// //               >
// //                 Saved Scholarships
// //               </button>
// //             </li>
// //             <li>
// //               <button
// //                 className={`w-full text-left px-3 py-2 rounded ${
// //                   selectedOption === "my-applications"
// //                     ? "bg-gray-200"
// //                     : "hover:bg-gray-100"
// //                 }`}
// //                 onClick={() => setSelectedOption("my-applications")}
// //               >
// //                 My Applications
// //               </button>
// //             </li>
// //             <li>
// //               <button
// //                 className="w-full text-left px-3 py-2 rounded bg-[#0C234B] text-white hover:bg-blue-700 transition"
// //                 onClick={() => router.push("/Dashboard")}
// //               >
// //                 Go to Dashboard
// //               </button>
// //             </li>
// //           </ul>
// //         </aside>

// //         {/* Right Content */}
// //         <main className="w-3/4 p-6">
// //           <h2 className="text-2xl font-semibold mb-6 text-center">
// //             Apply for Scholarships
// //           </h2>

// //           {/* Quick Apply Scholarships */}
// //           {selectedOption === "quick-apply" && (
// //             <div className="space-y-6">
// //               {scholarships.map((scholarship) => {
// //                 const application = savedApplications.find(
// //                   (app) => app.scholarshipId === scholarship.id
// //                 );

// //                 return (
// //                   !savedScholarships.includes(scholarship.id) && (
// //                     <div
// //                       key={scholarship.id}
// //                       className="bg-white rounded-lg shadow-md p-6 flex flex-col"
// //                     >
// //                       <h3 className="text-lg font-bold mb-2">
// //                         {scholarship.name}
// //                       </h3>
// //                       <p className="text-gray-700 mb-4">
// //                         {scholarship.description}
// //                       </p>
// //                       <div className="flex space-x-3">
// //                         {application ? (
// //                           <button
// //                             className="bg-green-500 text-white py-1.5 px-3 rounded hover:bg-green-700 transition text-sm"
// //                             onClick={() =>
// //                               router.push(
// //                                 `/Application?scholarshipId=${scholarship.id}`
// //                               )
// //                             }
// //                           >
// //                             View/Edit
// //                           </button>
// //                         ) : (
// //                           <button
// //                             className="bg-[#0C234B] text-white py-1.5 px-3 rounded hover:bg-blue-900 transition text-sm"
// //                             onClick={() =>
// //                               router.push(
// //                                 `/Application?scholarshipId=${scholarship.id}`
// //                               )
// //                             }
// //                           >
// //                             Quick Apply
// //                           </button>
// //                         )}
// //                         <button
// //                           className="bg-gray-300 text-black py-1.5 px-3 rounded hover:bg-gray-400 transition text-sm"
// //                           onClick={() => handleSaveScholarship(scholarship.id)}
// //                         >
// //                           Save Scholarship
// //                         </button>
// //                       </div>
// //                     </div>
// //                   )
// //                 );
// //               })}
// //             </div>
// //           )}

// //           {/* Saved Scholarships */}
// //           {selectedOption === "saved-scholarships" && (
// //             <div className="space-y-6">
// //               {savedScholarships.length > 0 ? (
// //                 savedScholarships.map((scholarshipId) => {
// //                   const scholarship = scholarships.find(
// //                     (s) => s.id === scholarshipId
// //                   );
// //                   const application = savedApplications.find(
// //                     (app) => app.scholarshipId === scholarshipId
// //                   );

// //                   return scholarship ? (
// //                     <div
// //                       key={scholarship.id}
// //                       className="bg-white rounded-lg shadow-md p-6 flex flex-col"
// //                     >
// //                       <h3 className="text-lg font-bold mb-2">
// //                         {scholarship.name}
// //                       </h3>
// //                       <p className="text-gray-700 mb-4">
// //                         {scholarship.description}
// //                       </p>
// //                       <div className="flex space-x-3">
// //                         {application ? (
// //                           <button
// //                             className="bg-green-500 text-white py-1.5 px-3 rounded hover:bg-green-700 transition text-sm"
// //                             onClick={() =>
// //                               router.push(
// //                                 `/Application?scholarshipId=${scholarship.id}`
// //                               )
// //                             }
// //                           >
// //                             View/Edit
// //                           </button>
// //                         ) : (
// //                           <button
// //                             className="bg-[#0C234B] text-white py-1.5 px-3 rounded hover:bg-blue-900 transition text-sm"
// //                             onClick={() =>
// //                               router.push(
// //                                 `/Application?scholarshipId=${scholarship.id}`
// //                               )
// //                             }
// //                           >
// //                             Quick Apply
// //                           </button>
// //                         )}
// //                         <button
// //                           className="bg-red-500 text-white py-1.5 px-3 rounded hover:bg-red-700 transition text-sm"
// //                           onClick={() =>
// //                             handleUnsaveScholarship(scholarship.id)
// //                           }
// //                         >
// //                           Unsave Scholarship
// //                         </button>
// //                       </div>
// //                     </div>
// //                   ) : null;
// //                 })
// //               ) : (
// //                 <p className="text-center text-gray-700">
// //                   No scholarships saved yet.
// //                 </p>
// //               )}
// //             </div>
// //           )}

// //           {/* My Applications Section */}
// //           {selectedOption === "my-applications" && (
// //             <div className="space-y-6">
// //               {savedApplications.length > 0 ? (
// //                 savedApplications.map((application, index) => (
// //                   <div
// //                     key={index}
// //                     className="bg-white rounded-lg shadow-md p-6 flex flex-col"
// //                   >
// //                     <h3 className="text-lg font-bold mb-2">
// //                       {scholarships.find(
// //                         (s) => s.id === application.scholarshipId
// //                       )?.name || "Unknown Scholarship"}
// //                       &nbsp;Application
// //                     </h3>
// //                     <p className="text-gray-700 mb-4">
// //                       Application Status: {application.status}
// //                     </p>
// //                     <div className="flex space-x-3">
// //                       <button
// //                         className="bg-[#0C234B] text-white py-1.5 px-3 rounded hover:bg-blue-900 transition text-sm"
// //                         onClick={() =>
// //                           router.push(
// //                             `/Application?scholarshipId=${application.scholarshipId}`
// //                           )
// //                         }
// //                       >
// //                         View/Edit
// //                       </button>
// //                       <button
// //                         className="bg-red-500 text-white py-1.5 px-3 rounded hover:bg-red-700 transition text-sm"
// //                         onClick={() =>
// //                           handleDeleteApplication(application.scholarshipId)
// //                         }
// //                       >
// //                         Delete
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <p className="text-center text-gray-700">
// //                   No saved or submitted applications yet.
// //                 </p>
// //               )}
// //             </div>
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// // Define validation schema
// const applicationSchema = z.object({
//   fullName: z.string().min(1, "Full name is required"),
//   pronoun: z.string().optional(),
//   studentID: z.string().min(1, "Student ID is required"),
//   major: z.string().min(1, "Major is required"),
//   minor: z.string().optional(),
//   gpa: z.string().min(1, "GPA is required"),
//   currentYear: z.string().min(1, "Current year is required"),
//   ethnicity: z.string().min(1, "Ethnicity is required"),
//   personalStatement: z.string().min(1, "Personal statement is required"),
//   workExperience: z.string().optional(),
//   scholarshipId: z.string(),
//   status: z.string(),
// });

// type ApplicationFormData = z.infer<typeof applicationSchema>;

// export default function ApplicationForm({ scholarshipId }: { scholarshipId: string }) {
//   const router = useRouter();
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<ApplicationFormData>({
//     resolver: zodResolver(applicationSchema),
//     defaultValues: {
//       fullName: "",
//       pronoun: "",
//       studentID: "",
//       major: "",
//       minor: "",
//       gpa: "",
//       currentYear: "",
//       ethnicity: "",
//       personalStatement: "",
//       workExperience: "",
//       scholarshipId,
//       status: "In Progress",
//     },
//   });

//   // Load saved application if available
//   useEffect(() => {
//     const savedApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
//     const existingApp = savedApplications.find(
//       (app: ApplicationFormData) => app.scholarshipId === scholarshipId
//     );
//     if (existingApp) {
//       form.reset(existingApp);
//     }
//   }, [scholarshipId, form]);

//   // Save application progress locally
//   const saveApplicationLocally = (data: ApplicationFormData, isSubmitted: boolean) => {
//     const savedApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
//     const updatedApplication = { ...data, status: isSubmitted ? "Submitted" : "In Progress" };
//     const existingIndex = savedApplications.findIndex(
//       (app: ApplicationFormData) => app.scholarshipId === scholarshipId
//     );
//     if (existingIndex !== -1) {
//       savedApplications[existingIndex] = updatedApplication;
//     } else {
//       savedApplications.push(updatedApplication);
//     }
//     localStorage.setItem("savedApplications", JSON.stringify(savedApplications));
//   };

//   // Submit application to backend
//   const submitApplication = async (data: ApplicationFormData) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const res = await fetch("http://127.0.0.1:8000/api/applications/", {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.detail || "Submission failed");
//       }
//       return res;
//     } catch (err: any) {
//       throw new Error(err.message);
//     }
//   };

//   // Handle final submission
//   const onSubmit = async (data: ApplicationFormData) => {
//     setError("");
//     setIsSubmitting(true);
//     try {
//       await submitApplication(data);
//       saveApplicationLocally(data, true);
//       router.push("/Submitted");
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle save progress
//   const handleSaveProgress = () => {
//     const formData = form.getValues();
//     saveApplicationLocally(formData, false);
//     alert("Application progress saved!");
//     router.push("/SavedProgress");
//   };

//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl mx-auto my-8">
//       <h2 className="text-2xl font-bold text-center text-[#0C234B] mb-6">Application Form</h2>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      
//       <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
//         {[
//           { label: "Full Name", name: "fullName", required: true },
//           { label: "Preferred Pronoun", name: "pronoun" },
//           { label: "Student ID", name: "studentID", required: true },
//           { label: "Major", name: "major", required: true },
//           { label: "Minor", name: "minor" },
//           { label: "Cumulative GPA", name: "gpa", required: true },
//           { label: "Current Year", name: "currentYear", required: true },
//           { label: "Ethnicity", name: "ethnicity", required: true },
//           { label: "Work Experience", name: "workExperience" },
//         ].map(({ label, name, required }) => (
//           <div key={name}>
//             <label className="block font-semibold">
//               {label} {required && "*"}
//             </label>
//             <input
//               {...form.register(name as keyof ApplicationFormData)}
//               className="w-full p-2 border rounded-lg focus:ring-[#0C234B]"
//             />
//             {form.formState.errors[name as keyof ApplicationFormData] && (
//               <p className="text-red-500 text-sm mt-1">
//                 {form.formState.errors[name as keyof ApplicationFormData]?.message}
//               </p>
//             )}
//           </div>
//         ))}

//         <div className="flex flex-col">
//           <label className="block font-semibold">Personal Statement *</label>
//           <textarea
//             {...form.register("personalStatement")}
//             className="w-full p-2 border rounded-lg"
//             rows={4}
//           ></textarea>
//           {form.formState.errors.personalStatement && (
//             <p className="text-red-500 text-sm mt-1">
//               {form.formState.errors.personalStatement.message}
//             </p>
//           )}
//         </div>

//         <div className="flex justify-between mt-6">
//           <button
//             type="button"
//             className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//             onClick={handleSaveProgress}
//             disabled={isSubmitting}
//           >
//             Save Progress
//           </button>
//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  role: "admin" | "reviewer" | "donor" | "applicant";
  requested_role?: "reviewer" | "donor" | "applicant";
  role_approved?: boolean;
}

export default function UserEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch user data
  useEffect(() => {
    if (!id) return;
    
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await fetch(`http://127.0.0.1:8000/api/accounts/users/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load user");
        }

        const data: User = await response.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // Update user
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setError("");
    setSuccess("");
    
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`http://127.0.0.1:8000/api/accounts/users/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      setSuccess("User updated successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Delete user
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`http://127.0.0.1:8000/api/accounts/users/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setSuccess("User deleted successfully!");
      setTimeout(() => router.push("/users"), 1500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Approve role request
  const handleApproveRole = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`http://127.0.0.1:8000/api/accounts/role-requests/${id}/approve/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Role approval failed");
      }

      setUser(prev => prev ? { ...prev, role_approved: true } : null);
      setSuccess("Role request approved successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#AB0520]"></div>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center p-8">User not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
      <h1 className="text-2xl font-bold text-[#0C234B] mb-6">Edit User</h1>
      
      {error && <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-[#0C234B]">Username</label>
          <input
            type="text"
            value={user.username}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium text-[#0C234B]">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium text-[#0C234B]">First Name</label>
          <input
            type="text"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium text-[#0C234B]">Last Name</label>
          <input
            type="text"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium text-[#0C234B]">Phone</label>
          <input
            type="text"
            value={user.phone || ""}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium text-[#0C234B]">Role</label>
          <select
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value as User["role"] })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="applicant">Applicant</option>
            <option value="reviewer">Reviewer</option>
            <option value="donor">Donor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {user.requested_role && !user.role_approved && (
          <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
            <p className="text-[#0C234B]">
              Pending role request: <strong>{user.requested_role}</strong>
            </p>
            <button
              type="button"
              onClick={handleApproveRole}
              className="mt-2 bg-[#0C234B] text-white px-4 py-2 rounded-md hover:bg-[#1A3A8F]"
            >
              Approve Request
            </button>
          </div>
        )}

        <div className="flex justify-between pt-6">
          <div className="space-x-4">
            <button
              type="button"
              onClick={() => router.push("/users")}
              className="px-4 py-2 border border-gray-300 rounded-md text-[#0C234B] hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#AB0520] text-white rounded-md hover:bg-[#8B0015]"
            >
              Save Changes
            </button>
          </div>
          
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete User
          </button>
        </div>
      </form>

      <div className="mt-6">
        <button
          onClick={() => router.push(`/users/${id}/history`)}
          className="w-full px-4 py-2 bg-[#0C234B] text-white rounded-md hover:bg-[#1A3A8F]"
        >
          View Change History
        </button>
      </div>
    </div>
  );
}