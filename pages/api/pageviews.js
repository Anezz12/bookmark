"use server";
let pageviews = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    pageviews++;
    res.status(200).json({ pageviews });
  } else if (req.method === "GET") {
    res.status(200).json({ pageviews });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
