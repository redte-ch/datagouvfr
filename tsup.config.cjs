module.exports = {
  bundle: true,
  cjsInterop: true,
  clean: true,
  dts: true,
  entry: ['src/**/*.ts'],
  entryPoints: ['src/main.ts'],
  format: ['cjs', 'esm', 'iife'],
  metafile: true,
  minify: true,
  outDir: 'dist',
  shims: true,
  skipNodeModulesBundle: false,
  sourcemap: true,
  splitting: true,
  target: 'esnext',
  watch: false
}
