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
                        As professional advisors, we help companies to achieve their goals and 
                        streamline their operations in different areas including sales, IT,
                         finance, marketing, supply chain management, HR, operations,
                          engineering, and security. <br>
                          <span class="pl-4"><a href="/business-consulting">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></a></span>
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
                        Recruiting top talent takes a combination of creativity and diligence.
                         Our recruiting strategy ensures we successfully help you identify,
                          attract and hire the best candidates for your open roles. We help you
                           identify people that transform your business. <br>
                           <span class="pl-4"><a href="/staff-resourcing">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></a></span>
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
                        We help you develop sustainable plans, execute and complete projects 
                        on time with top quality. We specify the project's goal and objectives,
                         how they will be achieved, identifying tasks and quantifying the
                          resources needed, and determining budgets and timelines for completion.
                           We also help in implementing the project plan, along with operating
                            regular controls to ensure that there is accurate and objective
                             information on performance relative to the plan, and the mechanisms
                              to implement recovery actions where necessary.<br>
                              <span class="pl-4"><a href="/project-management">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></a></span>
                        </h3>
                    </div>
                </div>
                </div>
            </v-col>
            
            <v-col  cols="12" sm="12" md="6">
                <div class="columnn colFour px-4 pb-4">
                <div class="services wrapper flex-column">
                    <h2>Why trn Consulting </h2>
                    <div class="sub">
                        <h3 class="pt-4">
                        Our priority is to help you create a sustainable business.
                         We help you focus on the big dream you have and make it a reality.<br>
                       <br>
                        <span class="pl-4"><a href="/about">Read more<v-icon class="mt-n1 pl-1" color="#008000" size="15">mdi-arrow-right</v-icon></a></span>
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
    background-repeat: no-repeat;
    background-size: cover;
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
        padding: 0 10px;
    }
    span{
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        a{
            color: #008000;
            text-decoration: none;
        }
    }
}
.sub{
    max-width: 440px;
}
.colFour{
    min-height: 400px;
}
</style>