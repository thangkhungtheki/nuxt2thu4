
<template>
  <div>
    <b-container class="containersimple">

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="User name:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.username" type="text" placeholder="Nhập User name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Mật khẩu:" label-for="input-2" @submit.stop.prevent>
          <b-form-input id="input-2" v-model="form.password" placeholder="Nhập mật khẩu" type="password" required></b-form-input>
        </b-form-group>




        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  import loginBackend from "@/backend/login"
  import {checklogin} from "@/backend/action"
  export default {
    async mounted() {
      const data1 =  await checklogin(this?.form?.username, this?.form?.password)
      console.log(data1)
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },

        show: true
      }
    },
    methods: {
       onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this?.form))
        // this.login()
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      // async login() {
      //   const data = await loginBackend(this?.form?.username,this?.form?.password)
      //   console.log(data ? data : 'undefined')
      //   try {
      //     const response = await axios.post('http://127.0.0.1:3979/api/login/jwt', {
      //       username: this?.form?.username,
      //       password: this?.form?.password
      //     });
      //     console.log(response?.data)
      //   } catch (error) {
      //     console.log(error)
      //   }


      // },
    }
  }
</script>
<style>
  .containersimple {
    margin: 5 rem;
  }
</style>