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

export const localAuth = {
  async login(email, password) {
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
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
  }
};
