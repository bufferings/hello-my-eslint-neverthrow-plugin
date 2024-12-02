import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import neverthrowPlugin from '@bufferings/eslint-plugin-neverthrow';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  neverthrowPlugin.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.*'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

