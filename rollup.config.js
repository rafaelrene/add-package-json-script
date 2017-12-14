import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'addPackageJsonScript',
  },
  plugins: [
    resolve({ extensions: ['.js', '.json'] }),
    commonjs({ sourceMap: false }),
    babel({ include: 'src/**', externalHelpers: false, runtimeHelpers: true }),
  ],
  banner: '#!/usr/bin/env node',
};
