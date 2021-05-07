# conus

A small node.js demonstration that quickly determines if a given [lat, lon] point falls
within the Continental United States.

### Demo

The demo tests a list of point, displaying:
```text
yarn run v1.22.10
$ node ./index.js
Location [40,-100] is in Continental US
Location [-40,-100] is NOT in Continental US
Location [40,100] is NOT in Continental US
Location [48.92,-99] is NOT in Continental US
Location [0,0] is NOT in Continental US
Location [32.27,-78.772] is NOT in Continental US
Location [35.611,-78.772] is in Continental US
Location [45,-120] is in Continental US
✨  Done in 0.26s.
```

The `consu.js` file contains a coarse description of the US border as an
array of lattitude/longitude points.

Each element is a two-item numeric ordred array containing the a point on the border.
E.g. [31.15836483,-80.47891942]. The first and final points anchor the final segment
of the border polygon.

## Coarse Border Polygon
![geoData/nd-border-polygon.png](geoData/conus-coarse-border.png)


## Try It
Install the pre-reuqs and execute from a command-line:

### Pre-Reqs
+ yarn
+ node.js

### Install
From the desired parent directory location, issue:

`git clone https://github.com/mauget/conUS`

### Run
From the project root directory, issue:

`git start`

### The Data
We created a coarse-grained data array by using Google Earth and a text
editor.

1. Display the US in Google Earth, filling the screen
1. Click the polygon tool icon in Google Earth; a polygon dialog appears
1. In the polygon form, name the polygon (e.g. conus), set a color and line width, etc.
1. Don't close the dialog; slide it aside
1. Click desired points one-by-one (if you drag you'll make too many points)
1. When you've circumented the US finish with a final point near the sarting point.
1. Close the polygon dialog
1. Right-click the conus item, choosing properties
1. Export as a KML file (not KMZ)

Now you have a KML file that you an open in a text editor.
1. Find the `<coordinates>` element that contains your points
1. Paste its child triplet points into a new file: e.g. `conus.csv`
1. Break each point into its own lon/lat/altitude row, forming a csv file.
1. Open the file with Excel or other spreadsheet program
1. Delete the altitude column of zeros
1. Exchange the remaining pair of columns from lon/lat order to lat/lon order
1. Save as CSV

Now you have the border polygon in a form that you can edit into a 
JavaScfript file like `conus.csv`.

### Dependency
Each hit-test is carried out by an npm module defined in GitHub
project `substack/point-in-polygon` located at https://github.com/substack/point-in-polygon .
