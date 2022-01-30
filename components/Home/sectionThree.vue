<template>
    <section class="section wrapper">
        <div style="width:90%; max-width:1440px">
        <v-row>
            <v-col cols="12" sm="12" md="6">
                <div class="columnn px-4 pb-4">
                <div class="services wrapper flex-column">
                    <h2>Business Consulting</h2>
                    <div class="sub">
                        <h3 class="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed venenatis nisi ante, a feugiat nunc feugiat nec.
                        Cras feugiat fermentum libero in feugiat. Pellentesque porttitor, 
                        quam vitae interdum elementum, <span class="pl-4">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></span>
                        </h3>
                    </div>
                </div>
                </div>
            </v-col>
            
            <v-col  cols="12" sm="12" md="6">
                <div class="columnn px-4 pb-4">
                <div class="services wrapper flex-column">
                    <h2>Staff Resourcing</h2>
                    <div class="sub">
                        <h3 class="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed venenatis nisi ante, a feugiat nunc feugiat nec.
                        Cras feugiat fermentum libero in feugiat. Pellentesque porttitor, 
                        quam vitae interdum elementum, <span class="pl-4">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></span>
                        </h3>
                    </div>
                </div>
                </div>
            </v-col>
            
        </v-row>
        
        <v-row>
            <v-col  cols="12" sm="12" md="6">
                <div class="columnn px-4 pb-4">
                <div class="services wrapper flex-column">
                    <h2>Project Management</h2>
                    <div class="sub">
                        <h3 class="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed venenatis nisi ante, a feugiat nunc feugiat nec.
                        Cras feugiat fermentum libero in feugiat. Pellentesque porttitor, 
                        quam vitae interdum elementum, <span class="pl-4">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></span>
                        </h3>
                    </div>
                </div>
                </div>
            </v-col>
            
            <v-col  cols="12" sm="12" md="6">
                <div class="columnn px-4 pb-4">
                <div class="services wrapper flex-column">
                    <h2>Why trn Consulting </h2>
                    <div class="sub">
                        <h3 class="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed venenatis nisi ante, a feugiat nunc feugiat nec.
                        Cras feugiat fermentum libero in feugiat. Pellentesque porttitor, 
                        quam vitae interdum elementum, <span class="pl-4">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></span>
                        </h3>
                    </div>
                </div>
                </div>
            </v-col>
            
        </v-row>
        </div>
    </section>
</template>

<script>
export default {
    name:"sectionThree"

}
</script>
<style lang="scss" scoped>
.section{
    margin: 100px;
    @media (max-width: 960px) {
        margin: 100px 20px;
    }
}
.columnn{
    background-image: url("~/assets/heroImage.png");
    // background-repeat: no-repeat;
    // background-size: cover;
    // height: 600px;
    // background-position: center center;  
    padding-top: 120px;

}
.services{
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        color: #000000;
    }
    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.73);
    }
    span{
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.08em;
        color: #008000;
        text-transform: uppercase;
    }
}
.sub{
    max-width: 440px;
}
</style>