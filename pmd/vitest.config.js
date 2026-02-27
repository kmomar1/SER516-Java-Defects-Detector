import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        globals: true,
        include: ["tests/**/*.test.js"],

        // Forcing single-threaded execution to avoid issues with shared resources later (Can remove if needed)
        poolOptions: {
            threads: {
                singleThread: true 
            }
        }
    }
});