<h3 align="center"> 
  Vue Flippable Card Carousel
</h3>

<h4 align="center">
  <a href="https://vue-flippable-card-carousel.vercel.app/">View Demo</a>
</h4>

---

<img src="https://user-images.githubusercontent.com/4216651/128390005-f5d2c529-9ad7-4aa9-8d6e-1a09942db935.gif" alt="carousel-introduction" width="100%"/>

## About The Project

1. There are `App` and child component `FlippableCard`

2. You can control the `Flippable Card Carousel` in various way

   - Rotate the card:

     - Click the arrow icons
     - Click the next or previous card face
     - Use key `ArrowRgiht` and `ArrowLeft`

   - Flip the card:

     - Mouse over the card
     - Use key `ArrowUp` and `ArrowDown`

### Built With

- Vue

- TypeScript

- Tailwind CSS

- SCSS

## Getting Started

### Prerequisites

Before you start, install `Yarn` package to global.

```sh
npm install --global yarn
```

### Installation

1.  Clone the repo

    ```sh
    git clone https://github.com/VannsKang/Vue-Flippable-Card-Carousel.git
    ```

2.  Install NPM packages

    ```sh
    yarn install
    ```

3.  Run the project

    ```sh
    yarn serve
    ```

4.  Build the package

    ```sh
    yarn build
    ```

## Project Tree

```js
.
├── public
├── src/
│   ├── assets
│   ├── components/
│   │   ├── index.ts
│   │   └── FlippableCard.vue
│   ├── styles/
│   │   └── index.css
│   ├── typings/
│   │   └── index.ts
│   ├── App.vue
│   ├── custom.d.ts
│   ├── main.ts
│   └── ...
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── vue.config.js
└── ...
```

## NPM Packages

#### package.json

```json
"dependencies": {
  "core-js": "^3.6.5",
  "vue": "^2.6.11"
},
"devDependencies": {
  "@tailwindcss/postcss7-compat": "^2.2.4",
  "@typescript-eslint/eslint-plugin": "^4.18.0",
  "@typescript-eslint/parser": "^4.18.0",
  "@vue/cli-plugin-babel": "~4.5.0",
  "@vue/cli-plugin-eslint": "~4.5.0",
  "@vue/cli-plugin-typescript": "~4.5.0",
  "@vue/cli-service": "~4.5.0",
  "@vue/eslint-config-typescript": "^7.0.0",
  "autoprefixer": "^9",
  "eslint": "^6.7.2",
  "eslint-plugin-vue": "^6.2.2",
  "node-sass": "^6.0.1",
  "sass": "~1.32.0",
  "sass-loader": "^10",
  "postcss": "^7",
  "tailwindcss": "npm:@tailwindcss/postcss7-compat",
  "typescript": "~4.1.5",
  "vue-svg-loader": "^0.16.0",
  "vue-template-compiler": "^2.6.14"
}
```

## ETC

This project is obtimized & tested in `Chrome`.

---

<h3 align="center">
Developed by SOOM
</h3>

<h4 align="center">
<a href="https://soomlog.vercel.app/">Soomlog.vercel.app</a>
</h4>
