<template>
  <section style="background: #2262B3; margin-top:30px;" class="wrapper">
    
      <v-row  style="max-width:1440px">
            <v-col  class="wrapper px-4" cols="12" sm="12" md="6">
                <div  class="column_one">
                    <h2 >
                         Being one of the most trusted consulting firms in Nigeria, we provide
                         customized solutions and services to help businesses across industries 
                         and geographies to be successful. We focus on delivering actionable and
                          timely results to solve our clients’ core issues and to enable them to 
                          grow and lead. From business strategies, hiring talent, project 
                          management, we help companies understand markets, expand operations, 
                          start-up new businesses and compete more effectively.
                    </h2>
                    
                </div>
            </v-col>
             <v-col  class="wrapper column_two" cols="12" sm="12" md="6">
                 <div class="image">
                 <img src="~/assets/smile.png">
                 </div>
                 <div class="otherImage">
                     <v-img max-height="150"
                        max-width="350" :src="require('~/assets/smile.png')"></v-img>
                 </div>
             </v-col>
      </v-row>

  </section>
</template>

<script>
export default {
    name:"sectionFour"

}
</script>
<style lang="scss" scoped>
.column_one{
    max-width: 500px;
    padding: 40px 30px;
    text-align: center;
    @media (max-width:600px) {
       padding: 40px 16px;
    }
    h2{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    }
}
.column_two{
    position: relative;
    @media (max-width:959px) {
    }
}
.image{
    position: absolute;
    bottom: 5px;
    @media (max-width:959px) {
        display: none;
    }
}
.otherImage{
    display: none;
    @media (max-width:959px) {
        display: flex;
    }
}
</style>