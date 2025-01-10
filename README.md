![safe() banner](./safe.png)

Handle your await/async promises safely without try/catch blocks.

## Installation
<details open>
  <summary>npm</summary>

  ```bash
  npm i @kearash/safe
  ```
</details>

<details>
  <summary>pnpm</summary>

  ```bash
  pnpm add @kearash/safe
  ```
</details>

<details>
  <summary>bun</summary>

  ```bash
  bun i @kearash/safe
  ```
</details>

<details>
  <summary>yarn</summary>

  ```bash
  yarn add @kearash/safe
  ```
</details>

## Usage

```ts
import { safe } from '@kearash/safe';

const fetchData = async () => {
  const [error, data] = await safeAwait(fetch('https://jsonplaceholder.typicode.com/'));
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  console.log('Fetched data:', data);
};

fetchData();
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.