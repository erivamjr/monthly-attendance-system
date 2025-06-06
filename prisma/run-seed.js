const { spawn } = require("child_process");
const path = require("path");

const tsNode = spawn(
  "node",
  ["./node_modules/ts-node/dist/bin.js", "prisma/seed.ts"],
  {
    stdio: "inherit",
    shell: true,
  }
);

tsNode.on("error", (err) => {
  console.error("Failed to start subprocess.", err);
});

tsNode.on("close", (code) => {
  process.exit(code);
});
