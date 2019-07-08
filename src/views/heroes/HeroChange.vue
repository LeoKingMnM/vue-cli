<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改信息</h2>
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
      <button  @click.prevent="change" class="btn btn-success">确定</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data() {
        return {
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    mounted(){
        this.loadDataById()
    },
    methods:{
        loadDataById(){
            axios
                .get(`http://localhost:3000/heroes/${this.id}`)
                .then(response=>{
                    const { data , status } = response
                    if (status == 200) {
                        this.formData = data
                    }
                })
        },
        change(){
            axios
                .put(`http://localhost:3000/heroes/${this.id}`,this.formData)
                .then(response=>{
                    const status = response.status
                    if (status == 200) {
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

