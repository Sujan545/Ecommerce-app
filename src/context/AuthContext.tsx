import { createContext, useContext, useState, useEffect } from "react";
import LoginModal from "../utils/LoginModal";

interface User {
  id: number;
  username: string;
}

type AuthContextType = {
  user: User | null;
  login: (username: string, id: number) => void;
  logout: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  loginModalOpen: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (username: string, id: number) => {
    const userData = { username, id };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setLoginModalOpen(false); // close modal on login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <AuthContext.Provider value={{  user, 
      login, 
      logout, 
      openLoginModal, 
      closeLoginModal, 
      loginModalOpen }}>
      {children}
      {loginModalOpen && <LoginModal isOpen={loginModalOpen} onClose={closeLoginModal} />}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
