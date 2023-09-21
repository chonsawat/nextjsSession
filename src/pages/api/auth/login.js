// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const user = {
      name: "Chonsawat Nakanam",
      role: "Admin",
    };
    var token = jwt.sign(user, process.env.NEXT_PUBLIC_JWT_SECRET, {
      algorithm: "HS256",
    });
    res.status(200).json({ token });
  }
}
