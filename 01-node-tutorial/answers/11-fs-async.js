const { writeFile } = require("fs")
console.log("at start")

writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  console.log("at point 1")
  if (err) {
    console.log("This error happened: ", err)
  } else {
    writeFile(
      "./temporary/fileB.txt",
      "This is line 2\n",
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log("this error happened again", err)
        } else {
          writeFile(
            "./temporary/fileB.txt",
            "This is line 3\n",
            { flag: "a" },
            (err, result) => {
              if (err) {
                console.log("there are still errors girl", err)
              } else {
                console.log("finito")
              }
            }
          )
        }
      }
    )
  }
})

console.log("at end")
