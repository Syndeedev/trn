<template>
  <section class="mainDiv">
      
      <div class="hero">
          <div class="wrapper mobileCoreText pt-4 pb-12">
                   <h1>Our Core Values</h1>
                  </div>
         
         <div class="web">
          <v-row>
              <v-col  sm="12" md="3">
                  <div class="emptySpace" ></div>
                  <div class="wrapper flex-column">
                    <img class="pb-4" src="~/assets/book-open.svg" alt="book-open">
                    <img width="200px" src="~/assets/integrity.svg" alt="transparency">
                    <h2 class="px-4">Hold to principles and deliver outstanding work that meets personal and firm standards. 
                    </h2>
                  </div>

              </v-col>
              <v-col sm="12" md="6">
                  <div class="wrapper emptySpace coreValues">
                   <h1>Our Core Values</h1>
                  </div>
                  <v-row>
                      <v-col  sm="12" md="6" >
                        <div class="wrapper flex-column">
                            <img class="pb-4" src="~/assets/settings.svg" alt="book-open">
                            <img src="~/assets/responsibility.svg" alt="transparency">
                            <h2 class="px-4">Seek, accept, and encourage ownership of work and behavior. Be proactive, be a leader, and discourage passivity.
                            </h2>
                        </div>
                      </v-col>
                     
                      <v-col style="border-left: 1px solid #ffffff; width: 100%" sm="12" md="6" >
                        <div class="wrapper flex-column">
                            <img class="pb-4" src="~/assets/globe.svg" alt="book-open">
                            <img src="~/assets/openness.svg" alt="transparency">
                            <h2 class="px-4">Emphasize teamwork and transparency. Avoid cynicism. Be constructive and helpful when interacting with clients and colleagues.
                            </h2>
                        </div>
                      </v-col>
                  </v-row>
              </v-col>
              <v-col sm="12" md="3">
                  <div class="emptySpace"></div>
                  <div class="wrapper flex-column">
                    <img class="pb-4" src="~/assets/gift.svg" alt="book-open">
                    <img width="200px" src="~/assets/improvement.svg" alt="transparency">
                    <h2 class="px-4">Strive for personal and professional growth. Avoid complacency.

                    </h2>
                  </div>

              </v-col>
          </v-row>
         </div>


         <div class="mobile">
             <v-row>
              <v-col xs="12" sm="6" md="6">
                  
                  <div class="wrapper flex-column">
                    <img class="pb-4" src="~/assets/book-open.svg" alt="book-open">
                    <img width="200px" src="~/assets/integrity.svg" alt="transparency">
                    <h2 class="px-4">Hold to principles and deliver outstanding work that meets personal and firm standards. 
                    </h2>
                  </div>

              </v-col>
             
                      <v-col xs="12" sm="6" md="6" >
                        <div class="wrapper flex-column">
                            <img class="pb-4" src="~/assets/settings.svg" alt="book-open">
                            <img src="~/assets/responsibility.svg" alt="transparency">
                            <h2 class="px-4">Seek, accept, and encourage ownership of work and behavior. Be proactive, be a leader, and discourage passivity.
                            </h2>
                        </div>
                      </v-col>
                     
                      <v-col xs="12" sm="6" md="6" >
                        <div class="wrapper flex-column">
                            <img class="pb-4" src="~/assets/globe.svg" alt="book-open">
                            <img src="~/assets/openness.svg" alt="transparency">
                            <h2 class="px-4">Emphasize teamwork and transparency. Avoid cynicism. Be constructive and helpful when interacting with clients and colleagues.
                            </h2>
                        </div>
                      </v-col>
               
              <v-col xs="12" sm="6" md="6">
                 
                  <div class="wrapper flex-column">
                    <img class="pb-4" src="~/assets/gift.svg" alt="book-open">
                    <img width="200px" src="~/assets/improvement.svg" alt="transparency">
                    <h2 class="px-4">Strive for personal and professional growth. Avoid complacency.

                    </h2>
                  </div>

              </v-col>
          </v-row>
         </div>
      </div>

  </section>
</template>

<script>
export default {
    name:"CoreValues",
    data(){
        return{
            coreValues:[
                
            ]
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
.hero{
    background-image: url("~/assets/coreValues.png");
    background-repeat: no-repeat;
    background-size: cover;
    // min-height: 500px;
    padding: 20px;
    background-position: center center; 
    margin: 150px auto 0;
    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
        color: rgba(255, 255, 255, 0.85);
    }
}
.coreValues{
    height: 200px;
    border-right: 1px solid #FFFFFF;
    border-left: 1px solid #FFFFFF;
}
.emptySpace{
    height: 200px;
     @media (max-width: 1023px) {
        display: none;
    }
}
h1{
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 44px;
    color: #FFFFFF;
    text-align: center;
    @media (max-width: 700px) {
    font-size: 24px;
    }

}
.mobileCoreText{
    @media (min-width: 1024px) {
    display: none;
    }
}
.mobile{
    display: none;
    @media (max-width: 1023px) {
    display: inline;
    }
}
.web{
    display: none;
    @media (min-width: 1024px) {
    display: inline;
    }
}

</style>