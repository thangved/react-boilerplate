# React Boilerplate

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fthangved%2Freact-boilerplate.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fthangved%2Freact-boilerplate?ref=badge_shield)
[![CodeFactor](https://www.codefactor.io/repository/github/thangved/react-boilerplate/badge)](https://www.codefactor.io/repository/github/thangved/react-boilerplate)

> React Boilerplate with Vite, Redux, Axios and others.

## Stack

- React + TypeScript
- Sass
- Redux
- React Query
- Axios
- React Router
- PWA
- Husky
- Lint-Staged
- Prettier
- Eslint
- Commitlint

## Installation 🚀

```bash
npm install # or yarn install
```

## Structure 📁

```bash
./src
├── assets
│   └── logo.svg # App logo
├── components # Reusable components
│   ├── FirstLoader
│   │   ├── FirstLoader.module.scss
│   │   ├── FirstLoader.tsx
│   │   └── index.ts
│   └── AppLogo
│       ├── AppLogo.module.scss
│       ├── AppLogo.tsx
│       └── index.ts
├── hooks # Custom hooks
│   ├── useAppDispatch.ts
│   ├── useAppSelector.ts
│   └── index.ts
├── index.css
├── layouts # Layouts
│   ├── admin # Admin layout (access by /admin)
│   │   └── index.tsx
│   ├── default # Default layout (wraps all pages)
│   │   └── index.tsx
│   └── user # User layout (access by /user)
│       └── index.tsx
├── main.tsx
├── types # API models
│   ├── base.ts # Base model
│   └── user.ts # Example user model (extends from Base)
├── pages # Pages
│   ├── admin # Admin pages
│   │   └── index.tsx
│   └── user # User pages
│       └── index.tsx
├── router
│   ├── admin.ts
│   ├── index.ts
│   └── user.ts
├── services
│   ├── base.service.ts
│   ├── crud.service.ts
│   └── token.service.ts
│   └── index.ts
├── store
│   ├── index.ts
│   ├── queryClient.ts
│   └── user.ts
├── utils
│   ├── add.spec.ts
│   └── add.ts
└── vite-env.d.ts
```

## Run on development 💻

```bash
npm run dev
```

## Build 🔨

```bash
npm run build
```

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fthangved%2Freact-boilerplate.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fthangved%2Freact-boilerplate?ref=badge_large)
