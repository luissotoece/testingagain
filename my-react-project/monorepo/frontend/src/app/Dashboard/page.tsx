// // // // "use client";

// // // // import { useRouter } from "next/navigation";
// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // interface User {
// // // //   id: number;
// // // //   username: string;
// // // //   role: string;
// // // // }

// // // // export default function DashboardPage() {
// // // //   const router = useRouter();
// // // //   const [user, setUser] = useState<User | null>(null);
// // // //   const [savedScholarshipsCount, setSavedScholarshipsCount] = useState(0);
// // // //   const [inProgressApplicationsCount, setInProgressApplicationsCount] = useState(0);
// // // //   const [submittedApplicationsCount, setSubmittedApplicationsCount] = useState(0);

// // // //   useEffect(() => {
// // // //     // Fetch user details from the backend
// // // //     axios
// // // //       .get(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/me/`)
// // // //       .then((response) => setUser(response.data))
// // // //       .catch((error) => console.error("Error fetching user", error));

// // // //     // For demonstration, load some local counts from localStorage
// // // //     const savedScholarships = JSON.parse(localStorage.getItem("savedScholarships") || "[]");
// // // //     setSavedScholarshipsCount(savedScholarships.length);

// // // //     const allApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
// // // //     const inProgressApplications = allApplications.filter((app: any) => app.status === "In Progress");
// // // //     setInProgressApplicationsCount(inProgressApplications.length);
// // // //     const submittedApplications = allApplications.filter((app: any) => app.status === "Submitted");
// // // //     setSubmittedApplicationsCount(submittedApplications.length);
// // // //   }, []);

// // // //   if (!user) {
// // // //     return <p>Loading...</p>;
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 flex flex-col">
// // // //       {/* Top Red Bar */}
// // // //       <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
// // // //         <div className="flex items-center justify-between">
// // // //           {/* Left side: UA Logo and UASAMS */}
// // // //           <div className="flex items-center space-x-4">
// // // //             <img src="/images/ua-logo.png" alt="UA Logo" className="h-10 w-auto" />
// // // //             <h1 className="text-xl font-bold">UASAMS</h1>
// // // //           </div>
// // // //           {/* Right side: Navigation */}
// // // //           <nav className="flex items-center space-x-4">
// // // //             <button
// // // //               className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition"
// // // //               onClick={() => router.push("/login")}
// // // //             >
// // // //               Sign Out
// // // //             </button>
// // // //           </nav>
// // // //         </div>
// // // //       </header>

// // // //       {/* Main Content */}
// // // //       <main className="flex-1 p-6">
// // // //         <h2 className="text-2xl font-semibold mb-6 text-center">Your Dashboard</h2>

// // // //         {/* Role-based welcome message */}
// // // //         {user.role === "admin" && (
// // // //           <div className="mb-6 text-center">
// // // //             <p>Welcome, Admin. You have full access.</p>
// // // //             <a href="/admin/role-requests" className="text-blue-600 underline">
// // // //               Manage Role Requests
// // // //             </a>
// // // //           </div>
// // // //         )}
// // // //         {user.role === "reviewer" && (
// // // //           <div className="mb-6 text-center">
// // // //             <p>Welcome, Reviewer. Here are your review tasks.</p>
// // // //           </div>
// // // //         )}
// // // //         {user.role === "donor" && (
// // // //           <div className="mb-6 text-center">
// // // //             <p>Welcome, Donor. Here are your donation options.</p>
// // // //           </div>
// // // //         )}
// // // //         {user.role === "applicant" && (
// // // //           <div className="mb-6 text-center">
// // // //             <p>Welcome, Applicant. Here is your application dashboard.</p>
// // // //           </div>
// // // //         )}

// // // //         {/* Widgets Grid */}
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
// // // //           {/* Widget 1: Scholarship Deadline Countdown */}
// // // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // // //             <h3 className="text-lg font-bold mb-4">Scholarship Deadline Countdown</h3>
// // // //             <p className="text-gray-700 mb-6">
// // // //               Next deadline in <span className="font-semibold">12 days</span>.
// // // //             </p>
// // // //             <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// // // //               View Details
// // // //             </button>
// // // //           </div>

// // // //           {/* Widget 2: Application Progress Tracker */}
// // // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // // //             <h3 className="text-lg font-bold mb-4">Application Progress Tracker</h3>
// // // //             <p className="text-gray-700 mb-4">Overall Progress: 50%</p>
// // // //             <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-6">
// // // //               <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
// // // //               <circle
// // // //                 className="text-[#0C234B]"
// // // //                 strokeWidth="8"
// // // //                 strokeDasharray="251.2"
// // // //                 strokeDashoffset="125.6"
// // // //                 strokeLinecap="round"
// // // //                 stroke="green"
// // // //                 fill="transparent"
// // // //                 r="40"
// // // //                 cx="50"
// // // //                 cy="50"
// // // //               />
// // // //               <text x="50" y="55" textAnchor="middle" fill="#0C234B" fontSize="18" fontWeight="bold">
// // // //                 50%
// // // //               </text>
// // // //             </svg>
// // // //             <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// // // //               View Details
// // // //             </button>
// // // //           </div>

// // // //           {/* Widget 3: Saved Scholarships & Quick Apply */}
// // // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // // //             <h3 className="text-lg font-bold mb-4">Saved Scholarships & Quick Apply</h3>
// // // //             <p className="text-gray-700 mb-2">Saved Scholarships: {savedScholarshipsCount}</p>
// // // //             <p className="text-gray-700 mb-2">In Progress Applications: {inProgressApplicationsCount}</p>
// // // //             <p className="text-gray-700 mb-2">Submitted Applications: {submittedApplicationsCount}</p>
// // // //             <button
// // // //               className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// // // //               onClick={() => router.push("/Apply")}
// // // //             >
// // // //               Quick Apply
// // // //             </button>
// // // //           </div>

// // // //           {/* Widget 4: Document Checklist & Upload Status */}
// // // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // // //             <h3 className="text-lg font-bold mb-4">Document Checklist & Upload Status</h3>
// // // //             <ul className="list-disc list-inside text-gray-700 mb-6">
// // // //               <li>Transcript: Uploaded</li>
// // // //               <li>Essay: Pending</li>
// // // //               <li>Recommendation: Uploaded</li>
// // // //             </ul>
// // // //             <button
// // // //               className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// // // //               onClick={() => router.push("/UploadDocument")}
// // // //             >
// // // //               View Details
// // // //             </button>
// // // //           </div>

// // // //           {/* Widget 5: Daily Scholarship Fun Fact */}
// // // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // // //             <h3 className="text-lg font-bold mb-4">Daily Scholarship Fun Fact</h3>
// // // //             <p className="text-gray-700 mb-6">
// // // //               Fun Fact: Over <span className="font-semibold">X</span> scholarships go unclaimed each year.
// // // //             </p>
// // // //             <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// // // //               Learn More
// // // //             </button>
// // // //           </div>

// // // //           {/* Widget 6: Live Q&A with Financial Aid Experts */}
// // // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // // //             <h3 className="text-lg font-bold mb-4">Live Q&A with Financial Aid Experts</h3>
// // // //             <p className="text-gray-700 mb-6">
// // // //               Next session: <span className="font-semibold">Friday 3 PM</span>
// // // //             </p>
// // // //             <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// // // //               Join Now
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";
// // // import { useRouter } from "next/navigation";
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // interface User {
// // //   id: number;
// // //   username: string;
// // //   role: string;
// // // }

// // // export default function DashboardPage() {
// // //   const router = useRouter();
// // //   const [user, setUser] = useState<User | null>(null);
// // //   const [savedScholarshipsCount, setSavedScholarshipsCount] = useState(0);
// // //   const [inProgressApplicationsCount, setInProgressApplicationsCount] = useState(0);
// // //   const [submittedApplicationsCount, setSubmittedApplicationsCount] = useState(0);

// // //   useEffect(() => {
// // //     // Fetch user details from the backend.
// // //     axios
// // //       .get(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts/me/`)
// // //       .then((response) => setUser(response.data))
// // //       .catch((error) => console.error("Error fetching user", error));

// // //     // Load counts from localStorage (for demo purposes).
// // //     const savedScholarships = JSON.parse(localStorage.getItem("savedScholarships") || "[]");
// // //     setSavedScholarshipsCount(savedScholarships.length);

// // //     const allApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
// // //     const inProgressApplications = allApplications.filter((app: any) => app.status === "In Progress");
// // //     setInProgressApplicationsCount(inProgressApplications.length);
// // //     const submittedApplications = allApplications.filter((app: any) => app.status === "Submitted");
// // //     setSubmittedApplicationsCount(submittedApplications.length);
// // //   }, []);

// // //   if (!user) {
// // //     return <p>Loading...</p>;
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex flex-col">
// // //       {/* Top Header */}
// // //       <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
// // //         <div className="flex items-center justify-between">
// // //           <div className="flex items-center space-x-4">
// // //             <img src="/images/ua-logo.png" alt="UA Logo" className="h-10 w-auto" />
// // //             <h1 className="text-xl font-bold">UASAMS</h1>
// // //           </div>
// // //           <nav className="flex items-center space-x-4">
// // //             {/* Home button routes to Dashboard */}
// // //             <button
// // //               className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition"
// // //               onClick={() => router.push("/Dashboard")}
// // //             >
// // //               Home
// // //             </button>
// // //             {/* Sign Out button clears token and routes to login */}
// // //             <button
// // //               className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition"
// // //               onClick={() => {
// // //                 localStorage.removeItem("authToken");
// // //                 router.push("/login");
// // //               }}
// // //             >
// // //               Sign Out
// // //             </button>
// // //           </nav>
// // //         </div>
// // //       </header>

// // //       {/* Main Content */}
// // //       <main className="flex-1 p-6">
// // //         <h2 className="text-2xl font-semibold mb-6 text-center">Your Dashboard</h2>

// // //         {/* Role-based welcome message */}
// // //         {user.role === "admin" && (
// // //           <div className="mb-6 text-center">
// // //             <p>Welcome, Admin. You have full access.</p>
// // //             <a href="/admin/role-requests" className="text-blue-600 underline">
// // //               Manage Role Requests
// // //             </a>
// // //           </div>
// // //         )}
// // //         {user.role === "reviewer" && (
// // //           <div className="mb-6 text-center">
// // //             <p>Welcome, Reviewer. Here are your review tasks.</p>
// // //           </div>
// // //         )}
// // //         {user.role === "donor" && (
// // //           <div className="mb-6 text-center">
// // //             <p>Welcome, Donor. Here are your donation options.</p>
// // //           </div>
// // //         )}
// // //         {user.role === "applicant" && (
// // //           <div className="mb-6 text-center">
// // //             <p>Welcome, Applicant. Here is your application dashboard.</p>
// // //           </div>
// // //         )}

// // //         {/* Widgets Grid (example widgets) */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
// // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //             <h3 className="text-lg font-bold mb-4">Scholarship Deadline Countdown</h3>
// // //             <p className="text-gray-700 mb-6">
// // //               Next deadline in <span className="font-semibold">12 days</span>.
// // //             </p>
// // //             <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// // //               View Details
// // //             </button>
// // //           </div>
// // //           {/* Additional widgets here… */}
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // "use client";

// // // import { useRouter } from "next/navigation";
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // // Define a type for your user.
// // // interface User {
// // //   id: number;
// // //   username: string;
// // //   role: "admin" | "reviewer" | "donor" | "applicant";
// // // }

// // // export default function DashboardPage() {
// // //   const router = useRouter();
// // //   const [user, setUser] = useState<User | null>(null);

// // //   // Demo counts for applicant dashboard
// // //   const [savedScholarshipsCount, setSavedScholarshipsCount] = useState(0);
// // //   const [inProgressApplicationsCount, setInProgressApplicationsCount] = useState(0);
// // //   const [submittedApplicationsCount, setSubmittedApplicationsCount] = useState(0);

// // //   useEffect(() => {
// // //     // Fetch user details from backend (hardcoded URL)
// // //     axios
// // //       .get("http://127.0.0.1:8000/api/accounts/me/")
// // //       .then((response) => setUser(response.data))
// // //       .catch((error) => console.error("Error fetching user:", error));

// // //     // For applicant dashboard demo: load counts from localStorage
// // //     const savedScholarships = JSON.parse(localStorage.getItem("savedScholarships") || "[]");
// // //     setSavedScholarshipsCount(savedScholarships.length);

// // //     const allApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
// // //     const inProgress = allApplications.filter((app: any) => app.status === "In Progress");
// // //     setInProgressApplicationsCount(inProgress.length);
// // //     const submitted = allApplications.filter((app: any) => app.status === "Submitted");
// // //     setSubmittedApplicationsCount(submitted.length);
// // //   }, []);

// // //   if (!user) {
// // //     return <p className="text-center mt-10">Loading dashboard...</p>;
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex flex-col">
// // //       {/* Top Header */}
// // //       <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
// // //         <div className="flex items-center justify-between max-w-7xl mx-auto">
// // //           <div className="flex items-center space-x-4">
// // //             <img src="/images/ua-logo.png" alt="UA Logo" className="h-10 w-auto" />
// // //             <h1 className="text-xl font-bold">UASAMS</h1>
// // //           </div>
// // //           <nav className="flex items-center space-x-4">
// // //             <button
// // //               onClick={() => {
// // //                 localStorage.removeItem("authToken");
// // //                 router.push("/login");
// // //               }}
// // //               className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition"
// // //             >
// // //               Sign Out
// // //             </button>
// // //           </nav>
// // //         </div>
// // //       </header>

// // //       {/* Main Content */}
// // //       <main className="flex-1 p-6 max-w-7xl mx-auto">
// // //         {/* Dynamic Title */}
// // //         <h2 className="text-3xl font-bold text-center mb-8">
// // //           {user.role === "admin" && "Admin Dashboard"}
// // //           {user.role === "reviewer" && "Reviewer Dashboard"}
// // //           {user.role === "donor" && "Donor Dashboard"}
// // //           {user.role === "applicant" && "Applicant Dashboard"}
// // //         </h2>

// // //         {/* Role-Based Welcome Message & Controls */}
// // //         <div className="mb-8 text-center">
// // //           {user.role === "admin" && (
// // //             <>
// // //               <p>Welcome, Admin. You can view users, manage scholarships, and approve role requests.</p>
// // //               <div className="mt-4 flex flex-col items-center gap-4">
// // //                 <button
// // //                   onClick={() => router.push("/admin/users")}
// // //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   View & Approve Users
// // //                 </button>
// // //                 <button
// // //                   onClick={() => router.push("/admin/scholarships")}
// // //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   Manage Scholarships
// // //                 </button>
// // //                 <button
// // //                   onClick={() => router.push("/admin/applications")}
// // //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   View All Applications
// // //                 </button>
// // //               </div>
// // //             </>
// // //           )}
// // //           {user.role === "reviewer" && (
// // //             <>
// // //               <p>Welcome, Reviewer. Review tasks will be available here.</p>
// // //               <button
// // //                 onClick={() => router.push("/review/applications")}
// // //                 className="mt-4 bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //               >
// // //                 Review Applications
// // //               </button>
// // //             </>
// // //           )}
// // //           {user.role === "donor" && (
// // //             <>
// // //               <p>Welcome, Donor. Explore scholarship donation options.</p>
// // //               <button
// // //                 onClick={() => router.push("/donations")}
// // //                 className="mt-4 bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //               >
// // //                 Manage Donations
// // //               </button>
// // //             </>
// // //           )}
// // //           {user.role === "applicant" && (
// // //             <>
// // //               <p>Welcome, Applicant. Here’s your overview of scholarships and application progress.</p>
// // //             </>
// // //           )}
// // //         </div>

// // //         {/* Widgets Grid */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
// // //           {/* Applicant-Specific Widgets */}
// // //           {user.role === "applicant" && (
// // //             <>
// // //               {/* Scholarship Deadline Countdown */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">Scholarship Deadline Countdown</h3>
// // //                 <p className="text-gray-700 mb-6">
// // //                   Next deadline in <span className="font-semibold">12 days</span>.
// // //                 </p>
// // //                 <button
// // //                   onClick={() => router.push("/scholarships")}
// // //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   View Details
// // //                 </button>
// // //               </div>

// // //               {/* Application Progress Tracker */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">Application Progress Tracker</h3>
// // //                 <p className="text-gray-700 mb-4">Overall Progress: 50%</p>
// // //                 <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-6">
// // //                   <circle
// // //                     className="text-gray-200"
// // //                     strokeWidth="8"
// // //                     stroke="currentColor"
// // //                     fill="transparent"
// // //                     r="40"
// // //                     cx="50"
// // //                     cy="50"
// // //                   />
// // //                   <circle
// // //                     className="text-[#0C234B]"
// // //                     strokeWidth="8"
// // //                     strokeDasharray="251.2"
// // //                     strokeDashoffset="125.6"
// // //                     strokeLinecap="round"
// // //                     stroke="green"
// // //                     fill="transparent"
// // //                     r="40"
// // //                     cx="50"
// // //                     cy="50"
// // //                   />
// // //                   <text
// // //                     x="50"
// // //                     y="55"
// // //                     textAnchor="middle"
// // //                     fill="#0C234B"
// // //                     fontSize="18"
// // //                     fontWeight="bold"
// // //                   >
// // //                     50%
// // //                   </text>
// // //                 </svg>
// // //                 <button
// // //                   onClick={() => router.push("/Apply")}
// // //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   View Details
// // //                 </button>
// // //               </div>

// // //               {/* Saved Scholarships & Quick Apply */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">Saved Scholarships & Quick Apply</h3>
// // //                 <p className="text-gray-700 mb-2">Saved Scholarships: {/* Replace with dynamic count */}0</p>
// // //                 <p className="text-gray-700 mb-2">In Progress Apps: {/* Replace with dynamic count */}0</p>
// // //                 <p className="text-gray-700 mb-2">Submitted Apps: {/* Replace with dynamic count */}0</p>
// // //                 <button
// // //                   onClick={() => router.push("/Apply")}
// // //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   Quick Apply
// // //                 </button>
// // //               </div>

// // //               {/* Document Checklist & Upload Status */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">Document Checklist & Upload Status</h3>
// // //                 <ul className="list-disc list-inside text-gray-700 mb-6">
// // //                   <li>Transcript: Uploaded</li>
// // //                   <li>Essay: Pending</li>
// // //                   <li>Recommendation: Uploaded</li>
// // //                 </ul>
// // //                 <button
// // //                   onClick={() => router.push("/UploadDocument")}
// // //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   View Details
// // //                 </button>
// // //               </div>

// // //               {/* Daily Scholarship Fun Fact */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">Daily Scholarship Fun Fact</h3>
// // //                 <p className="text-gray-700 mb-6">
// // //                   Fun Fact: Over <span className="font-semibold">X</span> scholarships go unclaimed each year.
// // //                 </p>
// // //                 <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// // //                   Learn More
// // //                 </button>
// // //               </div>

// // //               {/* Live Q&A with Financial Aid Experts */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">Live Q&A with Financial Aid Experts</h3>
// // //                 <p className="text-gray-700 mb-6">
// // //                   Next session: <span className="font-semibold">Friday 3 PM</span>
// // //                 </p>
// // //                 <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// // //                   Join Now
// // //                 </button>
// // //               </div>
// // //             </>
// // //           )}

// // //           {/* ADMIN-SPECIFIC WIDGETS */}
// // //           {user.role === "admin" && (
// // //             <>
// // //               {/* User Management */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">User Management</h3>
// // //                 <p className="text-gray-700 mb-4">
// // //                   View and approve user requests, edit user details, or remove users.
// // //                 </p>
// // //                 <button
// // //                   onClick={() => router.push("/admin/users")}
// // //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //                 >
// // //                   View Users & Approve Requests
// // //                 </button>
// // //               </div>

// // //               {/* Scholarship & Application Management */}
// // //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //                 <h3 className="text-lg font-bold mb-4">Manage Scholarships & Applications</h3>
// // //                 <p className="text-gray-700 mb-4">
// // //                   Oversee scholarship listings and all submitted applications.
// // //                 </p>
// // //                 <div className="flex flex-col gap-2">
// // //                   <button
// // //                     onClick={() => router.push("/admin/scholarships")}
// // //                     className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //                   >
// // //                     Manage Scholarships
// // //                   </button>
// // //                   <button
// // //                     onClick={() => router.push("/admin/applications")}
// // //                     className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //                   >
// // //                     View All Applications
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </>
// // //           )}

// // //           {/* REVIEWER-SPECIFIC WIDGET */}
// // //           {user.role === "reviewer" && (
// // //             <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //               <h3 className="text-lg font-bold mb-4">Review Applications</h3>
// // //               <p className="text-gray-700 mb-4">
// // //                 View applications assigned for your review.
// // //               </p>
// // //               <button
// // //                 onClick={() => router.push("/review/applications")}
// // //                 className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //               >
// // //                 Review Now
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* DONOR-SPECIFIC WIDGET */}
// // //           {user.role === "donor" && (
// // //             <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //               <h3 className="text-lg font-bold mb-4">Donation Options</h3>
// // //               <p className="text-gray-700 mb-4">
// // //                 Explore scholarship donation opportunities.
// // //               </p>
// // //               <button
// // //                 onClick={() => router.push("/donations")}
// // //                 className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //               >
// // //                 Donate Now
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* COMMON WIDGET: Profile */}
// // //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// // //             <h3 className="text-lg font-bold mb-4">Profile</h3>
// // //             <p className="text-gray-700 mb-4">Manage your account and view your details.</p>
// // //             <button
// // //               onClick={() => router.push("/users")}
// // //               className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// // //             >
// // //               View Profile
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useRouter } from "next/navigation";
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // // Define a type for your user.
// // interface User {
// //   id: number;
// //   username: string;
// //   role: string; // We'll convert this to lowercase.
// // }

// // export default function DashboardPage() {
// //   const router = useRouter();
// //   const [user, setUser] = useState<User | null>(null);

// //   // Demo counts for applicant dashboard (if needed)
// //   const [savedScholarshipsCount, setSavedScholarshipsCount] = useState(0);
// //   const [inProgressApplicationsCount, setInProgressApplicationsCount] = useState(0);
// //   const [submittedApplicationsCount, setSubmittedApplicationsCount] = useState(0);

// //   useEffect(() => {
// //     // Fetch user details from backend (hardcoded URL) and normalize role to lowercase.
// //     axios
// //       .get("http://127.0.0.1:8000/api/accounts/me/")
// //       .then((response) => {
// //         const fetchedUser = response.data;
// //         // Normalize the role to lowercase for consistent comparisons.
// //         if (fetchedUser.role) {
// //           fetchedUser.role = fetchedUser.role.toLowerCase();
// //         }
// //         setUser(fetchedUser);
// //       })
// //       .catch((error) => console.error("Error fetching user:", error));

// //     // For applicant demo: load counts from localStorage.
// //     const savedScholarships = JSON.parse(localStorage.getItem("savedScholarships") || "[]");
// //     setSavedScholarshipsCount(savedScholarships.length);

// //     const allApplications = JSON.parse(localStorage.getItem("savedApplications") || "[]");
// //     const inProgress = allApplications.filter((app: any) => app.status === "In Progress");
// //     setInProgressApplicationsCount(inProgress.length);
// //     const submitted = allApplications.filter((app: any) => app.status === "Submitted");
// //     setSubmittedApplicationsCount(submitted.length);
// //   }, []);

// //   if (!user) {
// //     return <p className="text-center mt-10">Loading dashboard...</p>;
// //   }

// //   const role = user.role; // already in lowercase

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col">
// //       {/* Top Header */}
// //       <header className="bg-gradient-to-r from-[#AB0520] to-[#9B051F] text-white py-3 px-4 shadow-md">
// //         <div className="flex items-center justify-between max-w-7xl mx-auto">
// //           <div className="flex items-center space-x-4">
// //             <img src="/images/ua-logo.png" alt="UA Logo" className="h-10 w-auto" />
// //             <h1 className="text-xl font-bold">UASAMS</h1>
// //           </div>
// //           <nav className="flex items-center space-x-4">
// //             <button
// //               onClick={() => {
// //                 localStorage.removeItem("authToken");
// //                 router.push("/login");
// //               }}
// //               className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition"
// //             >
// //               Sign Out
// //             </button>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6 max-w-7xl mx-auto">
// //         {/* Dynamic Title */}
// //         <h2 className="text-3xl font-bold text-center mb-8">
// //           {role === "admin" && "Admin Dashboard"}
// //           {role === "reviewer" && "Reviewer Dashboard"}
// //           {role === "donor" && "Donor Dashboard"}
// //           {role === "applicant" && "Applicant Dashboard"}
// //         </h2>

// //         {/* Role-Based Welcome Message & Controls */}
// //         <div className="mb-8 text-center">
// //           {role === "admin" && (
// //             <>
// //               <p>Welcome, Admin. Use the controls below to manage users and scholarships.</p>
// //               <div className="mt-4 flex flex-col items-center gap-4">
// //                 <button
// //                   onClick={() => router.push("/admin/users")}
// //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //                 >
// //                   View & Approve Users
// //                 </button>
// //                 <button
// //                   onClick={() => router.push("/admin/scholarships")}
// //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //                 >
// //                   Manage Scholarships
// //                 </button>
// //                 <button
// //                   onClick={() => router.push("/admin/applications")}
// //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //                 >
// //                   View All Applications
// //                 </button>
// //               </div>
// //             </>
// //           )}
// //           {role === "reviewer" && (
// //             <>
// //               <p>Welcome, Reviewer. Your assigned review tasks will appear below.</p>
// //               <button
// //                 onClick={() => router.push("/review/applications")}
// //                 className="mt-4 bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //               >
// //                 Review Applications
// //               </button>
// //             </>
// //           )}
// //           {role === "donor" && (
// //             <>
// //               <p>Welcome, Donor. Explore scholarship donation opportunities below.</p>
// //               <button
// //                 onClick={() => router.push("/donations")}
// //                 className="mt-4 bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //               >
// //                 Manage Donations
// //               </button>
// //             </>
// //           )}
// //           {role === "applicant" && (
// //             <>
// //               <p>Welcome, Applicant. Here’s your overview of scholarships and your application progress.</p>
// //             </>
// //           )}
// //         </div>

// //         {/* Widgets Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
// //           {/* For Applicants */}
// //           {role === "applicant" && (
// //             <>
// //               {/* Scholarship Deadline Countdown */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">Scholarship Deadline Countdown</h3>
// //                 <p className="text-gray-700 mb-6">
// //                   Next deadline in <span className="font-semibold">12 days</span>.
// //                 </p>
// //                 <button
// //                   onClick={() => router.push("/scholarships")}
// //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// //                 >
// //                   View Details
// //                 </button>
// //               </div>
// //               {/* Application Progress Tracker */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">Application Progress Tracker</h3>
// //                 <p className="text-gray-700 mb-4">Overall Progress: 50%</p>
// //                 <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-6">
// //                   <circle
// //                     className="text-gray-200"
// //                     strokeWidth="8"
// //                     stroke="currentColor"
// //                     fill="transparent"
// //                     r="40"
// //                     cx="50"
// //                     cy="50"
// //                   />
// //                   <circle
// //                     className="text-[#0C234B]"
// //                     strokeWidth="8"
// //                     strokeDasharray="251.2"
// //                     strokeDashoffset="125.6"
// //                     strokeLinecap="round"
// //                     stroke="green"
// //                     fill="transparent"
// //                     r="40"
// //                     cx="50"
// //                     cy="50"
// //                   />
// //                   <text
// //                     x="50"
// //                     y="55"
// //                     textAnchor="middle"
// //                     fill="#0C234B"
// //                     fontSize="18"
// //                     fontWeight="bold"
// //                   >
// //                     50%
// //                   </text>
// //                 </svg>
// //                 <button
// //                   onClick={() => router.push("/Apply")}
// //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// //                 >
// //                   View Details
// //                 </button>
// //               </div>
// //               {/* Saved Scholarships & Quick Apply */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">Saved Scholarships & Quick Apply</h3>
// //                 <p className="text-gray-700 mb-2">Saved Scholarships: {savedScholarshipsCount}</p>
// //                 <p className="text-gray-700 mb-2">In Progress Apps: {inProgressApplicationsCount}</p>
// //                 <p className="text-gray-700 mb-2">Submitted Apps: {submittedApplicationsCount}</p>
// //                 <button
// //                   onClick={() => router.push("/Apply")}
// //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// //                 >
// //                   Quick Apply
// //                 </button>
// //               </div>
// //               {/* Document Checklist & Upload Status */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">Document Checklist & Upload Status</h3>
// //                 <ul className="list-disc list-inside text-gray-700 mb-6">
// //                   <li>Transcript: Uploaded</li>
// //                   <li>Essay: Pending</li>
// //                   <li>Recommendation: Uploaded</li>
// //                 </ul>
// //                 <button
// //                   onClick={() => router.push("/UploadDocument")}
// //                   className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
// //                 >
// //                   View Details
// //                 </button>
// //               </div>
// //               {/* Daily Scholarship Fun Fact */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">Daily Scholarship Fun Fact</h3>
// //                 <p className="text-gray-700 mb-6">
// //                   Fun Fact: Over <span className="font-semibold">X</span> scholarships go unclaimed each year.
// //                 </p>
// //                 <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// //                   Learn More
// //                 </button>
// //               </div>
// //               {/* Live Q&A with Financial Aid Experts */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">Live Q&A with Financial Aid Experts</h3>
// //                 <p className="text-gray-700 mb-6">
// //                   Next session: <span className="font-semibold">Friday 3 PM</span>
// //                 </p>
// //                 <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
// //                   Join Now
// //                 </button>
// //               </div>
// //             </>
// //           )}

// //           {/* ADMIN-SPECIFIC WIDGETS */}
// //           {role === "admin" && (
// //             <>
// //               {/* User Management */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">User Management</h3>
// //                 <p className="text-gray-700 mb-4">
// //                   View and approve user requests, edit user details, or remove users.
// //                 </p>
// //                 <button
// //                   onClick={() => router.push("/admin/users")}
// //                   className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //                 >
// //                   View Users & Approve Requests
// //                 </button>
// //               </div>

// //               {/* Scholarship & Application Management */}
// //               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //                 <h3 className="text-lg font-bold mb-4">Manage Scholarships & Applications</h3>
// //                 <p className="text-gray-700 mb-4">
// //                   Oversee scholarship listings and all submitted applications.
// //                 </p>
// //                 <div className="flex flex-col gap-2">
// //                   <button
// //                     onClick={() => router.push("/admin/scholarships")}
// //                     className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //                   >
// //                     Manage Scholarships
// //                   </button>
// //                   <button
// //                     onClick={() => router.push("/admin/applications")}
// //                     className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //                   >
// //                     View All Applications
// //                   </button>
// //                 </div>
// //               </div>
// //             </>
// //           )}

// //           {/* REVIEWER-SPECIFIC WIDGET */}
// //           {role === "reviewer" && (
// //             <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //               <h3 className="text-lg font-bold mb-4">Review Applications</h3>
// //               <p className="text-gray-700 mb-4">View applications assigned for your review.</p>
// //               <button
// //                 onClick={() => router.push("/review/applications")}
// //                 className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //               >
// //                 Review Now
// //               </button>
// //             </div>
// //           )}

// //           {/* DONOR-SPECIFIC WIDGET */}
// //           {role === "donor" && (
// //             <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //               <h3 className="text-lg font-bold mb-4">Donation Options</h3>
// //               <p className="text-gray-700 mb-4">Explore scholarship donation opportunities.</p>
// //               <button
// //                 onClick={() => router.push("/donations")}
// //                 className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //               >
// //                 Donate Now
// //               </button>
// //             </div>
// //           )}

// //           {/* COMMON WIDGET: User List for Editing/Approval */}
// //           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //             <h3 className="text-lg font-bold mb-4">User List</h3>
// //             <p className="text-gray-700 mb-4">View, edit, or remove users from the system.</p>
// //             <button
// //               onClick={() => router.push("/admin/users")}
// //               className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
// //             >
// //               View Users & Edit Details
// //             </button>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }




// "use client";

// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Adjust to match your user model fields
// interface User {
//   id: number;
//   username: string;
//   first_name: string;
//   role: "admin" | "reviewer" | "donor" | "applicant" | string; // fallback
// }

// export default function DashboardPage() {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);

//   // HARDCODED backend URL so we don’t rely on env vars
//   const BACKEND_URL = "http://127.0.0.1:8000";

//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/accounts/me/`, { withCredentials: true })
//       .then((res) => {
//         // Normalize role to something safe
//         const fetchedUser: User = res.data;
//         if (!fetchedUser.role) {
//           fetchedUser.role = "applicant";
//         } else {
//           fetchedUser.role = fetchedUser.role.toLowerCase();
//         }
//         setUser(fetchedUser);
//       })
//       .catch((err) => {
//         console.error("Error fetching user:", err);
//       });
//   }, []);

//   // If user data not loaded yet
//   if (!user) {
//     return <p className="text-center mt-10">Loading dashboard...</p>;
//   }

//   // Single top nav bar
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Top Bar (only one) */}
//       <header className="bg-[#AB0520] text-white py-2 px-4 shadow-md">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           {/* Left side: UA Logo + Title */}
//           <div className="flex items-center space-x-4">
//             <img
//               src="/images/ua-logo.png"
//               alt="UA Logo"
//               className="h-10 w-auto"
//             />
//             <h1 className="text-lg font-bold">UASAMS</h1>
//           </div>

//           {/* Right side: Navigation */}
//           <nav className="flex items-center space-x-4">
//             <a href="/" className="hover:underline">
//               Home
//             </a>
//             <a href="/scholarships" className="hover:underline">
//               Scholarships
//             </a>
//             <a href="/Apply" className="hover:underline">
//               Apply
//             </a>
//             <a href="/UploadDocument" className="hover:underline">
//               Upload
//             </a>
//             <button
//               className="bg-white text-[#AB0520] px-3 py-1 rounded hover:bg-gray-200 transition"
//               onClick={() => {
//                 // Clear local token and push to /login
//                 localStorage.removeItem("authToken");
//                 router.push("/login");
//               }}
//             >
//               Sign Out
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* Main content: greeting + role-based dashboard */}
//       <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
//         {/* Personalized greeting */}
//         <h2 className="text-3xl font-bold text-center mb-2">
//           Hello, {user.first_name || user.username}!
//         </h2>
//         <p className="text-center mb-8 text-gray-600">
//           You are logged in as <strong>{user.role}</strong>.
//         </p>

//         {/* Role-based content */}
//         {user.role === "admin" && <AdminDashboard />}
//         {user.role === "donor" && <DonorDashboard />}
//         {user.role === "applicant" && <ApplicantDashboard />}

//         {/* If you want a fallback for “reviewer” or unknown roles: */}
//         {user.role === "reviewer" && (
//           <p className="text-center mt-10">
//             (Placeholder) A “reviewer” role is not fully implemented here.
//           </p>
//         )}
//       </main>
//     </div>
//   );
// }

// /* ---------------------------------------------
//    APPLICANT DASHBOARD WIDGETS
//    --------------------------------------------- */
// function ApplicantDashboard() {
//   const router = useRouter();
//   const [savedScholarshipsCount, setSavedScholarshipsCount] = useState(0);
//   const [inProgressApplicationsCount, setInProgressApplicationsCount] = useState(0);
//   const [submittedApplicationsCount, setSubmittedApplicationsCount] = useState(0);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("savedScholarships") || "[]");
//     setSavedScholarshipsCount(saved.length);

//     const allApps = JSON.parse(localStorage.getItem("savedApplications") || "[]");
//     const inProgress = allApps.filter((app: any) => app.status === "In Progress");
//     const submitted = allApps.filter((app: any) => app.status === "Submitted");
//     setInProgressApplicationsCount(inProgress.length);
//     setSubmittedApplicationsCount(submitted.length);
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//       {/* Scholarship Deadline Countdown */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Scholarship Deadline Countdown</h3>
//         <p className="text-gray-700 mb-6">
//           Next deadline in <span className="font-semibold">12 days</span>.
//         </p>
//         <button
//           onClick={() => router.push("/scholarships")}
//           className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
//         >
//           View Details
//         </button>
//       </div>

//       {/* Application Progress Tracker */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Application Progress Tracker</h3>
//         <p className="text-gray-700 mb-4">Overall Progress: 50%</p>
//         <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-6">
//           <circle
//             className="text-gray-200"
//             strokeWidth="8"
//             stroke="currentColor"
//             fill="transparent"
//             r="40"
//             cx="50"
//             cy="50"
//           />
//           <circle
//             className="text-[#0C234B]"
//             strokeWidth="8"
//             strokeDasharray="251.2"
//             strokeDashoffset="125.6"
//             strokeLinecap="round"
//             stroke="green"
//             fill="transparent"
//             r="40"
//             cx="50"
//             cy="50"
//           />
//           <text
//             x="50"
//             y="55"
//             textAnchor="middle"
//             fill="#0C234B"
//             fontSize="18"
//             fontWeight="bold"
//           >
//             50%
//           </text>
//         </svg>
//         <button
//           onClick={() => router.push("/Apply")}
//           className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
//         >
//           View Details
//         </button>
//       </div>

//       {/* Saved Scholarships & Quick Apply */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Saved Scholarships & Quick Apply</h3>
//         <p className="text-gray-700 mb-2">Saved Scholarships: {savedScholarshipsCount}</p>
//         <p className="text-gray-700 mb-2">In Progress Apps: {inProgressApplicationsCount}</p>
//         <p className="text-gray-700 mb-2">Submitted Apps: {submittedApplicationsCount}</p>
//         <button
//           onClick={() => router.push("/Apply")}
//           className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
//         >
//           Quick Apply
//         </button>
//       </div>

//       {/* Document Checklist & Upload Status */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Document Checklist & Upload Status</h3>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Transcript: Uploaded</li>
//           <li>Essay: Pending</li>
//           <li>Recommendation: Uploaded</li>
//         </ul>
//         <button
//           onClick={() => router.push("/UploadDocument")}
//           className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
//         >
//           View Details
//         </button>
//       </div>

//       {/* Daily Scholarship Fun Fact */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Daily Scholarship Fun Fact</h3>
//         <p className="text-gray-700 mb-6">
//           Fun Fact: Over <span className="font-semibold">X</span> scholarships go unclaimed each year.
//         </p>
//         <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
//           Learn More
//         </button>
//       </div>

//       {/* Live Q&A with Financial Aid Experts */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Live Q&A with Financial Aid Experts</h3>
//         <p className="text-gray-700 mb-6">
//           Next session: <span className="font-semibold">Friday 3 PM</span>
//         </p>
//         <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
//           Join Now
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------
//    ADMIN DASHBOARD WIDGETS
//    --------------------------------------------- */
// function AdminDashboard() {
//   const router = useRouter();

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//       {/* Widget 1: User Management */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">User Management</h3>
//         <p className="text-gray-700 mb-4">
//           View all users (read-only) or edit user details.
//         </p>
//         <div className="flex flex-col gap-2">
//           <button
//             onClick={() => router.push("/users")}
//             className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//           >
//             View Users (Read-Only)
//           </button>
//           <button
//             onClick={() => router.push("/admin/users")}
//             className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//           >
//             Edit Users (Admin Only)
//           </button>
//         </div>
//       </div>

//       {/* Widget 2: Scholarship & Application Management */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Manage Scholarships & Applications</h3>
//         <p className="text-gray-700 mb-4">
//           Oversee scholarship listings and submitted applications.
//         </p>
//         <div className="flex flex-col gap-2">
//           <button
//             onClick={() => router.push("/admin/scholarships")}
//             className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//           >
//             Manage Scholarships
//           </button>
//           <button
//             onClick={() => router.push("/admin/applications")}
//             className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//           >
//             View All Applications
//           </button>
//         </div>
//       </div>

//       {/* Widget 3: System Requirements Oversight */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">System Overview</h3>
//         <p className="text-gray-700 mb-4">Coming soon: Admin system insights.</p>
//         <button
//           onClick={() => router.push("/admin/requirements")}
//           className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//         >
//           View Insights
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------
//    DONOR DASHBOARD WIDGETS
//    --------------------------------------------- */
// function DonorDashboard() {
//   const router = useRouter();

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//       {/* Widget 1: Donation Overview */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Donation Overview</h3>
//         <p className="text-gray-700 mb-4">Explore your donation impact and history.</p>
//         <button
//           onClick={() => router.push("/donations")}
//           className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//         >
//           View Donations
//         </button>
//       </div>

//       {/* Widget 2: Create/Sponsor Scholarships */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Sponsor Scholarships</h3>
//         <p className="text-gray-700 mb-4">Sponsor or create new scholarships.</p>
//         <button
//           onClick={() => router.push("/donations/create")}
//           className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//         >
//           Sponsor Now
//         </button>
//       </div>

//       {/* Widget 3: Student Impact & Stories */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-bold mb-4">Student Impact & Stories</h3>
//         <p className="text-gray-700 mb-4">
//           Coming soon: View student success stories and thank-you notes.
//         </p>
//         <button
//           onClick={() => router.push("/donations/impact")}
//           className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
//         >
//           View Stories
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  username: string;
  first_name: string;
  role: "admin" | "reviewer" | "donor" | "applicant" | string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          router.push("/login");
          return;
        }

        const res = await axios.get(`${BACKEND_URL}/api/accounts/me/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const fetchedUser: User = res.data;
        if (!fetchedUser.role) {
          fetchedUser.role = "applicant";
        } else {
          fetchedUser.role = fetchedUser.role.toLowerCase();
        }
        setUser(fetchedUser);
      } catch (err) {
        console.error("Error fetching user:", err);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#AB0520]"></div>
      </div>
    );
  }

  if (!user) {
    return <p className="text-center mt-10">Failed to load user data</p>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <header className="bg-[#AB0520] text-white py-2 px-4 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side: UA Logo + Title */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/ua-logo.png"
              alt="UA Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-lg font-bold">UASAMS</h1>
          </div>

          {/* Right side: Navigation */}
          <nav className="flex items-center space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/scholarships" className="hover:underline">
              Scholarships
            </a>
            <a href="/Apply" className="hover:underline">
              Apply
            </a>
            <a href="/UploadDocument" className="hover:underline">
              Upload
            </a>
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

      {/* Main content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-2">
          Hello, {user.first_name || user.username}!
        </h2>
        <p className="text-center mb-8 text-gray-600">
          You are logged in as <strong>{user.role}</strong>.
        </p>

        {/* Role-based content */}
        {user.role === "admin" && <AdminDashboard />}
        {user.role === "donor" && <DonorDashboard />}
        {user.role === "applicant" && <ApplicantDashboard />}
        {user.role === "reviewer" && <ReviewerDashboard />}
      </main>
    </div>
  );
}

/* ---------------------------------------------
   APPLICANT DASHBOARD WIDGETS
   --------------------------------------------- */
function ApplicantDashboard() {
  const router = useRouter();
  const [savedScholarshipsCount, setSavedScholarshipsCount] = useState(0);
  const [inProgressApplicationsCount, setInProgressApplicationsCount] = useState(0);
  const [submittedApplicationsCount, setSubmittedApplicationsCount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedScholarships") || "[]");
    setSavedScholarshipsCount(saved.length);

    const allApps = JSON.parse(localStorage.getItem("savedApplications") || "[]");
    const inProgress = allApps.filter((app: any) => app.status === "In Progress");
    const submitted = allApps.filter((app: any) => app.status === "Submitted");
    setInProgressApplicationsCount(inProgress.length);
    setSubmittedApplicationsCount(submitted.length);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Scholarship Deadline Countdown */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Scholarship Deadline Countdown</h3>
        <p className="text-gray-700 mb-6">
          Next deadline in <span className="font-semibold">12 days</span>.
        </p>
        <button
          onClick={() => router.push("/scholarships")}
          className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
        >
          View Details
        </button>
      </div>

      {/* Application Progress Tracker */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Application Progress Tracker</h3>
        <p className="text-gray-700 mb-4">Overall Progress: 50%</p>
        <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-6">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className="text-[#0C234B]"
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset="125.6"
            strokeLinecap="round"
            stroke="green"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fill="#0C234B"
            fontSize="18"
            fontWeight="bold"
          >
            50%
          </text>
        </svg>
        <button
          onClick={() => router.push("/Apply")}
          className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
        >
          View Details
        </button>
      </div>

      {/* Saved Scholarships & Quick Apply */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Saved Scholarships & Quick Apply</h3>
        <p className="text-gray-700 mb-2">Saved Scholarships: {savedScholarshipsCount}</p>
        <p className="text-gray-700 mb-2">In Progress Apps: {inProgressApplicationsCount}</p>
        <p className="text-gray-700 mb-2">Submitted Apps: {submittedApplicationsCount}</p>
        <button
          onClick={() => router.push("/Apply")}
          className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
        >
          Quick Apply
        </button>
      </div>

      {/* Document Checklist & Upload Status */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Document Checklist & Upload Status</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Transcript: Uploaded</li>
          <li>Essay: Pending</li>
          <li>Recommendation: Uploaded</li>
        </ul>
        <button
          onClick={() => router.push("/UploadDocument")}
          className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition"
        >
          View Details
        </button>
      </div>

      {/* Daily Scholarship Fun Fact */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Daily Scholarship Fun Fact</h3>
        <p className="text-gray-700 mb-6">
          Fun Fact: Over <span className="font-semibold">X</span> scholarships go unclaimed each year.
        </p>
        <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
          Learn More
        </button>
      </div>

      {/* Live Q&A with Financial Aid Experts */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Live Q&A with Financial Aid Experts</h3>
        <p className="text-gray-700 mb-6">
          Next session: <span className="font-semibold">Friday 3 PM</span>
        </p>
        <button className="bg-[#0C234B] text-white py-2 px-4 rounded hover:bg-blue-900 transition">
          Join Now
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   ADMIN DASHBOARD WIDGETS
   --------------------------------------------- */
function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Widget 1: User Management */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">User Management</h3>
        <p className="text-gray-700 mb-4">
          View all users (read-only) or edit user details.
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => router.push("/users")}
            className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            View Users (Read-Only)
          </button>
          <button
            onClick={() => router.push("/admin/users")}
            className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Edit Users (Admin Only)
          </button>
        </div>
      </div>

      {/* Widget 2: Scholarship & Application Management */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Manage Scholarships & Applications</h3>
        <p className="text-gray-700 mb-4">
          Oversee scholarship listings and submitted applications.
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => router.push("/admin/scholarships")}
            className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Manage Scholarships
          </button>
          <button
            onClick={() => router.push("/admin/applications")}
            className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            View All Applications
          </button>
        </div>
      </div>

      {/* Widget 3: System Requirements Oversight */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">System Overview</h3>
        <p className="text-gray-700 mb-4">Coming soon: Admin system insights.</p>
        <button
          onClick={() => router.push("/admin/requirements")}
          className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          View Insights
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   DONOR DASHBOARD WIDGETS
   --------------------------------------------- */
function DonorDashboard() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Widget 1: Donation Overview */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Donation Overview</h3>
        <p className="text-gray-700 mb-4">Explore your donation impact and history.</p>
        <button
          onClick={() => router.push("/donations")}
          className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          View Donations
        </button>
      </div>

      {/* Widget 2: Create/Sponsor Scholarships */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Sponsor Scholarships</h3>
        <p className="text-gray-700 mb-4">Sponsor or create new scholarships.</p>
        <button
          onClick={() => router.push("/donations/create")}
          className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          Sponsor Now
        </button>
      </div>

      {/* Widget 3: Student Impact & Stories */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Student Impact & Stories</h3>
        <p className="text-gray-700 mb-4">
          Coming soon: View student success stories and thank-you notes.
        </p>
        <button
          onClick={() => router.push("/donations/impact")}
          className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          View Stories
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   REVIEWER DASHBOARD WIDGETS
   --------------------------------------------- */
function ReviewerDashboard() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Widget 1: Applications to Review */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Applications to Review</h3>
        <p className="text-gray-700 mb-4">You have 5 applications waiting for review.</p>
        <button
          onClick={() => router.push("/review")}
          className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          Start Reviewing
        </button>
      </div>

      {/* Widget 2: Review Guidelines */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Review Guidelines</h3>
        <p className="text-gray-700 mb-4">Review the scoring criteria and guidelines.</p>
        <button
          onClick={() => router.push("/review/guidelines")}
          className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          View Guidelines
        </button>
      </div>

      {/* Widget 3: Past Reviews */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-4">Past Reviews</h3>
        <p className="text-gray-700 mb-4">View your past reviews and scores.</p>
        <button
          onClick={() => router.push("/review/history")}
          className="bg-[#0C234B] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          View History
        </button>
      </div>
    </div>
  );
}