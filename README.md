# Reactjs_IFB - Integrando Frontend - Backend
Pizza Shop - React


Esse projeto tem como foco exercitar tanto os conceitos que vimos sobre o React, 
quanto a comunicação com APIs via requisições HTTP. 
Também iremos apresentar os testes em aplicação frontend. 
Portanto, iremos desenvolver uma aplicação de gerenciamento de uma pizzaria (dashboard de administrador) utilizando Vite, 
React Router DOM, React Hook Form, shadcn/ui, React Query, Vitest e mais!


# Command to exec
    - npm create vite@latest

# devDependencies
    pnpm add -D tailwindcss postcss autoprefixer
    pnpm i -D @types/node
    pnpm i eslint @rocketseat/eslint-config -D
    pnpm install -D tailwindcss postcss autoprefixer concurrently
    pnpm install -D prettier prettier-plugin-tailwindcss
    pnpm install -D prettier-plugin-tailwindcss
    pnpm i -D eslint-plugin-simple-import-sort
    


# prodDependencies
    npx tailwindcss init -p
    pnpm dlx shadcn-ui@latest init
    # components
        - pnpm dlx shadcn-ui@latest add button
        - pnpm dlx shadcn-ui@latest add input label
        - pnpm install react-router-dom localforage match-sorter sort-by
        - pnpm i react-helmet-async
        - pnpm i react-hook-form zod @hookform/resolvers
        - pnpm install sonner
        - pnpm dlx shadcn-ui@latest add separator

# bibliotecas para serem instaladas no Visual code
    - PostCSS Language Support
    - Tailwind CSS IntelliSense

# https://ui.shadcn.com/ setting
✔ Would you like to use TypeScript (recommended)? … no / yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Zinc
✔ Where is your global CSS file? … src/global.css
✔ Would you like to use CSS variables for colors? … no / yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) … 
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … no / yes
✔ Write configuration to components.json. Proceed? … yes