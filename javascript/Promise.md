# Promise

### call back 
```js
function add10(a, callback) {
    setTimeout(() => callback(a+10), 1000);
  }
  
add10(1, res => {
    add10(res, res => {
      add10(res, res => {
        console.log(res);
      });
    });
  });
```

### Promise
비동기 처리가 콜백보다 우수한 점
- call hell에 빠지지 않아도 된다
- indentation을 처리하기 쉽다
- **비동기를 값으로 처리해준다!!!**(일급으로 다루어진다)

```js
function add20(a) {
    return new Promise(resolve => setTimeout(() => resolve(a + 20), 1000));
  }
  
add20(1)
    .then(add20)
    .then(add20)
    .then(log);
```

#### 일반함수에 비동기가 값으로 들어오면 어떻게 처리해 줘야할까? 

함수가 비동기값을 기다려줄 수 있도록 처리한다 

```js
const delay100 = a => new Promise(res => 
    setTimeout(() => res(a), 100));

  const go2 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
  const add5 = a => a + 5;
  

  log(go2(go2(10, add5), log));

  log(go2(go2(delay100(10), add5), log));
```
#### 안전한 비동기 값 처리하기
```js
const g = a =>  a + 1;
const f = a => a * a;

Promise.resolve(2).then(g).then(f).then(log);

new Promise(resolve => 
    setTimeout(() => resolve(3), 100)
  ).then(g).then(f).then(log);
```
