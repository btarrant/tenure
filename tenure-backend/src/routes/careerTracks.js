import express from "express";
import {
  listCareerTracks,
  createCareerTrack,
  updateCareerTrack,
  updateTrackVisibility,
} from "../services/careerTrackService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tracks = await listCareerTracks(req.user.id);
  res.json(tracks);
});

router.post("/", async (req, res) => {
  const track = await createCareerTrack(req.user.id, req.body);
  res.status(201).json(track);
});

router.patch("/:id", async (req, res) => {
  const track = await updateCareerTrack(
    req.user.id,
    req.params.id,
    req.body
  );
  res.json(track);
});

router.patch("/:id/visibility", async (req, res) => {
  const { visibility } = req.body;

  if (!visibility) {
    return res.status(400).json({ error: "visibility is required" });
  }

  const track = await updateTrackVisibility(
    req.user.id,
    req.params.id,
    visibility
  );

  res.json(track);
});

export default router;
