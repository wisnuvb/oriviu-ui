import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
// import scss from "rollup-plugin-scss";

const pkg = require("./package.json");

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      resolve({ preferBuiltins: true }),
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      commonjs({ include: ["./src/index.ts", "node_modules/**"] }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        modules: true,
        inject: {
          insertAt: "top",
        },
      }),
      del({ targets: ["dist/*"] }),
      // scss({
      //   extract: false,
      //   modules: true, // keep css in module
      //   use: ["sass"],
      //   include: ["./**/*.css", "./**/*.scss", "./**/*.sass"],
      //   output: "dist/css/index.css",
      //   failOnError: true,
      //   outputStyle: "compressed",
      // }),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, ...Object.keys(pkg.devDependencies || {})],
  },
];
