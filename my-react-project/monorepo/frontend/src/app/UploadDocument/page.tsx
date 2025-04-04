// // src/app/UploadDocument/page.tsx

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // NEW

// export default function UploadDocumentPage() {
//   const router = useRouter(); // NEW
//   const [selectedOption, setSelectedOption] = useState("upload-documents");

//   const getSavedFiles = () => {
//     if (typeof window !== "undefined") {
//       return JSON.parse(localStorage.getItem("uploadedFiles") || "{}");
//     }
//     return {};
//   };

//   const [files, setFiles] = useState<{ [key: string]: string }>(
//     getSavedFiles()
//   );

//   useEffect(() => {
//     setFiles(getSavedFiles());
//   }, []);

//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     fileType: string
//   ) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const updatedFiles = { ...files, [fileType]: file.name };
//       setFiles(updatedFiles);
//       localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
//     }
//   };

//   const handleDelete = (fileType: string) => {
//     const updatedFiles = { ...files };
//     delete updatedFiles[fileType];
//     setFiles(updatedFiles);
//     localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Top Header */}
//       <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <img
//               src="/images/ua-logo.png"
//               alt="UA Logo"
//               className="h-10 w-auto"
//             />
//             <h1 className="text-xl font-bold">UASAMS</h1>
//           </div>
//           <nav className="flex items-center space-x-4">
//             <button className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition">
//               Sign Out
//             </button>
//           </nav>
//         </div>
//       </header>

//       <div className="flex flex-1">
//         {/* Left Sidebar */}
//         <aside className="w-1/4 bg-white shadow-md p-6">
//           <h3 className="text-lg font-semibold mb-4">Menu</h3>
//           <ul className="space-y-4">
//             <li>
//               <button
//                 className={`w-full text-left px-3 py-2 rounded ${
//                   selectedOption === "upload-documents"
//                     ? "bg-gray-200"
//                     : "hover:bg-gray-100"
//                 }`}
//                 onClick={() => setSelectedOption("upload-documents")}
//               >
//                 Upload Documents
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`w-full text-left px-3 py-2 rounded ${
//                   selectedOption === "my-documents"
//                     ? "bg-gray-200"
//                     : "hover:bg-gray-100"
//                 }`}
//                 onClick={() => setSelectedOption("my-documents")}
//               >
//                 My Documents
//               </button>
//             </li>
//             <li>
//               <button
//                 className="w-full text-left px-3 py-2 rounded bg-[#0C234B] text-white hover:bg-blue-700 transition"
//                 onClick={() => router.push("/Dashboard")}
//               >
//                 Go to Dashboard
//               </button>
//             </li>
//           </ul>
//         </aside>

//         {/* Right Content */}
//         <main className="w-3/4 p-6">
//           {selectedOption === "upload-documents" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-6 text-center">
//                 Upload Documents
//               </h2>
//               <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-2xl">
//                 <div className="space-y-4">
//                   {[
//                     { label: "Application", key: "application" },
//                     { label: "Essay", key: "essay" },
//                     {
//                       label: "Letter of Recommendation",
//                       key: "recommendation",
//                     },
//                     { label: "Transcript", key: "transcript" },
//                     { label: "Resume", key: "resume" },
//                   ].map(({ label, key }) => (
//                     <div key={key} className="flex flex-col">
//                       <label className="font-semibold text-gray-700">
//                         {label}:
//                       </label>
//                       <input
//                         type="file"
//                         onChange={(e) => handleFileChange(e, key)}
//                         className="border rounded p-2 mt-1"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {selectedOption === "my-documents" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-6 text-center">
//                 My Documents
//               </h2>
//               <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-2xl">
//                 {/* Show message if no documents are uploaded */}
//                 {Object.keys(files).length === 0 ? (
//                   <p className="text-center text-gray-500">
//                     You currently have no documents uploaded.
//                   </p>
//                 ) : (
//                   <ul className="space-y-4">
//                     {Object.entries(files).map(([key, filename]) => (
//                       <li
//                         key={key}
//                         className="flex justify-between border-b py-2"
//                       >
//                         <span className="font-semibold text-gray-700 capitalize">
//                           {key.replace("-", " ")}:
//                         </span>
//                         <span className="text-gray-500">
//                           {filename || "No document uploaded"}
//                         </span>
//                         {filename && (
//                           <button
//                             onClick={() => handleDelete(key)}
//                             className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
//                           >
//                             Delete
//                           </button>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UploadDocumentPage() {
  const router = useRouter();
  // Define files as a Record where keys are strings and values are strings.
  const [files, setFiles] = useState<Record<string, string>>({});

  // Function to upload file to backend using FormData
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType: string
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/documents/upload/`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) {
        console.error("Upload failed");
        return;
      }
      const data = await res.json();
      // Update files state using correct type
      setFiles((prev: Record<string, string>) => ({
        ...prev,
        [fileType]: data.file || file.name,
      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleDelete = (fileType: string) => {
    setFiles((prev: Record<string, string>) => {
      const updatedFiles = { ...prev };
      delete updatedFiles[fileType];
      return updatedFiles;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/images/ua-logo.png" alt="UA Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-bold">UASAMS</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <button
              className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition"
              onClick={() => {
                localStorage.removeItem("authToken");
                router.push("/login");
              }}
            >
              Sign Out
            </button>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-1/4 bg-white shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-4">
            <li>
              <button
                className="w-full text-left px-3 py-2 rounded bg-[#0C234B] text-white hover:bg-blue-700 transition"
                onClick={() => router.push("/Dashboard")}
              >
                Home
              </button>
            </li>
          </ul>
        </aside>

        {/* Right Content */}
        <main className="w-3/4 p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Upload Documents</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-2xl">
            {[
              { label: "Application", key: "application" },
              { label: "Essay", key: "essay" },
              { label: "Letter of Recommendation", key: "recommendation" },
              { label: "Transcript", key: "transcript" },
              { label: "Resume", key: "resume" },
            ].map(({ label, key }) => (
              <div key={key} className="flex flex-col mb-4">
                <label className="font-semibold text-gray-700">{label}:</label>
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e, key)}
                  className="border rounded p-2 mt-1"
                />
                {files[key] && (
                  <div className="mt-2 flex items-center">
                    <span className="text-gray-700 mr-2">
                      Uploaded: {files[key]}
                    </span>
                    <button
                      onClick={() => handleDelete(key)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}