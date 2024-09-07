import cors from "cors"; // Import CORS
import express from "express";
import fs from "fs"; // Import fs to write the YAML file
import yaml from "js-yaml"; // Import js-yaml to convert JSON to YAML
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import userRouter from "./routes/user.js";

const app = express();
const port = 3000;

// Enable CORS for localhost:5173
app.use(
  cors({
    origin: "http://localhost:3001", // Allow requests from this origin
  })
);

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Create and save OpenAPI YAML file
const yamlFilePath = "../schema/node-api.yaml";
fs.writeFileSync(yamlFilePath, yaml.dump(swaggerDocs)); // Convert JSON to YAML and save

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Please use /api-docs to access the API");
});

app.use("/api/v1/", userRouter);

// Serve the YAML file
app.get("/openapi.yaml", (req, res) => {
  res.sendFile(yamlFilePath, { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
