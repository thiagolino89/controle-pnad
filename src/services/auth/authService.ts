import { supabase } from "../supabase";
import type { User } from "@supabase/supabase-js";
import type { LoginCredentials, AuthUser } from "../../types/auth";

class AuthService {
  async login({ email, password }: LoginCredentials) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return {
      session: data.session,
      user: data.user ? this.mapUser(data.user) : null,
    };
  }

  async logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  }

  async getSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    return data.session;
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      throw error;
    }

    if (!data.user) {
      return null;
    }

    return this.mapUser(data.user);
  }

  async forgotPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      throw error;
    }
  }

  async updatePassword(password: string) {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      throw error;
    }
  }

  private mapUser(user: User): AuthUser {
    return {
      id: user.id,
      email: user.email ?? "",
    };
  }
}

export const authService = new AuthService();