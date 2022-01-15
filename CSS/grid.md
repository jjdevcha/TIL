# CSS grid
A grid is a set of intersecting horiozontal and vertical lines defining columns and rows 

### The Grid Container
A grid container is created by declaring `display: grid`, `display: inline-grid`

### Grid tracks
A grid track is a space between any two lines on the grid

#### Defining tracks
 `grid-template-columns`
 <br>`grid-template-rows`
 
 
#### The fr unit
The fr unit represents a fraction of the available space in the grid container. 

#### repeat()
CSS function that allows to write recurring `grid-template-columns` or `grid-template-rows`
<br>`grid-template-rows: repeat(50, 1fr);`

#### grid-area
This function specified the grid area's edge
<br>`grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;`
