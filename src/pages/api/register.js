export default function handler(req, res) {
    if (req.method === "POST") {
      const {username, password} = JSON.parse(req.body);
  
      if (!username) {
        return res.status(403).json({
          message: "You need a username for registering",
        });
      }
      if (!password) {
        return res.status(403).json({
          message: "You need a password for registering",
        });
      }
  
      return res.status(200).json({
        message: "Register was successful",
      });
    }
  
    return res
      .status(404)
      .json({ message: "This endpoint only supports post methods" });
  }
  