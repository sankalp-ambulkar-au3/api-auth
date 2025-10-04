import jwt from "jsonwebtoken";

export const authenticator = (req, res, next) => {
  const header = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({
      status: "fail",
      message: "Unauthorized!",
    });
  }
  const token = header.split("")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({
      status: "fail",
      message: "unthorized",
    });
  }
};
