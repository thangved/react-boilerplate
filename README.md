# React Boilerplate

> React Boilerplate with Vite, Redux, Axios and others.

## Stack

- React
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

## Configuration 📝

Copy the `.env.example` file to `.env.local` and configure the environment variables.

```bash
cp .env.example .env.local
```

| Variable       | Description |
| -------------- | ----------- |
| `VITE_API_URL` | API URL     |

## Structure 📁

```bash
./src
├── assets
│   └── logo.svg # App logo
├── components # Reusable components
│   ├── first-loader
│   │   ├── first-loader.module.scss
│   │   └── index.tsx
│   └── logo
│       ├── index.tsx
│       └── logo.module.scss
├── hooks # Custom hooks
│   ├── useAppDispatch.ts
│   └── useAppSelector.ts
├── http
│   └── http.ts # Axios instance
├── index.css
├── layouts # Layouts
│   ├── admin # Admin layout (access by /admin)
│   │   └── index.tsx
│   ├── default # Default layout (wraps all pages)
│   │   └── index.tsx
│   └── user # User layout (access by /user)
│       └── index.tsx
├── main.tsx
├── models # API models
│   ├── Base.ts # Base model
│   └── User.ts # Example user model (extends from Base)
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
