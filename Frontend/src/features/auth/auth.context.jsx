// auth.context.jsx
import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api"; // Ensure this is imported

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start as true to check auth first

  useEffect(() => {
    // auth.context.jsx
    const getAndSetUser = async () => {
      try {
        const data = await getMe();
        if (data && data.user) {
          setUser(data.user);
        } else {
          setUser(null); // Reset state if no user data
        }
      } catch (err) {
        setUser(null); // Force logout in UI if the server says "Unauthorized"
      } finally {
        setLoading(false);
      }
    };

    getAndSetUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
