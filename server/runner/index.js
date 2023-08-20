import ivm from "isolated-vm"

const sumStr = `(() => {
	const fs = require("node:fs");

	console.log(fs.readFileSync("package.json", "utf-8"));

	const a = 10;
	const b = 20;
	return a + b;
})()`

// const sumStr = `${calculateSum}`;

const isolated = new ivm.Isolate({ memoryLimit: 128 });
const context = isolated.createContextSync();

// run the sumStr function in the context
const script = isolated.compileScriptSync(sumStr);
const result = script.runSync(context);
console.log(result)
