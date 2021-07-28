<template>
  <div>
    <el-card>
      <div class="card-query">
        <div>
          <el-form class="form-query">
            <el-form-item>
              <el-input placeholder="关键字" v-model="keyword"></el-input>
            </el-form-item>
            <el-form-item class="btnQuery">
              <el-button
                icon="el-icon-search"
                type="primary"
                @click="handleQuery"
                >查询</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-button
            icon="el-icon-document-add"
            type="primary"
            @click="handleAdd"
            >添加</el-button
          >
          <!-- <el-button
            icon="el-icon-refresh"
            type="primary"
            @click="handleRefresh"
            >刷新</el-button
          > -->
        </div>
      </div>
    </el-card>
    <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column label="Id" prop="id" width="180"> </el-table-column>
      <el-table-column label="用户名" prop="username" width="180">
      </el-table-column>
      <el-table-column label="备注" prop="remarks"></el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-query,
.form-query {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btnQuery {
  margin-left: 10px;
}
.form-query .el-form-item {
  margin-bottom: 0px;
}
</style>