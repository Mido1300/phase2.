import initialUsers from "../../utils/initialUsers";

let users = [...initialUsers];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const newUser = { ...req.body, id: users.length + 1, joinDate: new Date().toISOString().split("T")[0] };
    users.push(newUser);
    res.status(201).json(newUser);
  } else if (req.method === "PUT") {
    const { id, ...updateData } = req.body;
    users = users.map((user) => (user.id === id ? { ...user, ...updateData } : user));
    res.status(200).json({ id, ...updateData });
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    users = users.filter((user) => user.id !== id);
    res.status(200).json({ message: "User deleted" });
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
