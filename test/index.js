import { test, is, ok, run, throws } from '../build/esm/index.js'

run(async () => {
  await import('./test-1.js')
  await import('./test-1.js')
})
