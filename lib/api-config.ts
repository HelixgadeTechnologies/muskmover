export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.muskmover.ng/api";

export const API_DOCS_URL = "https://api.muskmover.ng/api-docs/";

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    me: `${API_BASE_URL}/auth/me`,
  },
  equipment: {
    list: `${API_BASE_URL}/equipment`,
    detail: (id: string | number | null) => `${API_BASE_URL}/equipment/${id ?? ""}`,
  },
  vessels: {
    list: `${API_BASE_URL}/vessels`,
    detail: (id: string | number | null) => `${API_BASE_URL}/vessels/${id ?? ""}`,
  },
  orders: {
    create: `${API_BASE_URL}/orders`,
    list: `${API_BASE_URL}/orders`,
    detail: (id: string | number | null) => `${API_BASE_URL}/orders/${id ?? ""}`,
  },
  companies: {
    list: `${API_BASE_URL}/companies`,
    detail: (id: string | number | null) => `${API_BASE_URL}/companies/${id ?? ""}`,
    verify: (id: string | number | null) => `${API_BASE_URL}/companies/${id ?? ""}/verify`,
  },
  notifications: {
    list: `${API_BASE_URL}/notifications`,
    read: (id: string | number | null) => `${API_BASE_URL}/notifications/${id ?? ""}/read`,
  },
  uploads: {
    upload: `${API_BASE_URL}/uploads`,
    delete: (publicId: string) => `${API_BASE_URL}/uploads/${publicId}`,
  },
};
