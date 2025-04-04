import { auth } from "./auth";
import { API_BASE_URL } from "./utils";

type ApiResponse<T = any> = Promise<T>;
type ApiError = {
  message?: string;
  detail?: string;
  [key: string]: any;
};

type HeadersInit = Record<string, string>;

export const api = {
  async request<T = any>(url: string, options: RequestInit = {}): ApiResponse<T> {
    const token = localStorage.getItem("access_token");
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers as Record<string, string> | undefined),
    };

    const res = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers,
    });

    if (res.status === 401) {
      try {
        await auth.refresh();
        return this.request<T>(url, options);
      } catch (error) {
        auth.logout();
        window.location.href = "/login";
        throw error;
      }
    }

    if (!res.ok) {
      const errorData: ApiError = await res.json().catch(() => ({}));
      throw new Error(
        errorData.message || errorData.detail || "Request failed"
      );
    }

    return res.json() as Promise<T>;
  },

  get<T = any>(url: string): ApiResponse<T> {
    return this.request<T>(url);
  },

  post<T = any>(url: string, body: any): ApiResponse<T> {
    return this.request<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  patch<T = any>(url: string, body: any): ApiResponse<T> {
    return this.request<T>(url, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  },

  delete<T = any>(url: string): ApiResponse<T> {
    return this.request<T>(url, { method: "DELETE" });
  },

  upload<T = any>(url: string, formData: FormData): ApiResponse<T> {
    const headers: HeadersInit = {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    };
    
    // Create new headers object without Content-Type
    const { 'Content-Type': _, ...uploadHeaders } = headers;

    return this.request<T>(url, {
      method: "POST",
      body: formData,
      headers: uploadHeaders,
    });
  },
};