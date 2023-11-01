#include <lily.h>

// (these would be pre-declared)
typedef YDynVal YDynResult;
typedef YDynArray YDynArrayResult;

YResult JM0R10helloWorld() {
  YConsoleLog_CStr("Hello world!");
  return YSuccess;
}

YDynResult JM0R10sumOfArrayS1(YDynArray arr, YDynVal acc, YDynVal cur, int index) {
  acc = YOpPlusDynValAndDynVal(acc, cur);
  return acc;
}

YDynResult JM0R10sumOfArray(YDynArray arr) {
  YDynArray next = YDynArray_reduceCopy(arr, JM0R10sumOfArrayS1, YDynVal_fromF64(0));
  return next;
}

// With future in-line optimizations we could do
YResult JM0R10sumOfArray(YIntArray arr, int64_t &result) {
  int64_t acc = 0;
  for (int i = 0; i < arr->length; i++) {
    int64_t curr = YIntArray_at(i);
    acc = acc + cur;
  }
  result = acc;
  return YSuccess;
}