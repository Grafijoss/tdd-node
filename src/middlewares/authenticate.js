module.exports = (req, res, next) => {
  const userId = req.header("user_id");
  // se puede ver un console.log desde la consola su el servidor esta encendido
  console.log(userId);
  if (userId !== "1") {
    return res.sendStatus(403);
  }
  next();
};
