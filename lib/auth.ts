// Mock authentication functions
export async function getCurrentUser() {
  // In a real app, this would check JWT tokens, sessions, etc.
  return {
    id: 1,
    name: "John Doe",
    email: "john@company.com",
    role: "Licensed User",
  }
}

export async function login(email: string, password: string) {
  // Mock login - in real app, validate against database
  if (email === "admin@iias.com" && password === "admin123") {
    return { success: true, user: { id: 1, email, role: "Super Admin" } }
  }
  if (email === "user@company.com" && password === "user123") {
    return { success: true, user: { id: 2, email, role: "Licensed User" } }
  }
  return { success: false, error: "Invalid credentials" }
}
