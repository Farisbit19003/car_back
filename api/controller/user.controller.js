import { comparepassword } from "../helper/auth.helper";
import User from "../schema/user.schema";


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    // If the user does not exist or is logged out, return an error
    if (!user || user.isLoggedOut) {
      return res.json({ error: "Not Found." ,success:false});
    }
    // Compare the provided password with the hashed password stored in the database
    // const isPasswordValid =  (password, user.password);
    if (password !== user.password) {
      return res.json({ error: "Invalid credentials." ,success:false });
    }
    // Update the user's jwtSecret with the new value
    user.password=undefined;
    // Send the token in the response
    return res.json({ user,success:true });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Failed to log in." });
  }
};
