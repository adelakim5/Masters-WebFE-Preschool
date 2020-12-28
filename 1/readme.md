# VScode로 Node.js debugging 하기

## Breackpoints

- 핸지 실행중인 코드에서 디버깅하고 싶은 부분에 마크하는것
- break해보고 싶은 point를 집는다 해서 breakpoint로 생각해도 좋을 것 같다.
- 코드라인을 선택한후 `F9`를 눌러도 되고, 코드라인 숫자 왼쪽을 마우스로 클릭해 직접 걸어줘도 된다.

## Watch

- `+` 버튼을 누르고 표현식을 입력하면 Breakpoints의 값들을 보여준다.
- 예를 들면
  ```js
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  ```
- watch에 `n === 3`을 추가하면,
- `n === 3 : false`이던 것이 n이 3이 되었을 때 `n === 3 : true`로 바뀐다.
- 원하는 변수값을 넣어도 해당 변수의 값이 나온다. ex) `n : 3`

## Call Stack

- 호출한 함수가 순서대로 쌓이는 곳
- 순서대로 쌓이기 때문에 역추적도 가능하다.
- (개인적으로) 특히 재귀함수를 호출할 때 호출 순서를 파악하기 좋다.
- 함수가 실행되면 함수를 추가하고, 끝나면 콜스택에서 제거된다.
- 콜스택 할당량보다 초과해서 들어가면 `stack overflow error` 발생

## Step over / Step into / Step out

### Continue

- 다음 breakpoint로 이동

### Step over

- breakpoint 라인 후 다음 라인으로 이동
- 다음 라인이 함수이면 해당 함수 내부로 이동하지는 않고 바로 실행한다.

### Step into

- Step over와 비슷한데, 다음라인이 함수이면 **해당 함수 내부로 이동**한 후, 동작 라인을 하나하나 지나간다.

### Step out

- 현재 함수의 나머지 부분을 바로 실행하고 return된 곳에서 멈춘다.
- Step into로 함수 들어간 뒤 바로 return으로 넘어가고 싶을 때 사용하면 좋다.
