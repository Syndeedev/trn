<template>
<div  >
  <v-app-bar flat elevate-on-scroll fixed :style="{backgroundColor: bg}" height="auto">
    <div class="nav sectionSpacing">
      <div class="image" @click="routeTo('/')">
      <img width="60" src="~/assets/trn_logo.png" alt="trn logo">
      </div>
       
      <div class="web" >
        <nuxt-link to="/about" class="link mr-6" exact>About</nuxt-link>
          <div class="dropdown relative">
              <a style="color: #FFFFFF; text-decoration: none;" class="mr-6"
                href="javascript:"
                @mouseover="toggleDropdown"
                >Services <span style="font-size: 10px"> &#9660;</span></a
              >
              <div class="dropdown-menu"
                :class="dropdownMenuIsVisible ? 'd-flex' : 'd-none'"
                @mouseleave="dropdownMenuIsVisible = false"
              >
              <nuxt-link to="/business-consulting" class="dropDownlink" exact>Business Consulting</nuxt-link>
              <nuxt-link to="/staff-resourcing" class="dropDownlink" exact>Staff Resourcing</nuxt-link>
              <nuxt-link to="/project-management" class="dropDownlink" exact>Project Management</nuxt-link>
                
              </div>
            </div>

        <nuxt-link to="/apply" class="link mr-6" exact>Apply for jobs</nuxt-link>
        <!-- <v-btn depressed class="btn-hover"> Contact Us</v-btn> -->
        <contact-us/>
        
      </div>
      <div class="mobile">

      <nav id="navbar" class="navigation" role="navigation">
        <input id="toggle1" type="checkbox" />
        <label class="hamburger1" for="toggle1">
          <div class="top"></div>
          <div class="meat"></div>
          <div class="bottom"></div>
        </label>
      
        <nav class="menu1">
          <a class="link1" href="/about">About Us</a>
          <a class="link1" href="/business-consulting">Business Consulting</a>
          <a class="link1" href="/staff-resourcing">Staff Resourcing</a>
          <a class="link1" href="/project-management">Project Management</a>
          <a class="link1" href="/apply">Apply for jobs</a>
         <contact-us/>
        
        </nav>
    </nav>

      </div>
    </div>
  </v-app-bar>

</div>
</template>

<script>
import contactUs from './contactUs.vue';
export default {
  components: { contactUs },
  name: "GeneralHeader",
  data() {
    return {
      screenWidth : window.screen.width,
      bg : 'transparent',
      dropdownMenuIsVisible: false,
      mobileNavigationIsOpened: false,
      route: this.$route.name,
      mobileDropdownIsVisible: false,
      windowWasScrolled: false
    };
  },
  methods: {
    routeTo(route) {
     this.$router.push(route)
    },
    changeColor(){
      if (document.body.scrollTop > 100
      || document.documentElement.scrollTop > 100){
        this.bg = '#808080'
      }
      else if(this.$route.name === "about" || this.$route.name === "apply"){
        this.bg = '#808080'
      } 
      else if(document.documentElement.scrollTop < 100 && this.$route.name === "index"){
        this.bg = 'transparent'
      } 
      else{
        this.bg = 'transparent'
      }
    },
    toggleDropdown() {
      if (this.dropdownMenuIsVisible) this.dropdownMenuIsVisible = false;
      else if (!this.dropdownMenuIsVisible) this.dropdownMenuIsVisible = true;
    },
    openMobileNavigation() {
      if (this.mobileNavigationIsOpened) this.mobileNavigationIsOpened = false;
      else if (!this.mobileNavigationIsOpened)
        this.mobileNavigationIsOpened = true;
    },
    closeMobileNavigation() {
      this.mobileNavigationIsOpened = false;
    },
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
        if(newValue.name === "about" || newValue.name === "apply"){
          this.bg = '#808080'
        }

      },
      immediate: true
    }
  },
}
</script>

<style scoped lang="scss">
.link{
  text-decoration: none;
  color: #ffffff !important;
}
.dropdown-menu{
  position: absolute;
  background: #FFFFFF;
  flex-direction: column;
  width: 200px;
  padding: 20px;
  
}
.dropDownlink{
  color: #000000 !important;
  margin: 6px 0;
  text-decoration: none;
}
.nav{
  max-width:1440px; 
  margin: 10px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.web{
  display: flex;
  align-items: center;
  @media (max-width:768px) {
    display: none;
  }
}
.mobile{
  display: none;
  @media (max-width:768px) {
    display: flex;
  }
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
.dropdownText {
  font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
text-decoration: none;
color: rgba(0, 0, 0, 0.81) !important;
}








/* Hamburger */
.hamburger1 {
  height: 45px;
  margin: 5px;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  z-index: 120;
}

.hamburger1 div {
  background-color: #000000;
  position: relative;
  width: 35px;
  height: 5px;
  border-radius: 3px;
  margin-top: 7px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

#toggle1 {
  display: none;
}

#toggle1:checked + .hamburger1 .top {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  margin-top: 22.5px;
}

#toggle1:checked + .hamburger1 .meat {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  margin-top: -5px;
}

#toggle1:checked + .hamburger1 .bottom {
  -webkit-transform: scale(0);
          transform: scale(0);
}

#toggle1:checked ~ .menu1 {
  height: 340px;
}


/* Menu */
.menu1 {
  // width: 200px;
  
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-left: -13rem;
  position: absolute;
  width: 250px;
  text-align: center;
  height: 0px;
  overflow: hidden;
  z-index: 120;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.menu1 a:first-child {
  margin-top: 40px;
}

.menu1 a:last-child {
  margin-bottom: 40px;
}

.link1 {
  width: 100%;
  padding: 10px 0;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: rgba(0, 0, 0, 0.81);

}

.link1:hover {
  background-color: #fff;
  color: rgb(61, 61, 61);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>