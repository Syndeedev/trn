<template>
<section class="section wrapper flex-column">
    
    <!-- width:90%;  -->
     <div class="card pa-16 " style="max-width:1440px">
         <h2 class="mb-12">Our Partners</h2>
            <div class="imagesCard d-flex justify-space-around flex-wrap align-items">
                <div class="image">
                <img width="141" height="120" src="~/assets/TrnPartnerImages/Amazon-Logo.png">
                </div>
                <div class="image">
                <img width="170" height="150" src="~/assets/TrnPartnerImages/Microsoft_Logo.png">
                </div>
                <div class="image">
                <img width="150" height="150" src="~/assets/TrnPartnerImages/eyeconic.jpeg">
                </div>
                <div  class="image">
                <img width="150" height="150" src="~/assets/TrnPartnerImages/fcm.jpeg">
                </div>
                <div class="image">
                <img width="170" height="150" src="~/assets/TrnPartnerImages/dynastees.jpeg">
                </div>
            </div>


            <div class="imagesCard d-flex justify-space-around flex-wrap align-items">
            <div class="image">
                <img width="150" height="150" src="~/assets/TrnPartnerImages/yellow-blue.png">
                </div>
                <div class="image">
                <img width="170" height="140" src="~/assets/TrnPartnerImages/whoosh.jpeg">
                </div>
                <div class="image">
                <img width="150" height="150" src="~/assets/TrnPartnerImages/speck.jpeg">
                </div>
                <div class="image">
                <img width="150" height="110" src="~/assets/TrnPartnerImages/tbt.jpeg">
                </div>
            
            </div>
            

     </div>

     <div  class="comments">
          <h1 class="mb-n10">Client’s Love <br>Our Work</h1>
          <div class="wrapper">
          <h2 class="pb-8 text-center">Client’s Love Our Work</h2>
          </div>
            <v-card flat class="comment_card pa-8">
                    <v-carousel :height="'carousel'"  
                            :show-arrows="false" cycle
                            hide-delimiter-background v-model="model">
                        <v-carousel-item
                        v-for="(color, i) in colors"
                        :key="color">
              
                        <div class="comment_text">
                            <div>Slide {{ i + 1 }}</div>
                        <h3 class="">
                            Lorem ipsum or sit amet, consectetur adipiscing elit. 
                            Sed venenatis nisi ante, a feugiat nunc feugiat nec. Cras 
                            feugiat fermentum libero in feugiat. Pellentesque porttitor, 
                            quam vitae interdum elementum, velit sem consectetur ligula, 
                            at laoreet ligula elit ac nibh. In tincidunt diam eu dictum 
                            vestibulum. Duis eros lorem, aliquam non placerat.
                        </h3>
                        <div class="d-flex mt-7 align-items">
                        <v-avatar color="#343434" size="26"></v-avatar>
                        <h4 class="pl-3">Abdul Balogun O CEO</h4>
                        </div>
                        </div>
                            
                        </v-carousel-item>
                    </v-carousel>
            </v-card>
     </div>
     <div class="vector">
         <img src="~/assets/vector.svg">
     </div>
</section>
  
</template>

<script>
export default {
    name:"Partners",
    data(){
        return{
            model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
        }
    }

}
</script>

<style lang="scss" scoped>
.section{
    margin: 90px 90px 0;
    position: relative;
    @media (max-width: 960px) {
        margin: 90px 20px;
    }
}
.card{
    background: #FFFFFF;
    border: 0.95057px solid #F1F1F1;
    box-sizing: border-box;
    box-shadow: 1.90114px 1.90114px 15.2091px 3.80228px rgba(0, 0, 0, 0.04);
    border-radius: 30.4183px;
    margin-bottom: 50px;
    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 34.2205px;
        line-height: 47px;
        text-align: center;
        color: #000000;
    }
}
.image{
    padding: 10px;
}
.comments{
    h1{
        font-style: normal;
        font-weight: bold;
        font-size: 46px;
        line-height: 56px;
        color: rgba(0, 0, 0, 0.75);
        position:relative;
        z-index: 2;
        margin-left: -150px;
        @media (max-width: 849px) {
            display: none;
        }
    }
}
.comment_card{
 background: #1B67C2 !important;
box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.16) !important;
border-radius: 24px !important;
}
.comment_text{
    max-width: 450px;
    height: 300px;
    @media (max-width: 430px) {
                height:320px !important;
            }
    @media (max-width: 400px) {
                height:360px !important;
            }
    @media (max-width: 370px) {
                height:420px !important;
            }
    @media (max-width: 300px) {
                height:520px !important;
            }
h3{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
}
}
.comments{
    h2{
        display: flex;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        color: rgba(0, 0, 0, 0.75);
        @media (min-width: 850px) {
            display: none;
        }
    }
}
.comment_card ::v-deep .v-btn{
    background: transparent !important;
}
.comment_card ::v-deep .v-carousel__controls {
    height: auto;
    justify-content: start ;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){

    border-top-left-radius: unset;
    border-top-right-radius: unset;
}
.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
}
.comment_card ::v-deep .v-carousel__controls__item {
    margin: 0;
}
.vector{
    position: absolute;
    bottom: 0;
}
</style>