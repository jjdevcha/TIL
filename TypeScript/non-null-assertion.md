# Non-null assertion

It is used to tell TypeScript compiler that a value is not `null` or `undefined`.
```js
useEffect(() => {
  if (schools && textMeasureRef.current) {
    const maxWidth = schools.reduce((max, school) => {
      textMeasureRef.current!.textContent = school.name // Set text content for measurement
      return Math.max(max, textMeasureRef.current!.offsetWidth) // Measure width and compare
    }, 0)
    setDropDownWidth(maxWidth + 32) // Add padding to the measured width
  }
}, [schools])
```
- Only use it when you are 100% sure that the value is assigned
## Alternative to using `!`
1. Optional Chaining:
```js
const maxWidth = schools.reduce((max, school) => {
      if (!textMeasureRef.current) return max
      textMeasureRef.current.textContent = school.name // Set text content for measurement
      return Math.max(max, textMeasureRef.current!.offsetWidth) // Measure width and compare
    }, 0)
```
2. Early Return:
```js
if (!textMeasurRef.current) return
```
3. Type Guard: Use it to confirm `textMeasureRef.current` is not `null`
```js
function isNonNull<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined
}

useEffect(() => {
  if (schools && isNonNull(textMeasureRef.current)) {
    const maxWidth = schools.reduce((max, school) => {
      textMeasureRef.current!.textContent = school.name // Set text content for measurement
      return Math.max(max, textMeasureRef.current!.offsetWidth) // Measure width and compare
    }, 0)
    setDropDownWidth(maxWidth + 32) // Add padding to the measured width
  }
}, [schools])
```


