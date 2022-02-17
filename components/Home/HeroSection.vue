<template>
<section>
    <div
      class=" d-flex align-center justify-center flex-column text-center
       hero" >
      <div style="max-width:1440px" class=" px-4 centerItems">
        <h3>We Build Solutions for Businesses</h3>
        <div class="sub">
        <h4 class="mt-5">
            We unlock sustainable business and brand growth with challenging thinking and solutions
        </h4>
         </div>
         <div class="mt-8">
         <v-btn depressed class="btn-hover white--text"> Learn more</v-btn>
         </div>
      </div>
      
    </div>
  </section>
  
</template>

<script>
export default {
  components: {  },
    name:'HeroSection'

}
</script>

<style lang="scss" scoped>
.hero{
    background-image: url("~/assets/womanHero.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    background-position: center center;  
    margin-bottom: 100px;
     h3{
          font-weight: 800;
        font-size: 44px;
        line-height: 60px;
       @media (max-width: 768px) {
           font-size: 40px;
        line-height: 50px;
       }
       @media (max-width: 320px) {
           font-size: 30px;
        line-height: 35px;
       }
     }
     h4{
         font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        letter-spacing: -0.04em;
        color: rgba(255, 255, 255, 0.81);
         @media (max-width: 768px) {
          font-size: 18px;
        line-height: 26px;
       }
       @media (max-width: 320px) {
           font-size: 16px;
        line-height: 22px;
       }

     }
}
.sub{
max-width: 600px;
}
.centerItems{
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
}
.v-btn{
   font-weight: 800;
   border-radius: 72px;
}
.v-btn:not(.v-btn--round).v-size--default{
    min-width: 162px;
}
</style>