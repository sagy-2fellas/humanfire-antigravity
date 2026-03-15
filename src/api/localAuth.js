/**
 * Local Auth — simple localStorage-based authentication
 * No external backend required.
 * 
 * Default credentials:
 *   email:    admin@humanfire.co
 *   password: humanfire2024
 */

const ADMIN_CREDENTIALS = {
  email: "sagy.shein@gmail.com",
  password: "humanfire2024",
  full_name: "Humanfire Admin",
  role: "admin"
};

const SESSION_KEY = "hf_admin_session";
const RESET_KEY = "hf_password_reset";

export const localAuth = {
  async login(email, password) {
    const currentPassword = localStorage.getItem("hf_admin_password") || ADMIN_CREDENTIALS.password;
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === currentPassword
    ) {
      const session = {
        email: ADMIN_CREDENTIALS.email,
        full_name: ADMIN_CREDENTIALS.full_name,
        role: ADMIN_CREDENTIALS.role,
        loggedInAt: new Date().toISOString()
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return session;
    }
    throw new Error("Invalid email or password");
  },

  async logout() {
    localStorage.removeItem(SESSION_KEY);
  },

  async isAuthenticated() {
    return localStorage.getItem(SESSION_KEY) !== null;
  },

  async me() {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) throw new Error("Not authenticated");
    return JSON.parse(session);
  },

  createResetToken(email) {
    if (email !== ADMIN_CREDENTIALS.email) return null;
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    localStorage.setItem(RESET_KEY, JSON.stringify({ email, token, expiresAt }));
    return token;
  },

  validateResetToken(token) {
    const data = localStorage.getItem(RESET_KEY);
    if (!data) return null;
    const parsed = JSON.parse(data);
    if (parsed.token !== token) return null;
    if (new Date(parsed.expiresAt) < new Date()) {
      localStorage.removeItem(RESET_KEY);
      return null;
    }
    return parsed;
  },

  resetPassword(token, newPassword) {
    const data = this.validateResetToken(token);
    if (!data) throw new Error("Invalid or expired reset token");
    ADMIN_CREDENTIALS.password = newPassword;
    localStorage.removeItem(RESET_KEY);
    localStorage.setItem("hf_admin_password", newPassword);
  },

  getPassword() {
    return localStorage.getItem("hf_admin_password") || ADMIN_CREDENTIALS.password;
  }
};
