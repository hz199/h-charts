const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, '../src/packages/main.ts'), function (err, data) {
  if (err) {
    return console.error(err, 111)
  } else {
    fs.writeFile(path.resolve(__dirname, '../libs/es/main.js'), data.toString(),  function(err) {
      if (err) {
        return console.error(err, 222)
      }
    })
  }
})