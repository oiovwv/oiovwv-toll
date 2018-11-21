import contentHeader from '../../../components/common/contentHeader'
import pagination from '../../../components/common/pagination'
import dialogComponent from '../../../components/System/dialogComponent'
import pageCheckbox from '../../../components/System/pageCheckbox'
import rdcCheckbox from '../../../components/System/rdcCheckbox'
import clientCheckbox from '../../../components/System/clientCheckbox'


export default {
    data() {
      return {
        title:{a:'权限组管理',b:'给权限组分配相应的RDC和供应商代码的权限',c:'系统管理',d:"权限组管理"},
        tHead:{name:'权限组名称',tel:'权限组类别',describe:'权限组描述',operate:'操作'},
        tBody:[
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'},
          {name:'王五',tel:'156015545545',describe:'GZ RDC APP报表,APP使用统计（分承运商）页面,仓储可视化'}
        ],
        perName:'',
        perClass:'',
        perDescribe:'',
        showDetail:false,
        showEdit:false,
        editModal:{title:'编辑权限组',isShowFooter:true},
        detailModal:{title:'权限组详细信息',isShowFooter:true},
        perDeatilList:[
          {perTitle:'页面权限',perDet:'0118-高露洁仓库管理,'},
          {perTitle:'客户代码权限',perDet:'0118-高露洁仓库管理,'},
          {perTitle:'RDC权限',perDet:'0118-高露洁仓库管理,'}
        ],
        activeTabName:'first',
        perForm:{name:'',describe:'',role:''},
        rules:{
          name:[{required:true,message: '权限组名称必填', trigger: 'blur'}],
          describe:[{required:true,message: '权限组描述必填', trigger: 'blur'}],
          role:[{required:true,message:'请选择权限组类别', trigger: 'change'}]
        },
        perTotalNum:0,
        currentPage:1,
        pageSize:20,
        checkedPermission:[]
      }
    },
    mounted(){
      document.getElementsByClassName('tbody_box')[0].style.height=document.body.clientHeight-337+'px'
      this.perTotalNum=this.tBody.length
    },
    methods:{
      currentchange(value){
        this.currentPage=value
      },
      sizechange(value){
        this.pageSize=value
      },
      addPer(){
        this.showEdit=true
        for(var key in this.perForm){
          this.perForm[key]=''
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
      edit(index){
        this.showEdit=true
        console.log(index,'我在编辑这个用户')
        this.perForm.name=this.tBody[index].name
        this.perForm.describe=this.tBody[index].describe
        // this.perForm.name=this.tBody[index].name
      },
      lookDetail(index){
        this.showDetail=true
        this.detailModal.isShowFooter=false
        console.log(index,'我再查看这个用户的详细信息')
      },
      checkAllChange(val){
        this.pageCheckedPermission = val ? this.pagePermission : [];
        this.pageIsIndeterminate = false;
      },
      checkedPerChange(value){
        console.log(value)
        let checkedCount = value.length;
        this.pageCheckAll = checkedCount === this.pagePermission.length;
        this.pageIsIndeterminate = checkedCount > 0 && checkedCount < this.pagePermission.length;
      },
      submitForm(formName) {
        console.log(this.$refs.checkedPermission.checkedPermission)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    components:{
      contentHeader,pagination,dialogComponent,pageCheckbox,rdcCheckbox,clientCheckbox
    }
}