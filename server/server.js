import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // 🔁 Replace with your key

app.use(cors());
app.use(express.json());

app.get("/api/trailer", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Search query required" });
  console.log("Hello")

  try {
    const ytRes = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: YOUTUBE_API_KEY,
        q: `${query} official trailer`,
        part: "snippet",
        type: "video",
        maxResults: 1,
      },
    });

    const videoId = ytRes.data.items[0]?.id?.videoId;
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

    if (!embedUrl) {
      return res.status(404).json({ error: "Trailer not found" });
    }

    res.json({ trailerUrl: embedUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
