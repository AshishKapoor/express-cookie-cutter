import { defineConfig } from 'orval'

export default defineConfig({
  node: {
    input: '../schema/node-api.yaml',
    output: {
      target: 'app/client/gen/node/index.js',
      schemas: 'app/client/gen/node',
      mode: 'tags-split',
      mock: false,
      prettier: true,
      client: 'swr',
      override: {
        mutator: {
          path: 'app/client/http-node.js',
          name: 'httpNode',
        },
      },
    },
  },
})
