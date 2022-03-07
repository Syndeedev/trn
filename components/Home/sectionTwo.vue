<template>
<section class="mainDiv  "> 

    <div class="wrapperDiv ">
   <div class="cols">
      <div class="column">
        <div class="containerr">				
          <div class="front">					
              <div class="inner">
              <p>Strategy</p>              
              </div>
          </div>
          <div class="back">
              <div class="inner">  
                   <h1>Strategy</h1>                 
                <h4>
                    We want to help develop solid strategies that have been validated
                     and tested for accuracy. Our strategy would help make good 
                     of your investment decision. We would provide guidance on 
                     project prioritization, allocating and optimizing resources, 
                     and helping you achieve profits and business growth.
                       </h4><br>
                
              </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="containerr">
          <div class="front_card_two">
            <div class="inner">
            <p>People</p>
            
            </div>
          </div>
          <div class="back_card_two">
            <div class="inner">
                 <h1>People</h1>
                <h4>  Successful businesses focus on people. We know strategy needs people to drive
                     its implementation and that's why we focus on people.
                    We help to make  learning and development a focus of your company culture,
                    improve employee engagement, increase retention and attract elite candidates.
                    </h4><br>
                
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="containerr">
          <div class="front_card_three">
            <div class="inner">
            <p>Technology</p>
            </div>
          </div>
          <div class="back_card_three">
            <div class="inner">
                 <h1>Technology</h1>
                <h4>
                     Technology solutions allow businesses to remain agile and quick to 
                     respond to changes within the market. With faster product launches, 
                     better quality innovations, and improved product features, 
                     we will drive your business growth exponentially.

                    </h4><br>
                
            </div>
          </div>
        </div>
      </div>
      
    </div>
 </div>

</section>
  
</template>

<script>
export default {
    name:"sectionTwo"

}
</script>

<style lang="scss" scoped>
.mainDiv{
    background-image: url("~/assets/sectionTwoBkgd.png");
    background-repeat: no-repeat;
    background-size: cover;  
}
.wrapperDiv{
    margin: 0 auto;
    width: 100%;
    padding: 50px 0;
    transition: all .3s ease;
}
.cols{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // padding: 1rem;
}
.column{
    width: calc(30%); 
    margin: 1rem;
    cursor: pointer;
    @media screen and (max-width:68rem) {
        width: calc(33.333333% - 2.5rem);
    }
    @media screen and (max-width:60rem) {
            width: calc(45% - 2rem);
    }
    @media  (max-width:41rem) {
            width: 80%;
    }
}
.containerr{
    transform-style: preserve-3d;
    perspective: 1000px;
}
.front, 
.front_card_two, 
.front_card_three,
.back,
.back_card_two,
.back_card_three{
    background-size: cover;
    background-position: center;
    transition: transform .7s cubic-bezier(.4, .2, .2, 1) ;
    backface-visibility: hidden;
    text-align: center;
    min-height: 470px;
   height: auto;
    border-radius: 10px;
    font-size: 1rem;

    // @media screen and (max-width:41rem) {
    //    min-height: 600px;
    // }
    @media screen and (max-width:656px) {
       min-height: 400px;
    }
    @media screen and (max-width:520px) {
       min-height: 450px;
    }
    @media screen and (max-width:350px) {
       min-height: 580px;
    }
    @media screen and (max-width:280px) {
       min-height: 610px;
    }
}
.back{
     background-image: url("~/assets/strategy.png");  
}
.back_card_two{
     background-image: url("~/assets/people.png");  
}
.back_card_three{
     background-image: url("~/assets/tech.png");  
}
.front::after, .front_card_two::after, .front_card_three::after{
    position: absolute;
    top: 0;
    left: 0; 
    z-index: 1;
    width: 100%;
    height: 100%;
    content: ' ';
    display: block;
    opacity: 1;
    border-radius: 10px; 
    backface-visibility: hidden;
}
.front{
     background-image: url("~/assets/strategy.png");
}
.front_card_two{
     background-image: url("~/assets/people.png"); 
}
.front_card_three{
     background-image: url("~/assets/tech.png"); 
    //  color: #008000;
}
.containerr:hover .front,
.containerr:hover .front_card_two,
.containerr:hover .front_card_three,
.containerr:hover .back,
.containerr:hover .back_card_two,
.containerr:hover .back_card_three{
transition: transform .7s cubic-bezier(.4, .2, .2, 1) ;
}
.back, .back_card_two, .back_card_three{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
}
.inner{
    transform: translateY(-50%) translateZ(60px) scale(.94);
    top: 53%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    perspective: inherit;
    z-index: 2;
    @media (max-width: 768px) {
        padding: 0.5rem;
    }
}
.containerr .back,
.containerr .back_card_two,
.containerr .back_card_three{
    transform: rotateY(180deg);
    transform-style: preserve-3d;
}
.containerr .front, .containerr .front_card_two, .containerr .front_card_three{
    transform: rotateY(0deg);
    transform-style: preserve-3d;
}
.containerr:hover .back,
.containerr:hover .back_card_two,
.containerr:hover .back_card_three{
    transform: rotateY(0deg);
    transform-style: preserve-3d;
}
.containerr:hover .front,
.containerr:hover .front_card_two,
.containerr:hover .front_card_three{
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
}
.front .inner p, 
.front_card_two .inner p,
.front_card_three .inner p{
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
}
.front_card_two .inner p, 
.back_card_two .inner h1 , 
.back_card_two .inner h4{
    color: #000000;
}
.back_card_three .inner h1 , 
.back_card_three .inner h4,
.front_card_three .inner p{
    color: #008000;
}
.front .inner p::after,
.front_card_two .inner p::after,
.front_card_three .inner p::after{
    content: '';
    width: 8rem;
    height: 1px;
    position: absolute;
    background: #FFFFFF;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -.35rem;
}
.front_card_two .inner p::after{
    background: #000000;
}
.front_card_three .inner p::after{
    background: #008000;
}
.back .inner h1,
.back_card_two .inner h1,
.back_card_three .inner h1{
    font-size: 1.6rem;
    margin-bottom: 1rem;
    text-align: center;
    position: relative;
}
.back .inner h4,
.back_card_two .inner h4,
.back_card_three .inner h4{
    font-size: 1rem;
    text-align: center;
    position: relative;
}
</style>