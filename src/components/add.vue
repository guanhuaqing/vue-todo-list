<template>
<div class="add-wrap">
  <div class="form-table">
      <div>
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="please input item name......" v-model="todoItemName"/>
      </div>
      <div>
        <label for="detail">Detail:</label>
        <input type="text" name="detail" placeholder="please input item detail....." v-model="todoItemDetail"/>
      </div>
      <div>
        <button type="submit" @click="addItem" title="add a new item" >Add</button>
        <button @click="cancel" title="cancel add item"> Cancel</button>
      </div>
  </div>
</div>
</template>
<script>
import Item from '../models/item.js'
export default {
  data: function() {
    return {
      todoItemName:'',
      todoItemDetail:''
    }
  },
  computed:{
    item:function(){
      return {
          name:this.todoItemName,
          detail:this.todoItemDetail,
          time:this.$moment().format('YYYY/MM/DD HH:mm:SS'),
          status: false
      }
    }
  },
  methods:{
    addItem(){
      this.$emit('addItem',this.item);
      this.$store.commit('addToDo',this.item);
    },
    cancel(){
      this.$emit('addCancel');
    }
  }
}
</script>
<style scoped lang="scss">
.add-wrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div:not(:first-of-type){
    margin-top: 30px;
  }
  input{
    width:250px;
    height: 40px;
    text-indent: 1em;
    outline: none;
    border:1px solid lightgrey;
    border-radius: 5px;
    color: rgb(109, 107, 107);
    margin-left: 20px;
  }
  button{
    width: 60px;
    height: 40px;
    outline: none;
    background-color: #569fc4;
    border: 1px solid transparent;
    color: white;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:not(:first-of-type){
    margin-left: 30px;
  }
  label{
   // color: white;
  }
}
.form-table{
  width: 400px;
  background-color: white;
  padding: 20px 0px;
}
</style>
