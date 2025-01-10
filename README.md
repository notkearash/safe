![safeawait banner](./safeawait.png)

Handle your await/async promises safely without try/catch blocks.

## Installation
<details open>
  <summary>npm</summary>

  ```bash
  npm i safeawait
  ```
</details>

<details>
  <summary>pnpm</summary>

  ```bash
  pnpm add safeawait
  ```
</details>

<details>
  <summary>bun</summary>

  ```bash
  bun i safeawait
  ```
</details>

<details>
  <summary>yarn</summary>

  ```bash
  yarn add safeawait
  ```
</details>

## Usage

```ts
import { safeAwait } from 'safeawait';

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