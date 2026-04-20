/**
 * Local Auth — localStorage-based authentication with multi-admin support
 * No external backend required.
 *
 * Default admin:
 *   email:    sagy.shein@gmail.com
 *   password: humanfire2024
 */

const DEFAULT_ADMINS = [
  {
    email: "sagy.shein@gmail.com",
    password: "humanfire2024",
    full_name: "Humanfire Admin",
    role: "admin",
    created_date: "2025-01-01T00:00:00.000Z"
  },
  {
    email: "selma@humanfire.co",
    password: "Don450Nat245",
    full_name: "Selma de Morney",
    role: "admin",
    created_date: "2025-01-01T00:00:00.000Z"
  }
];

const SESSION_KEY = "hf_admin_session";
const RESET_KEY = "hf_password_reset";
const ADMINS_KEY = "hf_admin_accounts";

function getAdmins() {
  const stored = localStorage.getItem(ADMINS_KEY);
  if (!stored) {
    // Seed with default admins (preserve any custom password for first admin)
    const customPassword = localStorage.getItem("hf_admin_password");
    const initial = DEFAULT_ADMINS.map((admin, i) =>
      i === 0 && customPassword ? { ...admin, password: customPassword } : { ...admin }
    );
    localStorage.setItem(ADMINS_KEY, JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(stored);
}

function saveAdmins(admins) {
  localStorage.setItem(ADMINS_KEY, JSON.stringify(admins));
}

export const localAuth = {
  async login(email, password) {
    const admins = getAdmins();
    const admin = admins.find(a => a.email.toLowerCase() === email.toLowerCase());
    if (!admin || admin.password !== password) {
      throw new Error("Invalid email or password");
    }
    const session = {
      email: admin.email,
      full_name: admin.full_name,
      role: admin.role,
      loggedInAt: new Date().toISOString()
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
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

  // Multi-admin management
  listAdmins() {
    return getAdmins().map(({ password, ...rest }) => rest);
  },

  addAdmin({ email, full_name, password }) {
    const admins = getAdmins();
    if (admins.some(a => a.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("An admin with this email already exists");
    }
    const newAdmin = {
      email,
      full_name,
      password,
      role: "admin",
      created_date: new Date().toISOString()
    };
    admins.push(newAdmin);
    saveAdmins(admins);
    return { ...newAdmin, password: undefined };
  },

  removeAdmin(email) {
    const admins = getAdmins();
    if (admins.length <= 1) {
      throw new Error("Cannot remove the last admin");
    }
    const filtered = admins.filter(a => a.email.toLowerCase() !== email.toLowerCase());
    if (filtered.length === admins.length) {
      throw new Error("Admin not found");
    }
    saveAdmins(filtered);
  },

  createResetToken(email) {
    const admins = getAdmins();
    if (!admins.some(a => a.email.toLowerCase() === email.toLowerCase())) return null;
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
    const admins = getAdmins();
    const admin = admins.find(a => a.email.toLowerCase() === data.email.toLowerCase());
    if (admin) {
      admin.password = newPassword;
      saveAdmins(admins);
    }
    localStorage.removeItem(RESET_KEY);
  },

  getPassword() {
    const admins = getAdmins();
    return admins[0]?.password || DEFAULT_ADMINS[0].password;
  }
};
