<template>
<section class="mainDiv">
  <div class="cardWrapper">
      <div class="cardOneWrapper">
        <div class="card cardOne">
            <h1 class="pb-5">Who We Are</h1>
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed venenatis nisi ante, a feugiat nunc feugiat nec. Cras feugiat 
                fermentum libero in feugiat. Pellentesque porttitor, quam vitae interdum elementum, 
                velit sem consectetur ligula, at laoreet ligula elit ac nibh. In tincidunt diam eu dictum 
                vestibulum. Duis eros lorem, aliquam non placerat. </h3>
        </div>
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

        <div style="margin-top:120px" class="wrapper mb-16">
            <h2>Our Business Consulting Services are Structured to address a company’s end-to-end 
                business needs. We provide comprehensive services to support your business by 
                leveraging strategy to drive people, process, information and technology considerations.</h2>
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

.cardWrapper{
    width: 80%;
    margin: -15rem auto 0 ;
    @media (max-width: 768px) {
        margin: -5rem auto 0 ;
        width: 95%;
       }
}
.mainDiv{
    max-width:1440px;
     margin:auto; 
    //  position: relative;
}
.cardOneWrapper{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.cardTwoWrapper{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
h2{
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    @media (max-width: 768px) {
        font-size: 26px;
            line-height: 30px;
            text-align: left;
        }
    }

</style>