### Library template in TS

[DOCS REFERENCE](./docs/index.md)

## API Surface Report & Docs

We're going to use Microsoft's [api-extractor](https://api-extractor.com/) as our
documentation tool -- but it's really much more than that as we'll see later


Inside the folder after any changes run

```sh
yarn api-extractor run 
```

Or if it's for changes in the Dev PC and not meant for production

```sh
yarn api-extractor run --local
```


## API Docs

We can use `api-documenter` to create markdown API docs by running

```sh
yarn api-documenter markdown -i temp -o docs
```