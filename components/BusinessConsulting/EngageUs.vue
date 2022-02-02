<template>
  <section class="mainDiv">
    <div class=" hero" >
        <div :style="{backgroundColor: bgColor}" class="layer wrapper">
        <h3 class="text-center">{{title}}</h3>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name:"EngageUs",
    props:{
        title: String,
        bgColor: String
    }

}
</script>

<style lang="scss" scoped>
.hero{
    background-image: url("~/assets/pexels-morillo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 330px;
    background-position: center center; 
    margin: 150px auto 0;
     h3{
          font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 54px;
        text-align: center;
        width: 560px;

        // color: #FFFFFF;
    //    @media (max-width: 768px) {
    //        font-size: 40px;
    //     line-height: 50px;
    //     text-align: center;
    //    }
    //    @media (max-width: 320px) {
    //        font-size: 30px;
    //     line-height: 35px;
    //     text-align: center; 
    //    }
     }
}
.mainDiv{
    max-width:1440px;
     margin:auto; 
     width:70%;
     position: relative;
     @media (max-width: 700px) {
        width:95%;
       }
}
.layer {
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
