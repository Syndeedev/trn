<template>
  <section class="mainDiv">
    <div class=" wrapper hero" >
        <h3 class="text-center">Dedicated Teams<br> For Your Dedicated Dreams</h3>
    </div>
    <div class="cardWrapper">
        <div class="card cardOne">
            <h1 class="pb-5">Who We Are</h1>
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed venenatis nisi ante, a feugiat nunc feugiat nec. Cras feugiat 
                fermentum libero in feugiat. Pellentesque porttitor, quam vitae interdum elementum, 
                velit sem consectetur ligula, at laoreet ligula elit ac nibh. In tincidunt diam eu dictum 
                vestibulum. Duis eros lorem, aliquam non placerat. </h3>
        </div>
        <div class="cardTwoWrapper">
            <div class="card cardTwo">
                <h1 class="pb-5">What We Do</h1>
                <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed venenatis nisi ante, a feugiat nunc feugiat nec. Cras feugiat 
                fermentum libero in feugiat. Pellentesque porttitor, quam vitae interdum elementum, 
                velit sem consectetur ligula, at laoreet ligula elit ac nibh. In tincidunt diam eu dictum 
                vestibulum. Duis eros lorem, aliquam non placerat. </h3>
            </div>
        </div>
         <div class="card cardThree">
            <h1 class="pb-5">How We Do It</h1>
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed venenatis nisi ante, a feugiat nunc feugiat nec. Cras feugiat 
                fermentum libero in feugiat. Pellentesque porttitor, quam vitae interdum elementum, 
                velit sem consectetur ligula, at laoreet ligula elit ac nibh. In tincidunt diam eu dictum 
                vestibulum. Duis eros lorem, aliquam non placerat. </h3>
        </div>
    </div>
    <div class="vector">
         <img src="~/assets/VectorTwo.svg">
     </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.hero{
    background-image: url("~/assets/aboutHero.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    background-position: center center; 
    margin: 150px auto 0;
    
     h3{
          font-weight: 800;
        font-size: 44px;
        line-height: 60px;
       @media (max-width: 768px) {
           font-size: 40px;
        line-height: 50px;
        text-align: center;
       }
       @media (max-width: 320px) {
           font-size: 30px;
        line-height: 35px;
        text-align: center; 
       }
     }
}

.cardOne{
    background: #F98C8C;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    max-width: 550px;
}
.card{
    height: 322px;
    border-radius: 20px;
    padding: 40px;
    margin-top: -40px;
    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        color: rgba(0, 0, 0, 0.75);
    }
    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
    }
    @media (max-width: 768px) {
        margin-top: 0;
        height: auto;
        padding: 40px 20px;
    }
}
.cardTwo{
    background: #FFFFFF;
    box-shadow: -4px -3px 4px rgba(0, 0, 0, 0.25);
    width: 550px;

    h1{
    font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        color: rgba(0, 128, 0, 0.75);
    }
    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #008000;
         }
}
.cardThree{
    background: rgba(27, 103, 194, 0.86);
    box-shadow: 4px -4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    max-width: 550px;
    position: relative;
    z-index: 2;

    h1{
    font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        color: rgba(255, 255, 255, 0.75);
    }
    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.85);
         }
   
}
.cardWrapper{
    width: 80%;
    margin: -9rem auto 0 ;
    @media (max-width: 768px) {
        margin: -5rem auto 0 ;
        width: 95%;
       }
}
.mainDiv{
    max-width:1440px;
     margin:auto; 
     width:90%;
     position: relative;
     @media (max-width: 700px) {
        width:95%;
       }
}
.cardTwoWrapper{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.vector{
    position: absolute;
    bottom: 60px;
    left: 25%;
}
</style>