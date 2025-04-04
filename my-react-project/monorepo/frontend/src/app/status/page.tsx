"use client";

import { useEffect, useState } from "react";
import { Scholarship } from "@/types/scholarship"; // Import the Scholarship type
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; 

export default function ScholarshipStatus() {
  const router = useRouter();

  // Retrieve scholarship status from localStorage
  const [scholarshipStatus, setScholarshipStatus] = useState<Record<number, string>>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("scholarshipStatus") || "{}");
    }
    return {};
  });

  // State for filtered scholarships based on status
  const [appliedScholarships, setAppliedScholarships] = useState<Scholarship[]>([]);
  const [wonScholarships, setWonScholarships] = useState<Scholarship[]>([]);
  const [lostScholarships, setLostScholarships] = useState<Scholarship[]>([]);

  // Fetch all scholarships from your API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/scholarships/")
      .then((res) => res.json())
      .then((data: Scholarship[]) => {
        // Filter scholarships based on their current status in the state
        const applied = data.filter((scholarship) => scholarshipStatus[scholarship.id] === "Applied");
        const won = data.filter((scholarship) => scholarshipStatus[scholarship.id] === "Won");
        const lost = data.filter((scholarship) => scholarshipStatus[scholarship.id] === "Rejected");

        // Set the filtered scholarships
        setAppliedScholarships(applied);
        setWonScholarships(won);
        setLostScholarships(lost);
      })
      .catch((err) => console.error("Error fetching scholarships:", err));
  }, [scholarshipStatus]); // Re-fetch when scholarshipStatus changes

  const handleStatusChange = (id: number, newStatus: string) => {
    // Update the scholarship status in the state
    setScholarshipStatus((prevStatus) => {
      const updatedStatus = { ...prevStatus, [id]: newStatus };
      localStorage.setItem("scholarshipStatus", JSON.stringify(updatedStatus)); // Save to localStorage
      return updatedStatus;  // Update state
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full py-2 bg-[#ab0520] flex items-center px-4">
        <button
          onClick={() => router.push("/scholarships")}
          className="text-white p-2 rounded-full bg-[#8b0015] shadow-md hover:bg-[#ab0520] flex items-center justify-center"
        >
          <ArrowLeft size={24} className="mr-1" />
        </button>
  
        {/* Arizona logo */}
        <a className="flex items-center pl-10">
          <img
            src="/ua_wordmark_line_logo_white_rgb.min.svg"
            alt="UA Logo"
            className="w-96 h-auto object-contain"
          />
        </a>
      </div>
  
      <h1 className="text-4xl font-semibold text-[#1e5288] text-center py-4">Scholarship Status</h1>
  
      <div className="flex flex-wrap justify-between px-6 md:px-12 gap-6">
        {/* Applied Scholarships */}
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
          <h2 className="text-xl font-semibold  mb-2">Applied Scholarships</h2>
          <ul className="space-y-4">
            {appliedScholarships.length > 0 ? (
              appliedScholarships.map((scholarship) => (
                <li
                  key={scholarship.id}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#1e5288] hover:shadow-xl transition-shadow"
                >
                  <p className="text-lg font-semibold">{scholarship.name}</p>
                  <p className="text-gray-600">Status: {scholarshipStatus[scholarship.id] || "Select"}</p>
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={() => handleStatusChange(scholarship.id, "Won")}
                      className="text-white bg-[#1e5288] p-2 rounded-md hover:bg-[#1e4070] transition"
                    >
                      Mark as Won
                    </button>
                    <button
                      onClick={() => handleStatusChange(scholarship.id, "Rejected")}
                      className="text-white bg-[#ab0520] p-2 rounded-md hover:bg-[#8b0015] transition"
                    >
                      Mark as Lost
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>No applied scholarships.</p>
            )}
          </ul>
        </div>
  
        {/* Won Scholarships */}
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
          <h2 className="text-xl font-semibold  mb-2">Won Scholarships</h2>
          <ul className="space-y-4">
            {wonScholarships.length > 0 ? (
              wonScholarships.map((scholarship) => (
                <li
                  key={scholarship.id}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#1e5288] hover:shadow-xl transition-shadow"
                >
                  <p className="text-lg font-semibold">{scholarship.name}</p>
                  <p className="text-gray-600">Status: Won</p>
                </li>
              ))
            ) : (
              <p>No won scholarships.</p>
            )}
          </ul>
        </div>
  
        {/* Lost Scholarships */}
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
          <h2 className="text-xl font-semibold  mb-2">Lost Scholarships</h2>
          <ul className="space-y-4">
            {lostScholarships.length > 0 ? (
              lostScholarships.map((scholarship) => (
                <li
                  key={scholarship.id}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ab0520] hover:shadow-xl transition-shadow"
                >
                  <p className="text-lg font-semibold">{scholarship.name}</p>
                  <p className="text-gray-600">Status: Lost</p>
                </li>
              ))
            ) : (
              <p>No lost scholarships.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
  














  
};