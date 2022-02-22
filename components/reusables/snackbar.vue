<template>
  <div class="snackbar">
     <v-snackbar 
            :value="snackbarState"
            :timeout="timeout" 
            light
            
            width="250px"
            >
            <div class="d-flex align-end flex-column ">
                <div class="tw-pl-4"><v-icon size="15" color="#181D27" @click="close()">mdi-close</v-icon></div>

              <div class="d-flex align-center flex-column " >
                  <img class="mb-2" src="~/assets/pass.svg">
                <h5 style="color: #333333;" class="text-center">
                 Thank you for submitting. <br>
                    Our team would contact you. </h5>
              </div>
              
            </div>
          </v-snackbar>
    </div>
</template>

<script>
export default {
    props:{
        snackbar: Boolean,
        timeout: {
            type: String,
            default: "4000"
        }
    },
    
    computed: {
     snackbarState(){
          return this.snackbar
     }
    },
    watch: {
    snackbar: {
      handler(newValue, oldValue) {
        if (newValue === true) {
            setTimeout(() => {
          this.$emit('closeSnackBar', false)
           },3900)
        }
      },
      immediate: true,
    },
  },
    methods:{
        close(){
       this.$emit('closeSnackBar', false)
      
     },
    }

}
</script>

<style lang="scss" scoped>
.snackbar ::v-deep .v-snack__wrapper{
    min-width: 200px;
}
.snackbar{
    h5{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        text-align: center;

        color: #333333;
    }
}
</style>