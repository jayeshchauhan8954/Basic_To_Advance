// open a file and append some content to the existing file

const fs = require("fs");
fs.open("text.txt", "a", function (err, fd) {

    if (err) {
        console.log(fd);
        return;
    }
    fs.write(fd, " This is an additional content", (err, data) => {
        console.log(data)
    })
})


/*
Flag	Description
r	==> To open file to read and throws exception if file doesn’t exists.
r+	==> Open file to read and write. Throws exception if file doesn’t exists.
rs+	==> Open file in synchronous mode to read and write.
w	==> Open file for writing. File is created if it doesn’t exists.
wx	==> It is same as ‘w’ but fails if path exists.
w+	==> Open file to read and write. File is created if it doesn’t exists.
wx+	==> It is same as ‘w+’ but fails if path exists.
a	==> Open file to append. File is created if it doesn’t exists.
ax	==> It is same as ‘a’ but fails if path exists.
a+	==> Open file for reading and appending. File is created if it doesn’t exists.
ax+	==> It is same as ‘a+’ but fails if path exists.0
*/