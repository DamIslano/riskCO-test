## Setup
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

# Пости на Nuxt 3 з TypeScript та SCSS

SPA/SSR-додаток, який відображає список постів та детальну інформацію про кожен пост із коментарями, використовуючи публічне API JSONPlaceholder. Реалізовано: пагінацію «Завантажити ще», стани завантаження та помилок, SEO через useHead, адаптивну верстку без UI-бібліотек, типізацію даних через TypeScript, організацію коду з composables та компонентами.

Технології: Nuxt 3, TypeScript, SCSS, SSR, JSONPlaceholder API, **lodash-es**

По ТЗ: Зроблено все, окрім "Збереження скролу", оскільки скрол робив не по сторінці, а в самому div блоці, тому юзати щось на кшталт vueUse для фічі саме в цьому випадку може бути зайвим.


![Preview](/app/assets/images/risk-demo.gif)