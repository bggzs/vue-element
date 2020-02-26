<template>
    <div id="index">
        <el-row>
            <el-col :span="24">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">工作平台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" >消息中心</el-menu-item>
                <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
                </el-menu>
            </el-col>
        </el-row>
        <el-row class="tac">
            <el-col :span="4">
                 <h5>导航菜单</h5>
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">基础信息管理</span>
                    </el-menu-item>

                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>信息管理</span>
                        </template>   
                        <el-menu-item-group title="">
                        <el-menu-item index="1-3">党员志愿者</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                        <el-menu-item index="1-1">党建联盟</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">群众志愿者</template>
                       
                        <el-badge :value="12" class="item">
                         <el-menu-item index="1-4-1">志愿者信息</el-menu-item>
                        </el-badge>
                        </el-submenu>    
                    </el-submenu>
                    
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">志愿者评价</span>
                    </el-menu-item>
                    
                    </el-menu>
            </el-col>
            <el-col :span="20">
                <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="新增" name="first">新增</el-tab-pane>
                    <el-tab-pane label="编辑" name="second">编辑</el-tab-pane>
                    <el-tab-pane label="审核" name="third">审核</el-tab-pane>
                    <el-tab-pane label="作废" name="fourth">作废</el-tab-pane>
                    <el-tab-pane label="详情" name="five">详情</el-tab-pane>
                </el-tabs>
                </template>
                    <!-- <el-col :span='4'>
                        <div class="block">
                            <el-date-picker
                            v-model="value2"
                            type="datetime"
                            placeholder="选择日期时间"
                            align="right"
                            :picker-options="pickerOptions">
                            </el-date-picker>
                        </div>
                    </el-col> -->
                    <el-col :span='4'>
                        <el-input v-model="input_ID" placeholder="请输入ID"></el-input>
                    </el-col>
                    <el-col :span='4'>
                        <el-select v-model="value" placeholder="分厂">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span='4'>
                        <el-select v-model="value" placeholder="类型">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <!-- <el-col :span='4'>
                        <el-select v-model="value" placeholder="年龄">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span='4'>
                        <el-select v-model="value" placeholder="职业">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    
                    
            </el-col> 
            
             <el-col span="20">
                 <el-col :span='4'>
                        <el-select v-model="value" placeholder="专业特长">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>    
                        </el-select>
                    </el-col>
                    <el-col :span='4'>
                        <el-select v-model="value" placeholder="志愿服务">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col> -->
                    <el-col :span="4"><el-button>----查询----</el-button></el-col>
            </el-col> 
           
           
                <el-col :span='16'>
                    <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column prop='job' label="职业" width="190"></el-table-column>
                    <el-table-column prop='phone' label='手机号码' width="180"></el-table-column>
                    <el-table-column
                        prop="address"
                        label="活动详情">
                    </el-table-column>
                </el-table>
                </el-col>    
        </el-row>
        <el-row>
            <!-- <el-col :span='6' :offset="4">
                <div class="demo-image__placeholder">
                      <div class="block">
                        <span class="demonstration">生成的表格</span>
                        <el-image :src="require('@/assets/img3.png')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                        </el-image>
                    </div>
                    </div>
            </el-col>
            <el-col :span='6' :offset="4">
                <div class="demo-image__placeholder">
                      <div class="block">
                        <span class="demonstration">生成的表格</span>
                        <el-image :src="require('@/assets/img4.png')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                        </el-image>
                    </div>
                    </div>
            </el-col> -->
            <el-col :span='10' offset='4'>
                 <div class="demo-image__placeholder">
                      <div class="block">
                        <span class="demonstration">生成的表格</span>
                        <el-image :src="require('@/assets/img5.png')">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                        </el-image>
                    </div>
                    </div>
            </el-col>
        </el-row>
       
    </div>
</template>

<script>
export default {
    name:'index',
    props:{
        msg:String
    },
    data(){
        return {
            activeIndex: '1',
            activeIndex2: '1',
            input_ID:'',
            activeName:'',
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
                value: '',
                pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                    },
                    value1: '',
                    value2: '',
                    value3: '',
                    tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'13758825386',
                    job:'医生'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    phone:'13758825386',
                    job:'医生'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    phone:'13758825386',
                    job:'医生'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone:'13758825386',
                    job:'医生'
                }],
                 input: '',
                 job:''
                
        }
    },
    methods:{
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }, handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang='scss' scoped>
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
    .item {
    margin-top: 10px;
    margin-right: 40px;
    }
</style>