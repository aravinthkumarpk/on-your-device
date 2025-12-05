import tseslint from "typescript-eslint";

export default [
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },
    {
        ignores: [
            "node_modules/",
            ".next/",
            "out/",
            "public/worker.js",
            "next-env.d.ts",
        ],
    },
];
