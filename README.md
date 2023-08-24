# Reproduction for Playwright CT watch mode issue

Steps to reproduce issue:

1. Install packages: `yarn`
2. Run tests in watch mode: `yarn test-i`
    1. Edit the demo hook at (`apps/frontend/src/demo/demo-hook.ts`)
       to increase the counter by 2 each time. Then save.
    2. An error should now appear in the terminal:  
       > Identifier '__pwReact' has already been declared (Note that you need plugins to import files that are not JavaScript)
