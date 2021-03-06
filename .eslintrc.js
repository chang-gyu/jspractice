module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
		"no-console": 0,
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            1,
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"comma-dangle": [
			2,
			"always-multiline"
		],
    }
};
