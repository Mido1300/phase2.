import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsAuthenticated(isLoggedIn);
  }, []);

  const login = (username, password) => {
    if (username === "admin" && password === "12345") {
      localStorage.setItem("isLoggedIn", "true");
      setIsAuthenticated(true);
      router.push("/");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return { isAuthenticated, login, logout };
}
