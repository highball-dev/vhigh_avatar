const fs = require("fs");
const path = require("path");

const main = () => {
  const imagesDirPath = path.resolve(__dirname, "..", "build", "images");

  // rename png files
  const filenames = fs.readdirSync(imagesDirPath);
  console.log(`rename ${filenames}`);
  filenames.forEach((filename) => {
    // zero start
    // remove ext
    const oldPath = path.resolve(imagesDirPath, filename);
    const newPath = path.resolve(
      imagesDirPath,
      `${+filename.split(".")[0] - 1}`
    );
    fs.renameSync(oldPath, newPath);
  });
};

main();
