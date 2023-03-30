import { defineNuxtPlugin } from '#app'
import { MyClass1, TestInf } from '@advs/testts2package'
import { MyClass2, TestInf2 } from '@advs/testts3package';
import { MyEnum } from '@advs/testtspackage';

const testObj: TestInf = new MyClass1();
const testObj2: TestInf2 = new MyClass2();

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module! Val 1/2:');
  console.log(testObj.data);
  testObj2.data = MyEnum.val2;
  console.log(testObj2.data);
  return {
    provide:{
      testObj,
      testObj2
    }
  }
})
