// "use client";

// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// type ApplicationFormData = {
//   fullName: string;
//   pronoun?: string;
//   studentID: string;
//   major: string;
//   minor?: string;
//   gpa: string;
//   currentYear: string;
//   ethnicity: string;
//   personalStatement: string;
//   workExperience?: string;
//   scholarshipId: string;
//   status: string; // Added status field
// };

// export default function ApplicationForm({
//   scholarshipId,
// }: {
//   scholarshipId: string;
// }) {
//   const router = useRouter();
//   const form = useForm<ApplicationFormData>({
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
//       scholarshipId, // Pre-fill with the scholarshipId
//       status: "In Progress", // Default status
//     },
//   });

//   // Load saved application if available
//   useEffect(() => {
//     const savedApplications = JSON.parse(
//       localStorage.getItem("savedApplications") || "[]"
//     );
//     const existingApp = savedApplications.find(
//       (app: ApplicationFormData) => app.scholarshipId === scholarshipId
//     );
//     if (existingApp) {
//       form.reset(existingApp);
//     }
//   }, [scholarshipId, form]);

//   // Function to save application
//   const saveApplication = (data: ApplicationFormData, isSubmitted: boolean) => {
//     const savedApplications = JSON.parse(
//       localStorage.getItem("savedApplications") || "[]"
//     );
//     const existingIndex = savedApplications.findIndex(
//       (app: ApplicationFormData) => app.scholarshipId === scholarshipId
//     );

//     const updatedApplication = {
//       ...data,
//       status: isSubmitted ? "Submitted" : "In Progress",
//     };

//     if (existingIndex !== -1) {
//       savedApplications[existingIndex] = updatedApplication;
//     } else {
//       savedApplications.push(updatedApplication);
//     }

//     localStorage.setItem(
//       "savedApplications",
//       JSON.stringify(savedApplications)
//     );
//   };

//   // Handle form submission (Submit button)
//   const onSubmit = (data: ApplicationFormData) => {
//     saveApplication(data, true);
//     router.push("/Submitted");
//   };

//   // Handle save progress button
//   //   const handleSaveProgress = () => {
//   //     const formData = form.getValues();
//   //     saveApplication(formData, false);
//   //     alert("Application progress saved!");
//   //     router.push("/SavedProgress");
//   //   };
//   const handleSaveProgress = () => {
//     const formData = form.getValues();
//     saveApplication(formData, false);
//     router.push("/SavedProgress");
//   };

//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
//       <h2 className="text-2xl font-bold text-center text-[#0C234B] mb-6">
//         Application Form
//       </h2>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="grid grid-cols-1 gap-4"
//       >
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
//               {label}
//               {required && " *"}
//             </label>
//             <input
//               {...form.register(
//                 name as keyof ApplicationFormData,
//                 required ? { required: true } : {}
//               )}
//               className="w-full p-2 border rounded-lg focus:ring-[#0C234B]"
//             />
//           </div>
//         ))}

//         <div className="flex flex-col">
//           <label className="block font-semibold">Personal Statement *</label>
//           <textarea
//             {...form.register("personalStatement", { required: true })}
//             className="w-full p-2 border rounded-lg"
//             rows={4}
//           ></textarea>
//         </div>

//         <div className="flex justify-between mt-6">
//           <button
//             type="button"
//             className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//             onClick={handleSaveProgress}
//           >
//             Save Progress
//           </button>
//           <button
//             type="submit"
//             className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// // "use client";

// // import { useForm } from "react-hook-form";
// // import { useRouter } from "next/navigation";
// // import { useEffect } from "react";

// // type ApplicationFormData = {
// //   fullName: string;
// //   pronoun?: string;
// //   studentID: string;
// //   major: string;
// //   minor?: string;
// //   gpa: string;
// //   currentYear: string;
// //   ethnicity: string;
// //   personalStatement: string;
// //   workExperience?: string;
// //   scholarshipId: string; // Add scholarship ID to associate applications with scholarships
// // };

// // export default function ApplicationForm({ scholarshipId }: { scholarshipId: string }) {
// //   const router = useRouter();
// //   const form = useForm<ApplicationFormData>({
// //     defaultValues: {
// //       fullName: "",
// //       pronoun: "",
// //       studentID: "",
// //       major: "",
// //       minor: "",
// //       gpa: "",
// //       currentYear: "",
// //       ethnicity: "",
// //       personalStatement: "",
// //       workExperience: "",
// //       scholarshipId, // Pre-fill with the scholarshipId
// //     },
// //   });

// //   // Load saved application if available
// //   useEffect(() => {
// //     const savedApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
// //     const existingApp = savedApplications.find((app: ApplicationFormData) => app.scholarshipId === scholarshipId);
// //     if (existingApp) {
// //       form.reset(existingApp);
// //     }
// //   }, [scholarshipId, form]);

// //   // Function to save application
// //   const saveApplication = (data: ApplicationFormData, isSubmitted: boolean) => {
// //     const savedApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");

// //     // Check if application already exists
// //     //const existingIndex = savedApplications.findIndex((app: ApplicationFormData) => app.scholarshipId === scholarshipId);
// //     const existingIndex = savedApplications.findIndex((app: ApplicationFormData) => app.scholarshipId === scholarshipId);

// //     if (existingIndex !== -1) {
// //       savedApplications[existingIndex] = { ...data, isSubmitted };
// //     } else {
// //       savedApplications.push({ ...data, isSubmitted });
// //     }

// //     localStorage.setItem("savedApplications", JSON.stringify(savedApplications));
// //   };

// //   // Handle form submission (Submit button)
// //   const onSubmit = (data: ApplicationFormData) => {
// //     saveApplication(data, true);
// //     router.push("/Submitted");
// //   };

// //   // Handle save progress button
// //   const handleSaveProgress = () => {
// //     const formData = form.getValues();
// //     saveApplication(formData, false);
// //     alert("Application progress saved!");
// //   };

// //   return (
// //     <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
// //       <h2 className="text-2xl font-bold text-center text-[#0C234B] mb-6">Application Form</h2>
// //       <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
// //         {[
// //           { label: "Full Name", name: "fullName", required: true },
// //           { label: "Preferred Pronoun", name: "pronoun" },
// //           { label: "Student ID", name: "studentID", required: true },
// //           { label: "Major", name: "major", required: true },
// //           { label: "Minor", name: "minor" },
// //           { label: "Cumulative GPA", name: "gpa", required: true },
// //           { label: "Current Year", name: "currentYear", required: true },
// //           { label: "Ethnicity", name: "ethnicity", required: true },
// //           { label: "Work Experience", name: "workExperience" },
// //         ].map(({ label, name, required }) => (
// //           <div key={name}>
// //             <label className="block font-semibold">{label}{required && " *"}</label>
// //             <input
// //               {...form.register(name as keyof ApplicationFormData, required ? { required: true } : {})}
// //               className="w-full p-2 border rounded-lg focus:ring-[#0C234B]"
// //             />
// //           </div>
// //         ))}

// //         <div className="flex flex-col">
// //           <label className="block font-semibold">Personal Statement *</label>
// //           <textarea {...form.register("personalStatement", { required: true })} className="w-full p-2 border rounded-lg" rows={4}></textarea>
// //         </div>

// //         <div className="flex justify-between mt-6">
// //           <button
// //             type="button"
// //             className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
// //             onClick={handleSaveProgress}
// //           >
// //             Save Progress
// //           </button>
// //           <button
// //             type="submit"
// //             className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useForm } from "react-hook-form";
// // import { useRouter } from "next/navigation";
// // import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

// // type ApplicationFormData = {
// //   fullName: string;
// //   pronoun?: string;
// //   studentID: string;
// //   major: string;
// //   minor?: string;
// //   gpa: string;
// //   currentYear: string;
// //   ethnicity: string;
// //   personalStatement: string;
// //   workExperience?: string;
// // };

// // export default function ApplicationForm() {
// //   const router = useRouter();
// //   const form = useForm<ApplicationFormData>({
// //     defaultValues: {
// //       fullName: "",
// //       pronoun: "",
// //       studentID: "",
// //       major: "",
// //       minor: "",
// //       gpa: "",
// //       currentYear: "",
// //       ethnicity: "",
// //       personalStatement: "",
// //       workExperience: "",
// //     },
// //   });

// //   const onSubmit = (data: ApplicationFormData) => {
// //     console.log("Form Submitted:", data);
// //     router.push("/Submitted");
// //   };

// //   return (
// //     <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
// //       <h2 className="text-2xl font-bold text-center text-[#0C234B] mb-6">Application Form</h2>
// //       <Form {...form}>
// //         <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
// //           {[
// //             { label: "Full Name", name: "fullName", required: true },
// //             { label: "Preferred Pronoun", name: "pronoun" },
// //             { label: "Student ID", name: "studentID", required: true },
// //             { label: "Major", name: "major", required: true },
// //             { label: "Minor", name: "minor" },
// //             { label: "Cumulative GPA", name: "gpa", required: true },
// //             { label: "Current Year", name: "currentYear", required: true },
// //             { label: "Ethnicity", name: "ethnicity", required: true },
// //             { label: "Work Experience", name: "workExperience" },
// //           ].map(({ label, name, required }) => (
// //             <FormField
// //               key={name}
// //               name={name as keyof ApplicationFormData}
// //               rules={required ? { required: "This field is required" } : {}}
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>{label}{required && " *"}</FormLabel>
// //                   <FormControl>
// //                     <input
// //                       type="text"
// //                       {...field}
// //                       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C234B]"
// //                     />
// //                   </FormControl>
// //                   <FormMessage />
// //                 </FormItem>
// //               )}
// //             />
// //           ))}

// //           {/* Personal Statement */}
// //           <FormField
// //             name="personalStatement"
// //             rules={{ required: "This field is required" }}
// //             render={({ field }) => (
// //               <FormItem>
// //                 <FormLabel>Personal Statement *</FormLabel>
// //                 <FormControl>
// //                   <textarea
// //                     {...field}
// //                     className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C234B]"
// //                     rows={4}
// //                   />
// //                 </FormControl>
// //                 <FormMessage />
// //               </FormItem>
// //             )}
// //           />

// //           {/* Buttons */}
// //           <div className="flex justify-between mt-6">
// //             <button
// //               type="button"
// //               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
// //             >
// //               Save Progress
// //             </button>
// //             <button
// //               type="submit"
// //               className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </Form>
// //     </div>
// //   );
// // }
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ApplicationFormData = {
  fullName: string;
  pronoun?: string;
  studentID: string;
  major: string;
  minor?: string;
  gpa: string;
  currentYear: string;
  ethnicity: string;
  personalStatement: string;
  workExperience?: string;
  scholarshipId: string;
  // Optional: status to track application state
  status: string;
};

export default function ApplicationForm({ scholarshipId }: { scholarshipId: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const form = useForm<ApplicationFormData>({
    defaultValues: {
      fullName: "",
      pronoun: "",
      studentID: "",
      major: "",
      minor: "",
      gpa: "",
      currentYear: "",
      ethnicity: "",
      personalStatement: "",
      workExperience: "",
      scholarshipId, // Pre-fill with scholarshipId passed as prop
      status: "In Progress", // Default status
    },
  });

  // Load saved application if available (for progress saving)
  useEffect(() => {
    const savedApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
    const existingApp = savedApplications.find(
      (app: ApplicationFormData) => app.scholarshipId === scholarshipId
    );
    if (existingApp) {
      form.reset(existingApp);
    }
  }, [scholarshipId, form]);

  // Function to save application progress locally
  const saveApplicationLocally = (data: ApplicationFormData, isSubmitted: boolean) => {
    const savedApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
    const updatedApplication = { ...data, status: isSubmitted ? "Submitted" : "In Progress" };
    const existingIndex = savedApplications.findIndex(
      (app: ApplicationFormData) => app.scholarshipId === scholarshipId
    );
    if (existingIndex !== -1) {
      savedApplications[existingIndex] = updatedApplication;
    } else {
      savedApplications.push(updatedApplication);
    }
    localStorage.setItem("savedApplications", JSON.stringify(savedApplications));
  };

  // Function to submit application to backend API
  const submitApplication = async (data: ApplicationFormData) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Submission failed");
      }
      return res;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  // Handle final submission
  const onSubmit = async (data: ApplicationFormData) => {
    setError("");
    try {
      await submitApplication(data);
      saveApplicationLocally(data, true); // Save progress as submitted
      router.push("/Submitted");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Handle save progress (without final submission)
  const handleSaveProgress = () => {
    const formData = form.getValues();
    saveApplicationLocally(formData, false);
    alert("Application progress saved!");
    router.push("/SavedProgress");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-center text-[#0C234B] mb-6">Application Form</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
        {[
          { label: "Full Name", name: "fullName", required: true },
          { label: "Preferred Pronoun", name: "pronoun" },
          { label: "Student ID", name: "studentID", required: true },
          { label: "Major", name: "major", required: true },
          { label: "Minor", name: "minor" },
          { label: "Cumulative GPA", name: "gpa", required: true },
          { label: "Current Year", name: "currentYear", required: true },
          { label: "Ethnicity", name: "ethnicity", required: true },
          { label: "Work Experience", name: "workExperience" },
        ].map(({ label, name, required }) => (
          <div key={name}>
            <label className="block font-semibold">
              {label} {required && "*"}
            </label>
            <input
              {...form.register(name as keyof ApplicationFormData, required ? { required: true } : {})}
              className="w-full p-2 border rounded-lg focus:ring-[#0C234B]"
            />
          </div>
        ))}
        <div className="flex flex-col">
          <label className="block font-semibold">Personal Statement *</label>
          <textarea
            {...form.register("personalStatement", { required: true })}
            className="w-full p-2 border rounded-lg"
            rows={4}
          ></textarea>
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            onClick={handleSaveProgress}
          >
            Save Progress
          </button>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}