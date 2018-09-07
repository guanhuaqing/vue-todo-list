<template>
 <div class="todoItem-wrap">
   <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Detail</th>
         <th>Time</th>
         <th>status</th>
         <th>operator</th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="(item,index) in items" :key="index">
         <th>{{item.name}}</th>
         <th>{{item.detail}}</th>
         <th>{{item.time}}</th>
         <th>{{item.status}}</th>
         <th>
           <button @click="editItem(item)">Edit</button>
           <button style="margin-left:10px" @click="removeItem(item)">remove</button>
         </th>
       </tr>
     </tbody>
   </table>
 </div>
</template>
<script>
export default{
  data:function(){
    return {
      items:this.$store.state.todos
    }
  },
  methods:{
    removeItem(item){
      this.$store.commit('removeToDo',item);
    },
    editItem(item){
      this.$store.commit('CurrentEditItem',item);
      this.$parent.$data.editShow = true;
    }
  }
}
</script>
<style lang="scss">
button{
  width: 80px;
    height: 20px;
    outline: none;
    background-color: #569fc4;
    border: 1px solid transparent;
    color: white;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
}
.todoItem-wrap{
  display: flex;
  flex: row;
  justify-content: center;
  align-items: flex-start;
}
table{
  width: 1000px;
  font-family: sans-serif;
  thead tr th{
    font-size: 18px;
  }
  tbody tr th{
    font-size: 15px;
    font-weight: 400;
  }
  thead tr th :nth-child(1){
    width: 150px;
  }
  thead tr th :nth-child(2){
    width: 350px;
  }
  thead tr th :nth-child(3){
    width: 200px;
  }
  thead tr th :nth-child(4){
    width: 100px;
  }
  thead tr th :nth-child(5){
    width: 200px;
  }
  tbody tr th:nth-child(1){
    width: 150px;
  }
  tbody tr th:nth-child(2){
    width: 350px;
  }
   tbody tr th:nth-child(3){
    width: 200px;
  }
   tbody tr th:nth-child(4){
    width: 100px;
  }
  tbody tr th:nth-child(5){
    width: 200px;
  }
  th{
    border: 1px  solid lightgrey;
  }
}
</style>
