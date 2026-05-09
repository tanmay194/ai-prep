import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../auth.context";
import { login, register, logout } from "../services/auth.api.js";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;
    const navigate = useNavigate();

    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const data = await login({ email, password });
            setUser(data.user);
            navigate("/");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);
        try {
            //const data =
             await register({ username, email, password });
            //setUser(data.user);
            navigate("/login");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
            navigate("/login");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return { user, loading, handleRegister, handleLogin, handleLogout };
};