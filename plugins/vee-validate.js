import Vue from "vue"
import { extend, localize, ValidationProvider, ValidationObserver } from "vee-validate";
import { required, email, min,max, numeric,digits, confirmed } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Object.keys(rules).forEach((rule) => {
//     extend(rule, rules[rule]);
//   });
extend("required", required);
extend("email", email);
extend("numeric", numeric);
extend("digits", digits);
extend("confirmed", {...confirmed,
message:"Password does not match"});
extend("min", min);
extend("max", max);
localize("en", en);
