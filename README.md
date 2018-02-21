# timescode

> A multiplication-based hash code for JS strings

## Install

```sh
$ npm install @schas002/timescode
```

## Usage

```javascript
const timescode = require('@schas002/timescode');

timescode('abcd'); // => 97990200
```

## Uniqueness

Uniqueness only goes as far: timescode numbers have a range of 1 to 9007199254740991 (_2<sup>53</sup> - 1_, which is the maximum safe integer in JavaScript).

## Maintainer

- Andrew Zyabin - @schas002 - [@zyabin101@glitch.social](https://glitch.social/@zyabin101)

## License

[MIT](LICENSE) &copy; Andrew Zyabin
