module.exports = {
	projects: [
		{
			displayName: 'test-unit',
			testEnvironment: 'node',
			transform: {
				'.(ts|tsx)': 'ts-jest'
			},
			moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
			testRegex: '(/test/.*|(\\.|/)(tests))\\.(ts|js)x?$',
			testPathIgnorePatterns: ['./test/support/', './test/data/'],
			coverageDirectory: 'coverage',
			collectCoverageFrom: ['lib/**/*.{ts,tsx,js,jsx}', '!lib/**/*.d.ts']
		},
		{
			displayName: 'eslint',
			runner: 'jest-runner-eslint',
			moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
			testMatch: ['**/*.{ts,tsx}'],
			testPathIgnorePatterns: ['build', 'coverage', 'dist', './test/support/']
		}
	]
};
