import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import withSolid from "rollup-preset-solid"

import pkg from "./package.json"

const config = [
  {
    input: "./index.tsx",
    output: [
      {
        file: "./dist/index.cjs.js",
        format: "cjs",
      },
      {
        file: "./dist/index.esm.js",
        format: "es",
      },
    ],
    external: [...Object.keys(pkg.peerDependencies)],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
]

export default withSolid(config)
