<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input
          type="txt"
          class="form-control"
          id="txtName"
          placeholder="姓名"
          v-model="formData.name"
        />
      </div>
      <div class="form-group">
        <label for="set">性别</label>
        <select class="form-control"  v-model="formData.gender">
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      </div>
      <button  @click.prevent="add" class="btn btn-success">确定</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    methods:{
        add(){
            axios
                .post(`http://localhost:3000/heroes/`,this.formData)
                .then(response=>{
                    const status = response.status
                    if (status == 201) {
                        this.$router.push({name:'heroes'})
                    }
                    
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }
}
</script>

