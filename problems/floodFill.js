/**
 * You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:

    Begin with the starting pixel and change its color to color.
    Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
    Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
    The process stops when there are no more adjacent pixels of the original color to update.

Return the modified image after performing the flood fill.

 

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

Output: [[2,2,2],[2,2,0],[2,0,1]]
 */


/**
 * Blurb
 * perform a Depth-First Search (DFS) to fill an image starting from a given pixel. 
 * Use a stack to iteratively explore neighboring pixels (up, down, left, right). 
 * If the target location already has the same color, do nothing (return original image)
 * If a pixel has the same initial color, it's updated to the new color. 
 * Use a helper function, getNeighbors, to retrieve valid neighboring pixels while avoiding out-of-bounds access. 
 * The process continues until all connected pixels of the same initial color are filled with the new color.
 */


const getNeighbors = (r,c, image) => {
    const goodRow = (r) =>   r >= 0 && r <image.length
    const goodCol = (c) => c >=0 && c <image[0].length
    const goodLoc = (r, c) => goodRow(r) && goodCol(c)

    let res = []

    if (goodLoc(r+1, c)) res.push([r+1, c])
    if (goodLoc(r-1, c)) res.push([r-1, c])
    if (goodLoc(r, c+1)) res.push([r, c+1])
    if (goodLoc(r, c-1)) res.push([r, c-1])

    return res
}


const floodFill = (image, sr, sc, color) =>{
    let img = image
    let iniColor = img[sr][sc]
    if (iniColor === color) return img

    let stack = [[sr, sc]]
    while (stack.length>0) {
        let [r,c] = stack.pop()
        if (img[r][c] === iniColor) {
            img[r][c] = color
            let neighbors = getNeighbors(r, c, img)
            for (let [nr, nc] of neighbors) {
                if (img[nr][nc] === iniColor) {
                    stack.push([nr, nc])
                }
            }
        }
    }
    return img
}

let res = floodFill( [[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)
// let res = floodFill(
//     [
//         [1, 1, 1],
//         [1, 1, 0],
//         [0, 1, 1],
//     ],
//     1,
//     1,
//     2
// )
console.log(res)
