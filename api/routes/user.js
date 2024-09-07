import express from "express"; // Import express

// Create a new router
const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users.
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     responses:
 *       201:
 *         description: User created successfully.
 *   /api/v1/users/{id}:
 *     get:
 *       tags:
 *         - Users
 *       summary: Get a user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the user to get
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: User found.
 *         404:
 *           description: User not found.
 *     put:
 *       tags:
 *         - Users
 *       summary: Update a user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the user to update
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: User updated.
 *         404:
 *           description: User not found.
 *     delete:
 *       tags:
 *         - Users
 *       summary: Delete a user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the user to delete
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: User deleted.
 *         404:
 *           description: User not found.
 */

// Define user routes
userRouter.get("/users", (req, res) => {
  res.send("Get all users");
});

userRouter.post("/users", (req, res) => {
  res.send("Create a new user");
});

userRouter.get("/users/:id", (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
});

userRouter.put("/users/:id", (req, res) => {
  res.send(`Update user with id ${req.params.id}`);
});

userRouter.delete("/users/:id", (req, res) => {
  res.send(`Delete user with id ${req.params.id}`);
});

export default userRouter;
