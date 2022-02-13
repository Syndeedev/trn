<template>
  <section class="mainDiv">
    <div class=" wrapper hero" >
        <h3 class="text-center">Dedicated Teams<br> For Your Dedicated Dreams</h3>
    </div>
    <div class="cardWrapper">
        <div class="card cardOne">
            <h1 class="pb-5">Who We Are</h1>
            <h3>
                TRN is a business consulting organization with expertise in General Business 
                Advisory, Staff Resourcing and Project Management. We are the preferred and 
                trusted advisory partner for numerous clients spread across Nigeria.
                <br><br>

                We are resolved to provide tailor-made solutions to the specific needs of our clients.
                Our team offers a formidable range of expertise and experience. We strongly believe in having
                constant dialogue with our clients to comprehend their requirements and offer innovative 
                customized solutions. Our pledge to augment our team has helped us in assuring high standards 
                of quality to build a dependable association with our clients.<br><br>

                Our team consists of experienced, energetic, professionally focused team of business analysts,
                business developers, Human Resource Managers, certified accountants, chartered accountants, 
                Attorneys, MBAs, Project Managers and CFAs who are dedicated to consistently providing
                efficient services.

             </h3>
        </div>
        <div class="cardTwoWrapper">
            <div class="card cardTwo">
                <h1 class="pb-5">How We Help</h1>
                <h3>
                We remove the pressure for clients by unlocking their business &
                 brand challenges with tailor-made solutions so you can make the tricky
                  decisions quickly. 
                   
                    </h3>
                    <ul>
                        <li>- Making complex simple</li>
                        <li>- Rapid turnaround & decision making</li>
                        <li>- Support to make it happen</li>
                    </ul>
            </div>
        </div>
         <div class="card cardThree">
            <h1 class="pb-5">How We Work With You</h1>
            <h3>-          We bring new ideas and unique perspectives by blending business 
                and technology expertise with creativity, logic, and an understanding of your
                 business.<br><br>
-          We create custom solutions based on client need, industry and desired outcome.<br><br>
-          We offer local delivery with firm-wide support, working with you to deliver at the
 “Right Site” whether on-site at your office, off-site at ours, offshore, or a 
 combination of these.<br><br>
-          We offer role-based consulting, complete project or workstream delivery for large
 projects. No matter what your need, we have the experts – enterprise program management
  professionals, project managers, business analysts, scrum masters, and application developers.<br><br>

                 </h3>
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
    height: auto;
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
         li{
             color: rgba(0, 128, 0, 0.75);
         }
         ul{
             list-style: none;
             padding-left: 0;
             padding-bottom: 20px;
             padding-top: 10px;
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