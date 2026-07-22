import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
  } from "react";
  import type { Session } from "@supabase/supabase-js";
  
  import { supabase } from "../../services/supabase";
  import { authService } from "../../services/auth/authService";
  import type {
    AuthContextType,
    AuthUser,
    LoginCredentials,
  } from "../../types/auth";
  
  interface Props {
    children: ReactNode;
  }
  
  export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
  );
  
  export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
  
    const loadSession = useCallback(async () => {
      try {
        const session = await authService.getSession();
        const user = await authService.getCurrentUser();
  
        setSession(session);
        setUser(user);
      } finally {
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      loadSession();
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async () => {
        const session = await authService.getSession();
        const user = await authService.getCurrentUser();
  
        setSession(session);
        setUser(user);
        setLoading(false);
      });
  
      return () => {
        subscription.unsubscribe();
      };
    }, [loadSession]);
  
    const login = async (credentials: LoginCredentials) => {
      const { session, user } = await authService.login(credentials);
  
      setSession(session);
      setUser(user);
    };
  
    const logout = async () => {
      await authService.logout();
  
      setSession(null);
      setUser(null);
    };
  
    const value = useMemo<AuthContextType>(
      () => ({
        user,
        session,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
      }),
      [user, session, loading]
    );
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }