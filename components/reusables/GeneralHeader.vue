<template>
<div  >
  <v-app-bar flat elevate-on-scroll fixed :style="{backgroundColor: bg}" height="auto">
    <div class="nav sectionSpacing">
      <div class="image" @click="routeTo('/')">
      <img src="~/assets/trn_logo.png" alt="trn logo">
      </div>
       
      <div class="tabbs" >
        <v-tabs class="" hide-slider >
          <!-- sectionSpacing   -->
          <v-tab to="/about" class="text-capitalize tab-title">About</v-tab>
          <v-tab @click="openMenu()" @mouseover="openMenu()"  class="text-capitalize tab-title">
          <div @mouseleave="closeMenu()"  class="wrapper ">
            Services<v-icon color="#ffffff">mdi-chevron-down</v-icon>
            <div   class="menu">
            <v-menu
            
              offset-y
              class=""
              v-model="showMenu"
            >

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <h2 class="dropdownText" @click="routeTo(item.route)">{{ item.title }}</h2>
        </v-list-item>
      </v-list>
    </v-menu>
            </div>
            
            
            </div></v-tab>
          <v-tab to="/about" class="text-capitalize tab-title">Apply for jobs</v-tab>
        </v-tabs>
        <v-btn depressed class="btn-hover"> Contact Us</v-btn>
        
      </div>
    </div>



    <!-- <div class="tw-flex  lg:tw-hidden tw-w-full tw-flex-col tw-pb-5" style="background-color: #FFFFFF">
      <div class="tw-flex tw-flex-row tw-w-full tw-justify-between tw-p-5 " >
        <div class="tw-flex tw-cursor-pointer lg:tw-hidden">
        </div>
      </div>
      <v-tabs v-if="showDropDown && $route.name !== 'Blog' && showDropDown && $route.name !== 'Post'"  class="tw-flex tw-flex-row " vertical :hide-slider="$route.name === 'LandingPage'" color="#008000">
        <v-tab  @click="to('AboutSemicolonView')" :exact="true" class="text-capitalize tab-title">About Us</v-tab>
        <v-tab @click="to('SwitPageView')" :exact="true" class="text-capitalize tab-title">SWiT</v-tab>
        <v-tab @click="to('VenturesView')" :exact="true" class="text-capitalize tab-title">StartUps</v-tab>
        <v-tab @click="to('SponsorshipPageView')" :exact="true" class="text-capitalize tab-title">Sponsorship</v-tab>
        <v-tab @click="to('Blog')" :exact="true" class="text-capitalize tab-title tab-title-mr">Blog</v-tab>
      </v-tabs>
      
      <div v-if="showDropDown && $route.name === 'Blog' || showDropDown && $route.name === 'Post'" class="tw-flex tw-w-full tw-flex-col tw-px-5">
        </div>

    </div> -->
  </v-app-bar>

</div>
</template>

<script>
export default {
  name: "GeneralHeader",
  data() {
    return {
      showDropDown : false,
      showMenu : false,
      screenWidth : window.screen.width,
      isMobile: false,
      bg : 'transparent',
      x: 0,
      y: 0,
      items: [
        { title: 'Business Consulting', route:"/business-consulting" },
        { title: 'Staff Resourcing', route:"/staff-resourcing"  },
        { title: 'Project Management', route:"/project-management"  },
      ],
    };
  },
  methods: {
    routeTo(route) {
     this.$router.push(route)
    },
    toggleShowDropDown(){
      this.showDropDown = !this.showDropDown
    },
    changeColor(){
      if (document.body.scrollTop > 100
      || document.documentElement.scrollTop > 100){
        this.bg = '#808080'
      }
      else if(this.$route.name === "about"){
        this.bg = '#808080'
      } 
      else if(document.documentElement.scrollTop < 100 && this.$route.name === "index"){
        this.bg = 'transparent'
      } 
      else{
        this.bg = 'transparent'
      }
    },
    openMenu(){
      this.showMenu = true
    },
    closeMenu(){
      this.showMenu = false
    },
    to(to){
      // console.log(this.$route)
      // if (this.$route.name !== to){
        this.$router.push(to)
      // }
      // this.showDropDown = false
    },
    // handleShowSubscribe(){
    //     this.$root.$emit('subscribe')
    // }
  },
  mounted() {
    window.onscroll = () =>{
      this.changeColor();
    }
  },
  watch:{
    getScreen(){
      return this.screenWidth <= 1023;
      
    },
    $route: {
      handler: function ( newValue) {
        if(newValue.name === "about"){
          this.bg = '#808080'
        }

      },
      immediate: true
    }
  },
}
</script>

<style scoped lang="scss">
.portrait.v-card {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}
.nav{
  max-width:1440px; 
  margin: 10px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tabbs{
  display: flex;
  align-items: center;
}
.image{
  padding: 10px 0 !important;
  cursor: pointer;
}
::v-deep .v-toolbar__content{
      align-items: unset;
    display: unset;
    padding: 0;
}

.v-btn:not(.v-btn--round).v-size--default{
    min-width: 162px;
}
.v-btn {
    background-color: #32D232 !important;
    border-style: none;
    letter-spacing: 0.5px ;
    text-transform: capitalize ;
    font-weight: 800;
}
.v-btn:not(.v-btn--round).v-size--default{
    min-width: 150px;
    height: 45px;
}
.v-btn__content{
  font-size: 16px;
  color: #ffffff !important;
}

::v-deep .v-toolbar__content, .v-toolbar__extension {
  @media screen and (max-width: 1024px){
    padding: 0 !important;
    height: auto !important;
  }
}
.v-tab {
  text-transform: capitalize;
  @media screen and (max-width: 1024px){
    max-width: 100% ;
    min-width: auto;
  }
}

.v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tab:first-child, .v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab {
  margin-left: 0 !important;
}
.v-slide-group__next, .v-slide-group__prev {
  display: none;
}
// .v-application .text-capitalize{
//   text-transform: capitalize !important;
// }
.tabbs ::v-deep .theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent;
}
.tabbs ::v-deep .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active){
  color: #ffffff;
}
.dropdownText {
  font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
text-decoration: none;
color: rgba(0, 0, 0, 0.81) !important;
}
.menu ::v-deep .v-list-item {
  min-height: 40px;
}
 .v-menu__content{
 top: 5rem !important;
    right: 18rem !important;
    left: unset !important;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){

  cursor: pointer !important;
}

</style>