import { useState } from "react";
import { loginApi, type LoginCredentials } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login: setUser } = useAuth(); // 👈 AuthContext

  const login = async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);

      const data = await loginApi(credentials);

      // ✅ Store token
      localStorage.setItem("token", data.token);

      // ✅ Store user globally
      setUser(credentials.username);

      return data;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
