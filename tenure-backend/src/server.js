import "dotenv/config";
import express from "express";
import cors from "cors";
import { supabaseAdmin } from "./lib/supabaseAdmin.js";
import { provisionUser } from "./services/provisionUser.js";
import { requireAuth } from "./middleware/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/auth/provision", async (req, res) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ error: "Missing Bearer token" });

    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) return res.status(401).json({ error: "Invalid token" });

    const authUserId = data.user.id;
    const email = data.user.email;

    const user = await provisionUser({ authUserId, email });
    return res.json({ user });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Server error" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Tenure backend listening on :${port}`));

app.get("/me", requireAuth, (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
  });
});
