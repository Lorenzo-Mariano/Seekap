export default function handler(req, res) {
  if (req.method === "POST") {
    const {username, password} = JSON.parse(req.body);

    if (!username) {
      return res.status(403).json({
        message: "Username is missing",
      });
    }
    if (!password) {
      return res.status(403).json({
        message: "Password is missing",
      });
    }

    return res.status(200).json({
      message: "Login was successful",
    });
  }

  return res
    .status(404)
    .json({ message: "This endpoint only supports post methods." });
}
