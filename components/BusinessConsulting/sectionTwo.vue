<template>
<section class="mainDiv">
  <div class="cardWrapper">
      <div class="cardOneWrapper">
        <!-- <div class="card cardOne"> -->
            <div class="cardOne mt-4">
          <h2 class="text-center">Our Approach</h2>
          <div class="inner mt-6">
              <div class=" px-2">
                   <div class="d-flex my-4 align-items" v-for="(item, index) in cardOne" :key="index">
                       <v-avatar size="20" :color="item.color"></v-avatar>
                       <h4 class="pl-5">{{item.title}}</h4>
                   </div>
              </div>
              <img width="150" height="150" src="~/assets/SRImageOne.png">
          </div>
          
        <!-- </div> -->
        </div>
      </div>
        <div class="cardTwoWrapper">
            <!-- <div class="card cardTwo"> -->
                <div class="cardTwo mt-n8">
             <h2 class="text-center">Our Outcome</h2>
            <div class="inner">
                <div class="mt-6 px-2 ">
                   <div class="d-flex my-4 align-items" v-for="(item, index) in cardTwo" :key="index">
                       <v-avatar size="20" :color="item.color"></v-avatar>
                       <h4 class="pl-5">{{item.title}}</h4>
                   </div>
                 </div>
                 <img  width="150" height="150" src="~/assets/SRImageTwo.png">
            </div>
        </div>
            <!-- </div> -->
        </div>

        <div style="margin-top:120px" class="wrapper mb-16">
            <h2>Our Business Consulting Services are structured to address a company’s 
                end-to-end business needs. We provide comprehensive services to support your 
                business by leveraging strategy to drive people, process, information and 
                technology considerations.<br><br>

                We provide a wide range of services to individuals and businesses in 
                a variety of industries. Our firm strives to meet each client's specific 
                needs in planning for the future and achieving their goals in an ever-changing 
                financial and regulatory environment. <br><br>

                Being one of the most trusted consulting firms in Nigeria, we provide customized 
                solutions and services to help businesses across industries and geographies to be 
                successful. We focus on delivering actionable and timely results to solve our
                 clients’ core issues and to enable them to grow and lead. From market entry
                  strategies, acquisitions, partnerships, hiring talent, we help companies
                   understand markets, expand operations, start-up new businesses and compete 
                   more effectively.

</h2>
        </div>
    </div>
    
</section>
</template>

<script>
export default {
    name:"sectionTwo",
    data(){
  return{
    cardOne:[
            {
                title:"Excellence",
                color:"#008000"
            },
            {
                title:"Execution",
                color:"#FFFFFF"
            },
            {
                title:"Enterprise",
                color:"#3B7CCB"
            },

        ],
        cardTwo:[
            {
                title:"Increased customers",
                color:"#008000"
            },
            {
                title:"Increased revenue",
                color:"#F98C8C"
            },
            {
                title:"Increased profit",
                color:"#3B7CCB"
            },
            {
                title:"Process optimization",
                color:"#000000"
            },
            {
                title:"Reduced overhead",
                color:"#008000"
            },

        ],
  }
}

}
</script>

<style lang="scss" scoped>

// .cardOne{
//     background: #F98C8C;
//     box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    
// }
.cardOne{
  background: #F98C8C;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width:100%;
  min-height: 300px;
  max-width: 550px;
  padding: 20px 30px 0;
  h2{
    color: rgba(0, 0, 0, 0.75);
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
}
.inner{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 420px;
  margin: auto;
  @media (max-width:435px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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
  border-radius: 20px;
  width:100%;
  min-height: 300px;
  max-width: 550px;
  padding: 20px 30px 10px;
  h2{
    color: rgba(0, 128, 0, 0.75);
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
  h4{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
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