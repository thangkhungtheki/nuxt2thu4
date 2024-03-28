<template>
  <div>
    <h1>Trang user id động {{userid}}</h1>
    <h2>User-Agent: {{agent}}</h2>
    Hiển Thị ENV
    <h1> {{url}}</h1>
    <h1></h1>
  </div>
</template>

<script>
  export default {
    asyncData(context) {
      //console.log(context.req.headers['sec-ch-ua-mobile'])
      const url = process.env.BASEURL
      //const params = context.query
      //console.log(params)
      return {
        userid: context.params.userid,
        agent: context.req.headers['user-agent'],
        url: url
      }

    },
    // validate(context){
    //     console.log(context.params)


    //     return true
    // },
    async fetch(context) {
      // Lấy địa chỉ IP của máy chủ
      const Client = context.req.headers;
      //console.log('Client IP:', Client);
    },
    data() {
      return {

        // url: _URL
      }
    },
    methods: {
      xulylayuseragent(dataagent) {
        this.userid = dataagent

      }

    },

  }
</script>

<style lang="scss" scoped>

</style>