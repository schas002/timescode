# timescode

> A multiplication-based hash code for JS strings

## News - 2018-08-05

**I have now archived this repository until further notice**. Sooner or later, I will probably extend timescoding to most all JS types and, at last, have a grand release.

If so you want, you can still install timescode with the command below. **Note that this repository will be eventually deleted** in favour of the grand upgrade outlined above.

## Install

```sh
$ npm install github:schas002/timescode
```

## Usage

```javascript
const timescode = require('@schas002/timescode');

timescode('abcd'); // => 97990200
```

## Uniqueness

Uniqueness only goes as far: timescode numbers have a range of 1 to 9007199254740991 (_2<sup>53</sup> - 1_, which is the maximum safe integer in JavaScript).

## API

### function `timescode(input)`

Returns the timescode for given `input`.

#### input

Type: `string`

## Maintainer

- Andrew Zyabin - @schas002 - <https://schas002.github.io>

## License

[MIT](LICENSE) &copy; Andrew Zyabin
