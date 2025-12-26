export const getUser = (req, res) => {
  res.json({ message: "Get all users" });
};

export const createUser = (req, res) => {
  const { name } = req.body;
  res.json({ message: `User ${name} created` });
};