import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/LoginForm";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return <LoginForm />;
}
