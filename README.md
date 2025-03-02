<img src="https://i.imgur.com/6I7FvtJ.png" width="256px" height="196px" align="left"/>

# 🍷 bold-challenge

> **Developer challenge solution<br>**
> A simple yet powerful wine list app using Node.js + React Hooks + Provider Pattern + Docker!

<p align="center">
  <img src="https://i.imgur.com/f1WNrzw.png" width=780>
</p>

## What does it do?

It is a just wine list app, where you can create and read a wine using the browser – or just the API.

> Tip: you could review my entire codebase looking for each commit and PR, so you'll understand better how the code grew.

## Decisions

Despite being a simple app, I made several core decisions:

### Dockerize the entire application

The main reason I'm using Docker is to have an easier setup. With that we can ensure that everyone is using the same Node version, and on a real project it makes maintenance easier. For example, maybe we would like to add a database, so is easier to do it using Docker, instead of installing the database on a real machine.

### Use a single repo with two projects

Yeah, we could build the entire application on a single big project, but I chose to build two: `app_wine_server` and `app_wine_front`. The first project is responsible for providing an API that the second project uses to render the web app. We could have `app_wine_server` using Koa to provide the static content, but it would result in extra coupling between the front and the backend - which can become critical at scale.

These two decisions are also handy when deploying: we could write a `Dockerfile` focused to deploy the `app_wine_server` project on something like AWS Fargate, and then deploy the `app_wine_server` on a static content provider, such as AWS S3.

Since this is a very simple monorepo, with only two projects, I decided to not use [Lerna](https://github.com/lerna/lerna), but on a bigger application, with more projects, Lerna could help a lot to manage the dependencies between the projects and within each project.

### Provider Pattern

Redux is much more complicated than this application requires. We have just one page and few elements with few states to manage, so we don't need to use redux. I chose to use a simple approach to a simple problem. [You might not need Redux!](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) And with React Hooks we have an amazing `useReducer` - that I used one time on this project.

So I decided to use Provider Pattern, which is a solution that fits better in this project. I'm using two providers: `ApiProvider`, to handle the requests to the server, and `DisplayOptionsProvider`, to handle the options to display the wines.

### Tests

I'm using Ava on both projects, because it can run the tests asynchronously ~(bye bye tests that demands state of the previous test!)~. I already used it in production and it fits very well - but it was my first time using it on the front-end side, and I didn't like to write the `app_wine_front/tests/_init.js` file to work well on the front-end...

On the front-end side, I picked React Testing Library, because it enforces good practices when you are writing the tests. For example, you can't call the methods or see the internal state of your component. You only can see what the user can also see.

### Database?

On the backend side, since using a database isn't a requirement, I decided to only save the datas in a variable. If a database would be a requirement, I would probably to use a document-based/key-value database (such as DynamoDB), because the data on our application doesn't have relations, and we have just two very simple operations: list all wines and add a new wine.<br>
If we'll use AWS, DynamoDB is a good choice, because we don't need to think a lot about the infrastructure about the database [(I have a little application using DynamoDB)](https://github.com/macabeus/hashlab-challenge).

## Routes

There are three routes on the server application: `GET /status`, `GET /wines` and `POST /wines`. On the front-end side there is just the index route.

> The `price` on any of the routes is in cents!

### `GET /status`

Check if the server is running. It takes no parameters and it should returns this:

```json
{
    "status": "ok"
}
```

### `GET /wines`

Get the list of wines. It doesn't have any parameter and it will returns something like the following:

```json
[
    {
        "name": "White wine",
        "vineyard": "Lisbon",
        "year": 1999,
        "price": 1000
    }
]
```

### `POST /wines`

Add a new wine. The request body should be in the following format:

```json
{
	"name": "white wine",
	"vineyard": "lisbon",
	"year": 1999,
	"price": 1000
}
```

It will return the saved wine.

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

2 - Now, start the front-end service:

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

If you try to run the front without running the server, you'll see an error message.

### Tests

I'm using the test runner [AVA](https://github.com/avajs/ava).

1 - To run the tests on the server:

🐳 Using Docker
```
> docker-compose run --rm app_wine_server_tests
```

📜 Without Docker
```
> cd app_wine_server
> npm run test
```

2 - To run the tests on the front-end:

🐳 Using Docker

```
> docker-compose run --rm app_wine_front_tests
```

📜 Without Docker

```
> cd app_wine_front
> npm run test
```

### Lint

I'm following [Pagar.me JavaScript Style Guide](https://github.com/pagarme/javascript-style-guide) on `app_list_server` and [the respective lint rules for React applications](https://github.com/pagarme/react-style-guide) on `app_list_front`.

These lint rules are based on the loved Airbnb, but are still more restrictive.

1 - To run the lint on the server:

🐳 Using Docker

```
> docker-compose run --rm app_wine_server_lint
```

📜 Without Docker

```
> cd app_wine_server
> npm run line
```

2 - To run the lint on the front-end:

🐳 Using Docker
```
> docker-compose run --rm app_wine_front_lint
```

📜 Without Docker
```
> cd app_wine_front
> npm run lint
```
