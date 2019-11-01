# bold-challenge
🍷 BOLD challenge solution

## How to run?

Start the server:

🐳 Using Docker

```
> docker-compose up app_wine_server
```

📜 Without Docker

```
> cd app_wine_server
> npm i
> npm start
```

### Lint

I'm following [Pagar.me JavaScript Style Guide](https://github.com/pagarme/javascript-style-guide) on `app_wine_server`.

To run the lint on the server:

🐳 Using Docker

```
> docker-compose run --rm app_wine_server_lint
```

📜 Without Docker

```
> cd app_wine_server
> npm run line
```
