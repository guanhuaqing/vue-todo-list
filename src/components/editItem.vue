<template>
<div class="add-wrap">
  <div class="form-table">
      <div>
        <label for="detail">Detail:</label>
        <input type="text" name="detail"  v-model="todoItemDetail"/>
      </div>
      <div>
        <label for="status">Status:</label>
        <input type="checkbox" name="status"  v-model="todoItemStatus"/>
      </div>
      <div>
        <button type="submit" @click="saveItem" title="add a new item" >Edit</button>
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
      todoItemDetail:this.$store.state.newTodo.detail,
      todoItemStatus:this.$store.state.newTodo.status
    }
  },
  computed:{
    item:function(){
      return {
          name:this.$store.state.newTodo.name,
          detail:this.todoItemDetail,
          time:this.$store.state.newTodo.time,
          status: this.todoItemStatus
      }
    }
  },
  methods:{
    saveItem(){
      this.$emit('editItem',this.item);
      this.$store.commit('saveEditItem',this.item);
    },
    cancel(){
      this.$emit('editCancel');
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
  input[type='text']{
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
}
.form-table{
  width: 350px;
  background-color: white;
  padding: 20px 0px;
}
.form-table > div{
  width: 100%;
}
</style>
