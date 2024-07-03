const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timeout 1 has expired"), 0);
setImmediate(() => console.log("Immediate 1 has expired"));
process.nextTick(() => console.log("Process.nextTick() has executed"));

fs.readFile("test-file.txt", "utf8", () => {
  console.log("I/O finished reading text file");

  setTimeout(() => console.log("Timeout 2 has expired"), 0);
  setTimeout(() => console.log("Timeout 3 has expired"), 3000);
  setImmediate(() => console.log("Immediate 2 has expired"));

  process.nextTick(() => console.log("Process.nextTick() has executed"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.group("password encrypted in " + (Date.now() - start));
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.group("password encrypted in " + (Date.now() - start));
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.group("password encrypted in " + (Date.now() - start));
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.group("password encrypted in " + (Date.now() - start));
  });
});

console.log("Hello from top-level code");
