const isAdmin = (req, res, next) => {
    if (req.user.role == "admin") {
      next();
    } else {
      res.status(403).send({ message: "not authorized" });
    }
  };
  
  module.exports =isAdmin