import pointInPolygon from 'point-in-polygon';
import borderContinentalUS from './src/conUS.js';

[
  [40, -100],
  [-40, -100],
  [40, 100],
  [48.92, -99],
  [0, 0],
  [32.270, -78.772],
  [35.611, -78.772],
  [45, -120],
].forEach((location) => {
  console.log(`Location [${location}] is ${pointInPolygon(location, borderContinentalUS) ? 'in' : 'NOT in'} Continental US`);
});
