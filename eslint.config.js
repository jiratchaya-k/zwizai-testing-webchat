export default [
    {
        extends: ['next/core-web-vitals', 'next/typescript'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-namespace': 'off',
            'react-hooks/exhaustive-deps': 'off',
        },
    },
]
