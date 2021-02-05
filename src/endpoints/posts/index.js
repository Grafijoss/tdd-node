module.exports = ({ axios }) => ({
  post: async (req, res) => {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(users.find((x) => x.id === req.body.userId));
    // console.log(users);
    const found = users.find((x) => x.id === req.body.userId);

    if (found) {
      console.log("siii");
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        req.body
      );
      // data { id: 1000 }
      return res.status(201).send(data);
    }
    console.log(res.sendStatus);
    res.sendStatus(400);
  },
});
