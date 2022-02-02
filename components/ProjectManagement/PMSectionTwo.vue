<template>
  <section class="mainDiv">
       <div class="cardDivOne d-flex">
           <div class="cardOne ma-4 d-flex align-center flex-column">
               <div class="innerCardOne wrapper">
                   <h3>Our Approach</h3>
               </div>
               <div class="mt-6 px-2 mb-16">
                   <div class="d-flex my-2 align-items" v-for="(item, index) in cardOne" :key="index">
                       <v-avatar size="20" :color="item.color"></v-avatar>
                       <h4 class="pl-5">{{item.title}}</h4>
                   </div>
               </div>
               <span></span>
           </div>
           <div class="cardOne ma-4 d-flex align-center flex-column">
               <div class="innerCardTwo wrapper">
                   <h3>Our Outcome</h3>
               </div>
               <div class="mt-6 px-2 mb-16">
                   <div class="d-flex my-2 align-items" v-for="(item, index) in cardTwo" :key="index">
                       <v-avatar size="20" :color="item.color"></v-avatar>
                       <h4 class="pl-5">{{item.title}}</h4>
                   </div>
                   
               </div>
               <span></span>
           </div>
           
       </div>
      <div class="cardDivTwo d-flex">
        <h3 >
        Our Business Consulting Services are Structured to address a 
        company’s end-to-end business needs. We provide comprehensive 
        services to support your business by leveraging strategy 
        to drive people, process, information and technology 
        considerations.</h3>
        
        <img width="100%" src="~/assets/teams.png">
      </div>
  </section>
</template>

<script>
export default {
name:"PMSectionTwo",
data(){
    return{
        cardOne:[
            {
                title:"Planning",
                color:"#008000"
            },
            {
                title:"Prioritization",
                color:"#F98C8C"
            },
            {
                title:"Performance",
                color:"#3B7CCB"
            },

        ],
        cardTwo:[
            {
                title:"Increased Customers",
                color:"#008000"
            },
            {
                title:"Increased Revenue",
                color:"#F98C8C"
            },
            {
                title:"Increased Profit",
                color:"#3B7CCB"
            },
            {
                title:"Processed Optimization",
                color:"#000000"
            },
            {
                title:"Reduced Overhead",
                color:"#008000"
            },

        ],
    }
}
}
</script>

<style lang="scss" scoped>
.mainDiv{
    max-width:1440px;
     margin: -10rem auto 0; 
     width:80%;
     position: relative;
     @media (max-width: 700px) {
        width:95%;
       }
}
.cardDivOne{
    width: 90%;
    margin: 0 auto 80px;
    @media (max-width: 800px ) {
        width: 100%;
    }
    @media (max-width: 600px ) {
        width: 100%;
        flex-wrap: wrap;
    }
}
.cardOne{
    width: 100%;
    background: #FFFFFF;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25), -4px -3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}
.innerCardOne ,.innerCardTwo{
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-size: cover;
}
.innerCardOne{
    background-image: url("~/assets/pmImageOne.png");
}
.innerCardTwo{
    background-image: url("~/assets/pmImageTwo.png");
}
.cardDivTwo{
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 60px;
    align-items: center;
        justify-content: center;
    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        // max-width: 570px;
        margin-right:50px;
        color: rgba(0, 0, 0, 0.8);
        
            }
    @media (max-width: 1023px) {
        flex-wrap: wrap;
        padding: 60px 16px;
        h3{
            margin-bottom: 50px;
            margin-right:0;
        }
        
    }
}
h4{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}
</style>