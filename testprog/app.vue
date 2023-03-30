<template>
  <div>
    My Data = {{ data }}
    My second Data = {{ data2 }}
    <button @click="changeVal()">Change Val</button>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
<script setup lang="ts">
import { MyEnum } from "@advs/testtspackage"
import { TestInf } from "@advs/testts2Package"
import { TestInf2 } from "@advs/testts3package"
const data = ref(MyEnum.val1);
const data2 = ref(MyEnum.val1);
onMounted(()=>{
  data.value = useNuxtApp().$testObj.data;
})
function changeVal(){
  // console.log(useNuxtApp().$testObj);
  const myT1: TestInf = useNuxtApp().$testObj as TestInf;
  const myT2: TestInf2 = useNuxtApp().$testObj;
  if (myT1.data == MyEnum.val1){
    myT1.data = MyEnum.val2;
  }else{
    myT1.data = MyEnum.val1;
  }
  data.value = myT1.data;
  data2.value = myT2.data;
}
</script>