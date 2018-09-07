<template>
  <div id="app">
    <!-- <Add></Add> -->
    <button @click="show = true">New Item</button>
    <todoItem></todoItem>
    <transition name="fade">
      <Add v-if="show" @addCancel="show = false" @addItem="show = false"></Add>
    </transition>
    <transition>
      <editItem v-if="editShow" @editCancel="editShow = false" @editItem="editShow = false"></editItem>
    </transition>
  </div>
</template>

<script>
import Add from './components/add.vue'
import todoItem from './components/todoItem.vue'
import editItem from './components/editItem.vue'

export default {
  name: 'app',
  components: {
    Add,
    todoItem,
    editItem
  },
  data:function(){
    return {
      show:false,
      editShow:false
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
  box-sizing: content-box;
}
html{
  width: 100%;
  height: 100%;
}
body{
  margin: 0px !important;
  padding: 0px !important;
  width: 100%;
  height: 100%;
  background-color: beige;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app > button{
    width: 80px;
    height: 40px;
    outline: none;
    background-color: #569fc4;
    border: 1px solid transparent;
    color: white;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
  }
/**add window fade animation**/
</style>
