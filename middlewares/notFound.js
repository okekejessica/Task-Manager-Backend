// A middleware in backend is like a middleman that sits between the incoming request from the client and the final response from the server, it is a function that can modify the request, process it, handle it or handle certain task before passing it onto the next part of the code or sending back a response -- it acts as the middleman between the server and the client.

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
