const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const router = require("./api");
const { logger } = require("./utils/logger");
const { errorHandler } = require("./middleware/error-handler");

const app = express();
const port = process.env.PORT || 8080;

logger.info("🤖 Initializing middleware");

app.use(bodyParser.json());
app.use(morgan("tiny", { stream: logger.stream }));
app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`🎧 Listening at http://localhost:${port}/`);
});
