# Custom Build

## Description

This project is using [webpack](https://webpack.js.org/) to create a build.

So it's kinda simple to create a custom build.

Just follow the steps below.

## Step 1 - webpack.config.js

In the file tree you'll find a `webpack.config.js` file, open and you will find a configuration more or less similar to the one below.

```javascript
const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	optimization: { minimize: true, }, // false/true -> devolvement/production
	experiments: { outputModule: true, },
	output: {
		path: path.resolve("build"),
		filename: "Guardar.min.js",
		libraryTarget: "module", // module/commonjs2/window
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: "babel-loader",
			},
		],
	},
	resolve: { extensions: [".js"], },
};
```
## Step 2 - change the configuration

You probably just will want to change 3 properties:

### Optimization and Minimization
In the property `optimization` you'll find a property called `minimize` that will be used to decide if the build will be devolvement mode or not (minimize or not).

- If you want to devolvement build, just set it to `false`.
- If you want to production build, just set it to `true`.

### Filename
In the property `filename` you'll find the name of the file that will be created (the output file). Just change the file name to whatever name you need.
Example:

- `Guardar.min.js`;
- etc...

### Library Target
In the property `libraryTarget` you'll find the target of the library.

- If you want to create a module build, just set it to `module`.
- If you want to create a node build, just set it to `commonjs2`.
- If you want to create a window build, just set it to `window`.
- Etc... you can find more information in the [webpack documentation](https://webpack.js.org/configuration/output/#outputlibrarytarget).

## Step 3 - Build

Finally, you'll need to run the command `npm run compile` in the terminal.

Check you folder tree, and in the folder build you'll find the file build file with the name of the file you've changed in the configuration.
