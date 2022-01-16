const fs = require("fs");
const path = require("path");

const main = () => {
  const jsonDirPath = path.resolve(__dirname, "..", "build", "json");

  // remove _metadata.json
  console.log("remove _metadata.json");
  fs.unlinkSync(path.resolve(jsonDirPath, "_metadata.json"));

  // rename json files
  const filenames = fs.readdirSync(jsonDirPath);
  console.log(`rename ${filenames}`);
  filenames.forEach((filename) => {
    // zero start
    // remove ext
    const oldPath = path.resolve(jsonDirPath, filename);
    const newPath = path.resolve(jsonDirPath, `${+filename.split(".")[0] - 1}`);
    fs.renameSync(oldPath, newPath);
  });

  // replace content
  const newFilenames = fs.readdirSync(jsonDirPath);
  console.log(`replace content ${newFilenames}`);
  newFilenames.forEach((filename) => {
    // read
    const rawData = fs.readFileSync(path.resolve(jsonDirPath, filename));
    const metadata = JSON.parse(rawData);

    // replace name
    metadata.name = `${metadata.name.split("#")[0]}#${filename}`;

    // replace image
    metadata.image = `${metadata.image.replace(
      metadata.image.split("/")[3],
      ""
    )}${filename}`;

    // replace edition
    metadata.edition = +filename;

    // write
    const data = JSON.stringify(metadata, null, 2);
    fs.writeFileSync(path.resolve(jsonDirPath, filename), data);
  });
};

main();
