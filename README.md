### Usage

``` 
npm install

NODE_ENV=production npm start

```

Visit  [http://localhost:3000/](http://localhost:3000/) 

For development:

```
npm run start
```

In development mode server will refresh the page with the changes in the JS and SCSS files.

Public files (JS, CSS & images) are stored in the server memory and written to disk only in production mode.

### Embed files

The source SCSS file for conversion to CSS embed in the `index.js`:

```
import '../sass/style.scss';
```

**To embed images** needed for each record in the `index.js`:

```
import '../img/picture.png';
```

### Libraries

#### react router

`npm react-router`

Complete routing library for React.

[https://github.com/reactjs/react-router](https://github.com/reactjs/react-router)

#### fetch

`npm whatwg-fetch`

AJAX request with promises

[https://github.com/github/fetch](https://github.com/github/fetch)

#### lodash

`npm lodash`

Utilites for Arrays, Collections, Objects, ets

[https://lodash.com/docs](https://lodash.com/docs)