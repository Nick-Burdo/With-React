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
require('../sass/style.scss');
```

**To embed images** needed for each record in the `index.js`:

```
require('../img/picture.png');
```