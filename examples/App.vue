<template>
  <div id="app">
    1111
    <s-button type="primary" fillet @click="dialogTableVisible=true">主要按钮</s-button>
    <s-dialog 
      title="这是一个dialog"
      width="800"
      :sVisible.sync="dialogTableVisible"
      >
      <div slot="sMain">
          111
      </div>
      <div slot="sFoot">
          <s-button type="primary" @click="dialogTableVisible=false">确定</s-button>
          <s-button  @click="dialogTableVisible=false">取消</s-button>
      </div>
  </s-dialog>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      dialogTableVisible:false
    }
  },
  methods:{
  },
  watch: {
  },
  
}
</script>

<style scoped>

</style>
