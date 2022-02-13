<template>
  <section class="mainDiv">
    <div class="cardWrapper">
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
          
        </div>
        <div class="cardTwo mt-4">
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
    </div>
      
      <div class="rowTwo">
          <div class="image">
            <img src="~/assets/SRImageThree.png">
          </div>
          <div class="text wrapper">
            <h3>Our Business Consulting Services are Structured to address a 
              company’s end-to-end business needs. We provide comprehensive 
              services to support your business by leveraging strategy to drive
               people, process, information and technology considerations.</h3>
          </div>

      </div>
      <div class="vector">
         <img src="~/assets/vectorThree.svg">
     </div>
  </section>
</template>

<script>
export default {
name:"staffResourcingSectionTwo",
data(){
  return{
    cardOne:[
            {
                title:"Enterprise",
                color:"#008000"
            },
            {
                title:"Entrepreneurship",
                color:"#FFFFFF"
            },
            {
                title:"Employability",
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
     margin:auto; 
     width:90%;
     position: relative;
     @media (max-width: 700px) {
        width:95%;
       }
}
.cardWrapper{
  display: flex;
  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
  
}
h4{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}
.cardOne{
  background: #F98C8C;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width:100%;
  min-height: 300px;
  padding: 20px 30px 0;
  h2{
    color: rgba(0, 0, 0, 0.75);
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
}
.cardTwo{
  background: #FFFFFF;
  box-shadow: -4px -3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width:100%;
  min-height: 300px;
  padding: 20px 30px 10px;
  h2{
    color: rgba(0, 128, 0, 0.75);
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
.rowTwo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto 0;
  h3{
    font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  max-width: 570px;
  color: rgba(0, 0, 0, 0.8);

  }
  @media (max-width: 950px) {
    justify-content: center;
  }
}
.image{
  @media (max-width: 850px) {
    display: none;
  }
}
.text{
  padding: 0 64px;
  @media (max-width: 950px) {
    padding: 0 32px;
  }
  @media (max-width: 500px) {
    padding: 0 16px;
  }
  @media (max-width: 320px) {
    padding: 0 0;
  }
}
.vector{
position: absolute;
bottom: 0;
left: -20%;
}
</style>