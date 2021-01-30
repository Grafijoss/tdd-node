const { default: Axios } = require("axios");

module.exports = ({ axios }) => ({
  post: async (req, res) => {
    await axios.get("https://jsonplaceholder.typicode.com/users");
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      req.body
    );
    // data { id: 1000 }
    res.status(201).send(data);
  },
});
