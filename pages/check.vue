<template>
  <div>
      <v-text-field solo/>
      <v-text-field solo/>
      <v-text-field solo/>
      <v-text-field solo/>
      <v-text-field solo/>
      <v-text-field solo/>
      <v-select :items="hello"/>
  </div>
</template>

<script>
export default {
data(){
    return{
        hello:[
            "hello", "yello"
        ]
    }
}
}
</script>

<style>

</style>