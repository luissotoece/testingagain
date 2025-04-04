// // "use client";

// // import { useState, useEffect } from "react";
// // import { useParams, useRouter } from "next/navigation";

// // interface User {
// //   id: number;
// //   username: string;
// //   email: string;
// //   first_name: string;
// //   last_name: string;
// //   phone?: string;
// // }

// // const UserEdit = () => {
// //   const params = useParams();
// //   const id = params?.id as string;
// //   const router = useRouter();

// //   const [user, setUser] = useState<User | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   useEffect(() => {
// //     if (!id) return;

// //     fetch(`http://localhost:8000/api/accounts/users/${id}/`)
// //       .then((res) => res.json())
// //       .then((data) => setUser(data))
// //       .catch(() => setError("Failed to load user"))
// //       .finally(() => setLoading(false));
// //   }, [id]);

// //   const handleSubmit = async (event: React.FormEvent) => {
// //     event.preventDefault();
  
// //     if (!user) return;

// //     try {
// //       const response = await fetch(`http://localhost:8000/api/accounts/users/${id}/update/`, {
// //         method: "PATCH",
// //         headers: {
// //             "Content-Type": "application/json",
// //             "Authorization": `Bearer ${localStorage.getItem("access_token")}`
// //         },
// //         body: JSON.stringify(user),
// //         credentials: "include",
// //     });

// //         if (!response.ok) throw new Error("Update failed");

// //         setSuccess("User updated successfully!");
// //         setError("");
// //     } catch (err) {
// //         setError("Update failed");
// //     }
// // };

// //   if (loading) return <p>Loading...</p>;
// //   if (!user) return <p>User not found.</p>;

// //   return (
// //     <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
// //       <h1 style={{ textAlign: "center" }}>Edit User</h1>

// //       {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
// //       {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

// //       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// //         <div>
// //           <label>Username:</label>
// //           <input type="text" value={user.username} readOnly style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
// //         </div>

// //         <div>
// //           <label>Email:</label>
// //           <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
// //         </div>

// //         <div>
// //           <label>First Name:</label>
// //           <input type="text" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
// //         </div>

// //         <div>
// //           <label>Last Name:</label>
// //           <input type="text" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
// //         </div>

// //         <div>
// //           <label>Phone:</label>
// //           <input type="text" value={user.phone || ""} onChange={(e) => setUser({ ...user, phone: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
// //         </div>

// //         <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}>
// //           Save Changes
// //         </button>
// //       </form>

// //       <button
// //         onClick={() => router.push(`/users/${id}/history`)}
// //         style={{ marginTop: "15px", width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
// //       >
// //         View Change History
// //       </button>
// //     </div>
// //   );
// // };

// // export default UserEdit;

// "use client";

// import { useState, useEffect, FormEvent } from "react";
// import { useParams, useRouter } from "next/navigation";

// interface User {
//   id: number;
//   username: string;
//   email: string;
//   first_name: string;
//   last_name: string;
//   phone?: string;
// }

// const UserEdit = () => {
//   const params = useParams();
//   const id = params?.id as string;
//   const router = useRouter();

//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");
//   const [success, setSuccess] = useState<string>("");

//   useEffect(() => {
//     if (!id) return;
//     fetch(`http://localhost:8000/api/accounts/users/${id}/`)
//       .then((res) => res.json())
//       .then((data: User) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load user");
//         setLoading(false);
//       });
//   }, [id]);

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();
//     if (!user) return;
//     setError("");
//     try {
//       // Retrieve the access token from localStorage (adjust key if needed)
//       const token = localStorage.getItem("access_token");
//       if (!token) {
//         setError("No access token found. Please log in.");
//         return;
//       }
//       const response = await fetch(`http://localhost:8000/api/accounts/users/${id}/update/`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(user),
//       });
//       if (!response.ok) {
//         throw new Error("Update failed");
//       }
//       setSuccess("User updated successfully!");
//       setError("");
//     } catch (err: any) {
//       setError(err.message || "Update failed");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!user) return <p>User not found.</p>;

//   return (
//     <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
//       <h1 style={{ textAlign: "center" }}>Edit User</h1>

//       {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
//       {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={user.username} readOnly style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={user.first_name}
//             onChange={(e) => setUser({ ...user, first_name: e.target.value })}
//             style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             value={user.last_name}
//             onChange={(e) => setUser({ ...user, last_name: e.target.value })}
//             style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         <div>
//           <label>Phone:</label>
//           <input
//             type="text"
//             value={user.phone || ""}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//             style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}>
//           Save Changes
//         </button>
//       </form>

//       <button
//         onClick={() => router.push(`/users/${id}/history`)}
//         style={{ marginTop: "15px", width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//       >
//         View Change History
//       </button>
//     </div>
//   );
// };

// export default UserEdit;


"use client";

import { useState, useEffect, FormEvent } from "react";
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

const UserEdit = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Fetch user data on mount
  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:8000/api/accounts/users/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load user");
        }
        return res.json();
      })
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load user");
        setLoading(false);
      });
  }, [id]);

  // Handler to update the user info (including role)
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) return;
    setError("");
    try {
      // Retrieve the access token from localStorage
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("No access token found. Please log in.");
        return;
      }
      const response = await fetch(`http://localhost:8000/api/accounts/users/${id}/update/`, {
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
      setError(err.message || "Update failed");
    }
  };

  // Handler to delete the user
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("No access token found. Please log in.");
        return;
      }
      const response = await fetch(`http://localhost:8000/api/accounts/users/${id}/`, {
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
      setError(err.message || "Delete failed");
    }
  };

  // Handler to approve a pending role request
  const handleApproveRole = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("No access token found. Please log in.");
        return;
      }
      const response = await fetch(`http://localhost:8000/api/accounts/role-requests/${id}/approve/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Role approval failed");
      }
      // After approval, update the local user state (set role_approved to true)
      setUser((prev) =>
        prev ? { ...prev, role_approved: true } : prev
      );
      setSuccess("Role request approved successfully!");
    } catch (err: any) {
      setError(err.message || "Role approval failed");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center" }}>Edit User</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Username is read-only */}
        <div>
          <label>Username:</label>
          <input type="text" value={user.username} readOnly style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div>
          <label>First Name:</label>
          <input type="text" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        <div>
          <label>Phone:</label>
          <input type="text" value={user.phone || ""} onChange={(e) => setUser({ ...user, phone: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>

        {/* Role Dropdown for elevation */}
        <div>
          <label>Role:</label>
          <select
            value={user.role}
            onChange={(e) =>
              setUser({ ...user, role: e.target.value as User["role"] })
            }
            style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="applicant">Applicant</option>
            <option value="reviewer">Reviewer</option>
            <option value="donor">Donor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* If there is a pending role request, show it */}
        {user.requested_role && !user.role_approved && (
          <div style={{ marginTop: "10px" }}>
            <p style={{ fontStyle: "italic" }}>
              Pending Role Request: {user.requested_role}
            </p>
            <button
              type="button"
              onClick={handleApproveRole}
              style={{
                padding: "10px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Approve Role Request
            </button>
          </div>
        )}

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Save Changes
        </button>
      </form>

      {/* Delete User Button */}
      <button
        onClick={handleDelete}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "10px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete User
      </button>

      {/* View Change History */}
      <button
        onClick={() => router.push(`/users/${id}/history`)}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        View Change History
      </button>
    </div>
  );
};

export default UserEdit;