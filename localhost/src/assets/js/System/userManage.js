import contentHeader from '../../../components/common/contentHeader'
import pagination from '../../../components/common/pagination'
import dialogComponent from '../../../components/System/dialogComponent'

const cityOptions = ['GZ RDC APP报表', 'AMW-户订单查询', 'GZ3 RDC代码权限', 'Real time CT日报表',
'CT各项目年统计','CT各项目月的平均值','运输预警',
'快乐好呢','就很难你的','记得你分开','合法的你还','得看好你DNF',
'均值还记','图表的平','统计图表','安利客','就覅设计风格','g几个点','gkodh','几点集合','sfak','sfasf','fasf','afaf'];
const permissionTotal=cityOptions.length;

export default {
    data() {
      let checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        let regPhone=/^1[3456789]\d{9}$/
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (!regPhone.test(value)) {
              callback(new Error('格式不正确'));
            } else {
              callback();
            }
          }
        }, 1000);
      }
      let checkUser=(rule,value,callback)=>{
        if(value=='siji'){
          this.$message({
            showClose: true,
            message: '如果注册账号是司机角色，请填上TMS承运商ID号',
            type: 'warning',
            duration:5000
          });
          return false
        }else if(value=='yuangong'){
          this.$message({
            showClose: true,
            message: '如果注册账号是员工角色，请填上EKP账号',
            type: 'warning',
            duration:5000
          });
          return false
        }else{
          callback()
        }
      }
      let checkName=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('姓名不能为空'))
        }else{
          callback()
        }
      }

      return {
        title:{a:'用户管理',b:'管理用户',c:'系统管理',d:"用户管理"},
        tHead:{name:'姓名',tel:'账号',user:'角色',status:'状态',group:'所属组',
        permission:'新增权限',operate:'操作'},
        tBody:[
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化,发生那个是那个世界的'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',user:'USER',status:'ENABLE',group:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'}
        ],
        uname:'',
        tel:'',
        user:'',
        status:'',
        userForm:{
          phone:'',name:'',role:'',ekp:'',companyName:'',tmsId:'',tmsName:'',licenseNum:''
        },
        showDetail:false,
        showEdit:false,
        showPermission:false,
        editModal:{title:'编辑用户',isShowFooter:true},
        detailModal:{title:'用户详细信息',isShowFooter:true},
        permissionModal:{title:'添加权限',isShowFooter:true},
        detailList:[
          {subtitle:'ID',val:'1441'},
          {subtitle:'姓名',val:'1441'},
          {subtitle:'账号',val:'1441'},
          {subtitle:'角色',val:'1441'},
          {subtitle:'公司名称',val:'1441'},
          {subtitle:'EKP',val:'1441'},
          {subtitle:'车牌号',val:'1441'},
          {subtitle:'账号状态',val:'1441'},
          {subtitle:'注册日期',val:'1441'},
          {subtitle:'所属组',val:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化放假的放假 到附近的酒店附近的房价减肥减肥'}
        ],
        checkAll: false,
        checkedCities: [],
        cities: cityOptions,
        permissionTotal:permissionTotal,
        isIndeterminate: true,
        //表单验证规则
        rules:{
          phone:[{ required: true,validator:checkPhone,trigger: 'blur'}],
          name:[{ required: true,validator:checkName,trigger: 'blur'}],
          role:[{required:true,validator:checkUser,trigger:'change'}]
        },
        userTotalNum:0,
        currentPage:1,
        pageSize:20,
        smallCurrentPage:1,
        smallSizePage:20
      }
    },
    computed:{
      // ...mapGetters(['count'])
    },
    mounted(){
      document.getElementsByClassName('tbody_box')[0].style.height=document.body.clientHeight-337+'px'
      this.userTotalNum=this.tBody.length
    },
    methods:{
      handleCurrentChange(val) {
        this.smallCurrentPage=val
        console.log(`当前页: ${val}`);
      },
      currentchange(value){
        this.currentPage=value
      },
      sizechange(value){
        this.pageSize=value
      },
      addUser(str){
        this.showEdit=true
        for(var key in this.userForm){
          this.userForm[key]=''
        }
        if(str=='添加'){
          this.editModal.title="添加用户"
        }
      },
      closeEdit(){
        this.showEdit=false
      },
      closeDetail(){
        this.showDetail=false
      },
      closePermission(){
        this.showPermission=false
      },
      edit(index,str){
        this.showEdit=true
        if(str==''){
          this.editModal.title="编辑用户"
        }
        this.userForm.phone=this.tBody[index].tel
        this.userForm.name=this.tBody[index].name
      },
      disable(index){
        console.log(index,'我在禁用这个用户')
      },
      lookDetail(index){
        this.showDetail=true
        this.detailModal.isShowFooter=false
        console.log(index,'我再查看这个用户的详细信息')
      },
      addPermission(index){
        this.showPermission=true
        console.log(index,'我在为这个用户新增权限')
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      submitForm(formName){
        // // this.$refs[formName].validate(valid=>{
        // //   if(valid){
        // //     console.log('提交')
        // //   }else{
        // //     console.log('验证未通过')
        // //     return false
        // //   }
        // // })
        // let dto={"accessType":"ADMIN" , "postMessage": "123456"}
        // this.$axios({
        //   method:"POST",
        //   url:'http://ent.moyeda.cn/api/User/Access',
        //   data:dto
        // }).then(res =>{
        //   console.log(res)
        // }).catch(error =>{
        //   console.log(error)
        // })
        // // this.closeEdit()
      }
    },
    components:{
      contentHeader,pagination,dialogComponent
    }
}