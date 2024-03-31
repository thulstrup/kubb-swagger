import { defineConfig } from "@kubb/core";
import { definePlugin as createSwagger } from "@kubb/swagger";
import { definePlugin as createSwaggerTanstackQuery } from "@kubb/swagger-tanstack-query";
import { definePlugin as createSwaggerTS } from "@kubb/swagger-ts";

export default defineConfig({
  input: {
    path: "./spec.json",
  },
  output: {
    path: "./src/gen",
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTS({}),
    createSwaggerTanstackQuery({
      output: {
        path: "./hooks",
      },
      query: {
        methods: ["get", "post"],
      },
    }),
  ],
});
