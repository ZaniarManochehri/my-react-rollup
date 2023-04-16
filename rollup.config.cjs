import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true
        },
        {
            name: 'your-library-name',
            file: 'dist/index.umd.js',
            format: 'umd',
            globals: {
                react: 'React'
            },
            exports: 'named',
            sourcemap: true
        },
        {
            name: 'your-library-name',
            file: 'dist/index.umd.min.js',
            format: 'umd',
            globals: {
                react: 'React'
            },
            exports: 'named',
            plugins: [terser()],
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: true
        })
    ],
    external: ['react', 'react-dom']
};
