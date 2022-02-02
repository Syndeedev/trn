<template>
<v-app>
  <general-header />
  <Nuxt />
  <GeneralFooter/>
</v-app>
</template>

<script>
import GeneralFooter from '~/components/reusables/GeneralFooter.vue'
import GeneralHeader from '~/components/reusables/GeneralHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { GeneralHeader, GeneralFooter },
  

}
</script>

<style lang="scss" >
.v-btn {
    background-color: #32D232 !important;
    border-style: none;
    letter-spacing: 0.5px ;
    text-transform: capitalize ;
}
.v-btn:not(.v-btn--round).v-size--default{
    min-width: 150px;
    height: 45px;
}
.v-btn__content{
  font-size: 16px;
  color: #ffffff !important;
}
.v-menu__content .theme--light .menuable__content__active {
  min-width: 0px;
    top: 5rem;
    right: 20rem;
    transform-origin: left top;
    z-index: 8;
}
.v-list-item .v-list-item__title{
 color: rgba(0, 0, 0, 0.8) ;
}
.v-select__selection--comma{
 color: rgba(0, 0, 0, 0.8);
}
// .menu{
//   min-width: 0px !important;
    
//     transform-origin: right top !important;
//     z-index: 8;
// }

</style>