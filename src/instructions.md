# Instructions
Create an image gallery grid using the provided image data.

See the final result [here](https://n7q0p286pm.codesandbox.io/).

## Requirements

The gallery should:
- render a responsive grid of images
- the grid should be 1-up for small screens and a max of 4-up for large screens
- the images in the grid should be evenly spaced, both horizontally and vertically

## Approach

- create a component called Gallery
- it should accept a prop called images, which is an array of objects
- create a wrapping section with a max-width of 1600px
- use flexbox for the grid layout
- make sure every item has a key
