import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import  api  from "@/api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthContextProps {
  user: User | null;
  login: (emailOrCpf: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: any = jwtDecode(token);
      setUser(decoded);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  async function login(emailOrCpf: string, password: string) {
    try {
      const { data } = await api.post("/auth/login", { email: emailOrCpf, password });

      localStorage.setItem("token", data.token);
      const decoded: any = jwtDecode(data.token);

      setUser(decoded);
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      navigate("/ranking");
    } catch (err) {
      console.error("Erro ao fazer login", err);
      alert("Credenciais inválidas!");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
