# todos

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To build CSS (quick and dirty, but it works for this project.)

```
npx sass --no-source-map src/styles.scss dist/styles.css
```

To create a development build:

```sh
npm run build-dev
```

## Running

```sh
node dist/bundle.js
```

## Credits

Initial scaffolding made with [createapp.dev](https://createapp.dev/)
