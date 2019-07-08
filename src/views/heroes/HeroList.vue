<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <a class="btn btn-success" href="add.html">Add</a>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lorem</td>
                <td>女</td>
                <td>
                  <a href="edit.html">添加</a>
                  &nbsp;&nbsp;
                  <a href="javascript:;">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>