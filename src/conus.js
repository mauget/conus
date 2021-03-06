/**
 * conus is an array of points describing a polygon surrounding the border of the
 * continental United States. Each point is an ordered numeric latitude - longitude pair,
 * each contained in  a two-element array. E.g. [ 35.611, -78.772 ]
 * The border polygon granularity is a compromise between granularity  and hit-testing a
 * point within the polygon. The first and last elements of the polygon are closure of
 * the final polygon line.
 *
 * @type {number[][]}
 */
export const conus = [
  [49.32580446,-126.0751504],
  [48.76133906,-88.49335286],
  [45.04579542,-81.72339233],
  [42.11609474,-82.3053247],
  [47.62309122,-67.8930959],
  [44.08975704,-65.62547461],
  [35.05404806,-74.506792],
  [31.15836483,-80.47891942],
  [24.5,-79.5],
  [24,-83],
  [29.25,-84.74156273],
  [28,-89.5],
  [29.08512788,-91.88978577],
  [28.09404423,-95.13888778],
  [25.22295245,-96.81726302],
  [26.12708852,-99.93272704],
  [29.26940717,-101.5705579],
  [28.64527057,-104.0763672],
  [30.59116661,-106.5414071],
  [31.00347529,-112.5776698],
  [31.70660654,-116.3107955],
  [31.73196999,-119.4463743],
  [38.24462963,-125.0201679],
  [42.85513415,-125.8257946],
  [48.64255653,-125.8319398]
];
export default conus;
