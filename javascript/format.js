#!/usr/local/bin/node

const fs = require("fs")

function main() {
    let fileName = process.argv[2]

    var text = fs.readFileSync(fileName, "utf-8") 

    text = text.replace(/^\s+/g, "")
    text = text.replace(/\s+/g, " ")
    text = text.replace(/\s+$/g, "")

    var [i, j] = [0, 69]

    while (j < text.length) {
        console.log(text.slice(i, j))
        i += 69
        j += 69
    }

    console.log(text.slice(i, text.length))
}

if (require.main === module) {
    main()
}
