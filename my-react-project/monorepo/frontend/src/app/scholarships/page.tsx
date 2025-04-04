"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Scholarship } from "@/types/scholarship";
import { Home, LayoutDashboard, Bookmark, Star, FileText } from "lucide-react";

export default function Scholarships() {
  const router = useRouter();
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Tracking applied status in local storage
  const [scholarshipStatus, setScholarshipStatus] = useState<Record<number, string>>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("scholarshipStatus") || "{}");
    }
    return {};
  });

  // Tracking saved (bookmarked) scholarships
  const [savedScholarships, setSavedScholarships] = useState<Record<number, boolean>>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("savedScholarships") || "{}");
    }
    return {};
  });

  const toggleBookmark = (id: number) => {
    const updated = { ...savedScholarships, [id]: !savedScholarships[id] };
    setSavedScholarships(updated);
    localStorage.setItem("savedScholarships", JSON.stringify(updated));
  };

  // Filter state
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [amountFilter, setAmountFilter] = useState<string>("all");
  const [majorFilter, setMajorFilter] = useState<string>("all");
  const [gpaFilter, setGPAfilter] = useState<string>("all");
  const [deadlineFilter, setDeadlineFilter] = useState<string>("all");

  // Fetch scholarships from Django API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/scholarships/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch scholarships");
        return res.json();
      })
      .then((data: Scholarship[]) => {
        setScholarships(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Extract majors from scholarship description
  const extractMajors = (description: string): string[] => {
    const match = description.match(/Required Majors\/Minors?:\s*(.+)/i);
    return match ? match[1].split(",").map((m) => m.trim()) : [];
  };

  // Extract minimum GPA from description
  const extractGPA = (description: string): number | null => {
    const match = description.match(/Required Minimum GPA:\s*([\d.]+)/i);
    return match ? parseFloat(match[1]) : null;
  };

  // Get unique list of majors
  const allMajors = Array.from(
    new Set(
      scholarships.flatMap((scholarship) => extractMajors(scholarship.description))
    )
  );

  // Get unique sorted list of GPA requirements
  const allGPA = Array.from(
    new Set(
      scholarships
        .map((scholarship) => extractGPA(scholarship.description))
        .filter((gpa): gpa is number => gpa !== null)
    )
  ).sort((a, b) => a - b);

  const getWeeksUntilDeadline = (deadline: string): number => {
    const dueDate = new Date(deadline);
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
  };

  // Check if a scholarship is a "best match"
  // (This is placeholder logic; adjust as needed.)
  const isBestMatch = (scholarship: Scholarship): boolean => {
    return majorFilter !== "all" && extractMajors(scholarship.description).includes(majorFilter);
  };

  // Filter scholarships based on search and filter criteria
  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAmount =
      amountFilter === "all" ||
      (amountFilter === "$1000+" && scholarship.amount >= 1000) ||
      (amountFilter === "$5000+" && scholarship.amount >= 5000) ||
      (amountFilter === "$10000+" && scholarship.amount >= 10000);
    const matchesMajor = majorFilter === "all" || extractMajors(scholarship.description).includes(majorFilter);
    const matchesGPA = gpaFilter === "all" || (extractGPA(scholarship.description) ?? 0) >= parseFloat(gpaFilter);
    const weeksUntil = scholarship.deadline ? getWeeksUntilDeadline(scholarship.deadline) : Infinity;
    const matchesDeadline =
      deadlineFilter === "all" ||
      (deadlineFilter === "approaching-soon" && weeksUntil <= 4) ||
      (deadlineFilter === "4+" && weeksUntil >= 4) ||
      (deadlineFilter === "6+" && weeksUntil >= 6) ||
      (deadlineFilter === "12+" && weeksUntil >= 12) ||
      (deadlineFilter === "farthest-deadline" && weeksUntil >= 15);
    return matchesSearch && matchesAmount && matchesMajor && matchesGPA && matchesDeadline;
  });

  if (loading) return <p className="text-center">Loading scholarships...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Navigation */}
      <header className="w-full py-2 bg-[#ab0520] flex items-center px-4 relative">
        <button
          onClick={() => router.push("/")}
          className="absolute top-2 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          <Home className="w-5 h-5" />
        </button>
        <div className="flex-grow text-center">
          <h1 className="text-xl font-bold text-white">Available Scholarships</h1>
        </div>
        <div className="flex space-x-2 absolute top-2 right-4">
          <button
            onClick={() => router.push("/Dashboard")}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300"
            title="Dashboard"
          >
            <LayoutDashboard className="w-5 h-5" />
          </button>
          <button
            onClick={() => router.push("/status")}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300"
            title="Scholarship Status"
          >
            <FileText className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <input
          type="text"
          className="p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/3 text-gray-900 placeholder-gray-500 mb-2 md:mb-0"
          placeholder="Search scholarships by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex space-x-4">
          <select
            className="p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
            value={amountFilter}
            onChange={(e) => setAmountFilter(e.target.value)}
          >
            <option value="all">Filter by Award Amount</option>
            <option value="$1000+">$1,000+</option>
            <option value="$5000+">$5,000+</option>
            <option value="$10000+">$10,000+</option>
          </select>
          <select
            className="p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
            value={majorFilter}
            onChange={(e) => setMajorFilter(e.target.value)}
          >
            <option value="all">Filter by Major</option>
            {allMajors.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
          <select
            className="p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
            value={gpaFilter}
            onChange={(e) => setGPAfilter(e.target.value)}
          >
            <option value="all">GPA</option>
            {allGPA.map((gpa) => (
              <option key={gpa} value={gpa.toString()}>
                {Number(gpa).toFixed(1)}+
              </option>
            ))}
          </select>
          <select
            className="p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
            value={deadlineFilter}
            onChange={(e) => setDeadlineFilter(e.target.value)}
          >
            <option value="all">Filter by Deadline</option>
            <option value="approaching-soon">Approaching Soon (≤ 4 weeks)</option>
            <option value="4+">4+ weeks</option>
            <option value="6+">6+ weeks</option>
            <option value="12+">12+ weeks</option>
            <option value="farthest-deadline">Farthest Deadline (≥ 15 weeks)</option>
          </select>
        </div>
      </div>

      {/* Scholarship List */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className={`relative shadow-lg rounded-lg border p-6 flex flex-col transition-transform ${
                savedScholarships[scholarship.id] ? "bg-yellow-100" : "bg-white"
              }`}
            >
              {isBestMatch(scholarship) && (
                <div className="absolute -top-3 -left-3 bg-yellow-500 text-white rounded-full p-2 shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
              )}

              <button
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
                onClick={() => toggleBookmark(scholarship.id)}
              >
                <Bookmark
                  className={`w-6 h-6 ${
                    savedScholarships[scholarship.id] ? "text-yellow-500" : "text-gray-400"
                  }`}
                />
              </button>

              <h3 className="text-2xl font-semibold text-[#1e5288] mb-2">
                {scholarship.name}
              </h3>
              <p className="text-gray-600">
                <strong>Majors:</strong> {extractMajors(scholarship.description).join(", ") || "Any"}
              </p>
              <p className="text-gray-600">
                <strong>Amount:</strong> ${Number(scholarship.amount).toLocaleString()}
              </p>
              <p className="text-gray-600">
                <strong>Deadline:</strong>{" "}
                {scholarship.deadline ? new Date(scholarship.deadline).toLocaleDateString() : "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Min GPA:</strong>{" "}
                {extractGPA(scholarship.description) ? Number(extractGPA(scholarship.description)).toFixed(1) : "N/A"}
              </p>
              <div className="mt-4">
                <label className="text-gray-600 text-sm font-semibold mr-2">Status:</label>
                <select
                  className="p-1 border rounded shadow-sm text-gray-600"
                  value={scholarshipStatus[scholarship.id] || ""}
                  onChange={(e) => {
                    const updatedStatus = { ...scholarshipStatus, [scholarship.id]: e.target.value };
                    setScholarshipStatus(updatedStatus);
                    localStorage.setItem("scholarshipStatus", JSON.stringify(updatedStatus));
                  }}
                >
                  <option value="">Select</option>
                  <option value="Applied">Applied</option>
                  <option value="Won">Won</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="mt-auto">
                <Link
                  href={`/scholarships/${scholarship.id}`}
                  className="block bg-[#ab0520] text-white text-center font-medium py-2 rounded mt-4 hover:bg-[#8b0015] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center text-sm col-span-3">
            No scholarships match the search criteria.
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#F5F5DC] w-full py-20 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between px-10 max-w-screen-xl mx-auto">
          <div className="w-60 h-auto">
            <img
              src="/images/financialaid_logo.png"
              alt="Financial Aid Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-700 text-center md:text-left mt-6 md:mt-0">
            © 2025 The Arizona Board of Regents on behalf of{" "}
            <a
              href="https://www.arizona.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              The University of Arizona
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
}