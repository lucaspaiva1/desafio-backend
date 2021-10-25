# Desafio Backend

## Running API

```bash
git clone https://github.com/lucaspaiva1/desafio-backend.git
cd desafio-backend
cp .env.example .env
npm i
npm start
```

#### Seed database

```bash
npm run seed
```

#### Test

```bash
npm test
```

## Dependencies

- MongoDB
- node 14.x

## Docs

`[GET] /products`

- Get products list

#### query parameters
- `page` - current page
- `rows` - quantity of items per page (`default: 10`)
- `search` - search items by name

## Online Version

https://desafio-coteminas.herokuapp.com/

Using heroku to host the API and database with MongoDB cloud.
