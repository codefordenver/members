const { promisify } = require("util");
const fs = require("fs");
const path = require("path");
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const graphcoolProjectFilePath = path.resolve(__dirname, '../project.graphcool');
const schemaFilePath = path.resolve(__dirname, '../schema.graphql');

async function setupNewGraphcoolEnvironment() {
  try {
    const graphcoolProjectFile = await readFileAsync(graphcoolProjectFilePath, { encoding: "utf8" });
    const modifiedProjectFile = graphcoolProjectFile.replace(/(auth0UserId)/, "# auth0UserId");
    console.log("writing new graphcool schema file");
    await writeFileAsync(schemaFilePath, modifiedProjectFile);

    console.log("done");
  } catch (err) {
    console.error("There was an error setting up a new graphcool environment");
    console.error(err);
  }
}

setupNewGraphcoolEnvironment();
