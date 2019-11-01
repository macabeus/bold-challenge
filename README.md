# bold-challenge
🍷 BOLD challenge solution

## How to run?

1 - Start the server:

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

Then, the API will be running at `http://localhost:3000`. You can check if everything is fine using the API `GET http://localhost:3000/status`; if you see `{ "status": "ok" }`, then the server is running.

2 - Now, to run the front-end start the following service:

🐳 Using Docker

```
> docker-compose up app_wine_front
```

📜 Without Docker

```
> cd app_wine_front
> npm i
> npm start
```

Finally, just head to `http://localhost:8080` to see the application running!

### Tests

I'm using the test runner [AVA](https://github.com/avajs/ava).

To run the tests on the server:

🐳 Using Docker
```
> docker-compose run --rm app_wine_server_tests
```

📜 Without Docker
```
> cd app_wine_server
> npm run test
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

## Routes

There are two routes on the server application: `GET /wines` and `POST /wines`.
