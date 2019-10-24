# NaN
**NaN**은 **'Not a number'**의 abbreviation(줄임말)으로 해당 변수가 수인지 아닌지를 나타내준다.

그래서 NaN인지 아닌지를 확인하는 isNaN 메서드가 존재하는데, 문제는 여기서 발생한다.

변수의 타입 NaN인지 아닌지를 판별하려는 것이 아니라,

변수 자체가 NaN 인지를 알아보려면 조금 다른 메서드가 필요하다. 

## How to do

NaN은 coerce(형변환)의 힘이 아주 강하다.
그렇기 때문에 내가 String을 넣어도 true를 반환한다.

그래서 나는 그저 변수 `a`가 NaN을 저장하고 있는지 알고 싶다면 `Number.isNaN(a)`을 쓰면 된다.

```js
const a = NaN

console.log(Number.isNaN(a)) // true
console.log(Number.isNaN('a')) // false
```
이렇게 하게 되면 검사 시 내가 건드리고 싶지 않은 `String`이라든가 `Number`이 아닌 다른 타입들이 `true`가 나오는 것을 방지할 수 있다. 

[Good reference for this](https://dev.to/samanthaming/better-nan-check-with-es6-number-isnan-19g0)
