# frames-to-rational

Turn a frame count into a rational numer (for use with FCPX) - Learn more about FCPXml [on it's documentation](https://developer.apple.com/library/archive/documentation/FinalCutProX/Reference/FinalCutProXXMLFormat/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011227-CH1-SW1).

Instead of frames or timecode, FCPX will expect 1 frame of 25fps video - for example - to look like this:

```bash
100/2500s
```

This module will take in a frame count and frame rate, then spit out the rational number.

Allows conversion to any of the following frame rates.
* 23.98
* 24
* 25
* 29.97
* 30
* 50
* 59.94
* 60

## Install

```bash
npm install frames-to-rational
```

## Usage

```js
const framesToRational = require("frames-to-rational");

// Convert 1 frame at 25fps to a rational number
framesToRational.convert(1, "25");
// -> 100/2500s

// Convert 156200 frames at 29.97fps to a rational number
framesToRational.convert(156200, "29.97");
// -> 156200001/30000s

// Convert 7200 frames at 30fps to a rational number
framesToRational.convert(7200, "30");
// -> 720000/3000s
```

When importing a FCPXml file to Final Cut Pro X, the application will refractor all the numbers above to the shortest version possible.
