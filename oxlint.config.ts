import { defineConfig } from "oxlint";

// https://oxc.rs/docs/guide/usage/linter/config.html
export default defineConfig({
    options: { typeAware: true, typeCheck: true },
    plugins: ["eslint", "typescript", "unicorn", "oxc", "jsdoc", "node", "promise"],
    env: {
        builtin: true,
        browser: true,
        node: true,
    },
    categories: {
        correctness: "error",
        nursery: "warn",
        pedantic: "off",
        perf: "warn",
        restriction: "off",
        style: "off",
        suspicious: "warn",
    },
    rules: {
        "no-useless-concat": "off",
        "no-shadow": "off",
    },
    ignorePatterns: ["node_modules", ".next", "pnpm-lock.yaml"],
});
