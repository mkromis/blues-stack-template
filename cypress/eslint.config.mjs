export default [{
    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            tsconfigRootDir: "../cypress",
            project: "./tsconfig.json",
        },
    },
}];