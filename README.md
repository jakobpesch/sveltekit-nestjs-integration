# Reproduction for integration of sveltekit in nestjs

Steps to reproduce:

1. Install dependencies in both directories `nestjst` and `sveltekit`

2. Build sveltekit app into `/nestjs/svelte-build`

In `/sveltekit` run:

```
npm run build
```

2. Serve NestJS project using the sveltekit app.

In `/nestjs` run:

```
npm run start:dev
```

You should see an error:

```
/Users/koefte/sveltekit-nestjs-integration/nestjs/svelte-build/handler.js:1
import './shims.js';
^^^^^^

SyntaxError: Cannot use import statement outside a module
```

With `esModuleInterop` and `allowJs` added to the `/nestjs/tsconfig.json`:

```json
{
  "compilerOptions": {
    ...
    "esModuleInterop": true,
    "allowJs": true
  }
}
```

The following error comes:

```
/Users/koefte/sveltekit-nestjs-integration/nestjs/svelte-build/handler.js:1
import './shims.js';
^^^^^^

SyntaxError: Cannot use import statement outside a module
```
