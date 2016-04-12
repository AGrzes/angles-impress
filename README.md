# hexify-impress
Simple script to layout slides using angles and distances for impress.js

Reads HTML from standard input and writes HTML into standard output.

## Input
The script will consider the following attributes of the step to calculate position and scale
* data-angles - a series of pairs <angle> <distance> separated by spaces. Angles are in degrees.

## Output
The script will calculate the following attributes
* data-x - cos(angle1) * distance1 + cos(angle2) * distance2 + cos(angle3) * distance3 + ...
* data-y - sin(angle1) * distance1 + sin(angle2) * distance2 + sin(angle3) * distance3 + ...
