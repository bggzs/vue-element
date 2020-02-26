<template>
    <div id="login">
        <div class="login-warp">
            <ul class="menu-tab">
               <li v-for="item in menuTab" :key='item.id' :class="{'current':item.current}" @click="toggleMneu(item)">{{ item.title}}</li>
            </ul>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            
            <el-form-item prop="pass">
              <label for="密码">密码</label>
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="验证码" prop="age">
              <el-row :gutter="20">
                <el-col :span="15"><el-input v-model.number="ruleForm.age"></el-input></el-col>
                <el-col :span="5"><el-input v-model.number="ruleForm.age"></el-input></el-col>
              </el-row>
                <!-- <el-input v-model.number="ruleForm.age"></el-input> -->
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

            </el-form>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'login',
    props:{
        msg:String
    },
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        menuTab:[
            {
                title:'登录',
                current:true
            },{
                title:'注册',
                current:false
            }
        ],
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    created(){

    },
    mounted(){},
    methods:{
        toggleMneu(data){
           this.menuTab.forEach(element => {
              element.current=false;
           });
           data.current=true;
        }
    },
    update(){
       console.log('数据更新');
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    
    
}
</script>

<style lang="scss" scoped>
    #login {
        height: 100hv;
        background-color: #344a5f
    }
    .login-warp {
        width: 330px;
        margin: auto;
    }
    .menu-tab {
        text-align: center;
        li {
            display: inline-block;
            width: 88px;
            line-height: 36px;
            font-size: 14px;
            color: #ffffff;
            border-radius: 2px;
            cursor: pointer;
        }
        .current {
            background-color: rgba(0,0,0,1);
        }
    }
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
</style>