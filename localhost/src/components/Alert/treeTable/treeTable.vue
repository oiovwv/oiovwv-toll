<template>
    <div>
        <table class="tree_table">
            <thead>
                <tr>
                    <th>
                        <div v-for="(value,key) in tHead" :key="key">
                            {{value}}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <tree-item
							v-for="(model,i) in treeDataSource"
                            :key="'root_node_'+i"
                            :root="0"
                            :num="i"
                            @handlerExpand="handlerExpand"
                            @iomrView="iomrView"
                            :nodes="treeDataSource.length"
                            :trees.sync="treeDataSource"
                            :model.sync="model">
						</tree-item> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>

export default {
    name:"treeTable",
    data(){
        return {
            treeDataSource:[]
        }
    },
    props:{
        tHead:{
            type:Object
        },
        list:{
            type:Array
        }
    },
    watch:{
        'list':{
            handler() {
                this.init()
            },
            deep: true
        }
    },
    components:{
        treeItem: () => import('./treeItem.vue')
    },
    mounted() {
        const vm = this
        vm.$nextTick(() => {
            vm.init()
        })
	},
    methods:{
        init(){
            let tempData = JSON.parse(JSON.stringify(this.list))
            let reduceDataFunc = (data, level) => {
                data.map((m, i) => {
                    m.isExpand = false
                    m.children = m.children || []
                    if (m.children.length > 0) {
                        reduceDataFunc(m.children, level + 1)
                    }
                })
            }
            reduceDataFunc(tempData, 1)
            this.treeDataSource = tempData
        },
        // 展开
        handlerExpand(m) {
            this.$emit('handlerExpand',m)
        },
        iomrView(m){
            this.$emit('iomrView',m)
        }
    }
}
</script>
<style scoped>
.tree_table>thead th{
    text-align: left;
}
.tree_table>thead th>div{
    display: inline-block;
}
.tree_table{
    width: 99%;
    margin: 5px auto 0;
    border-collapse: collapse;
}
.tree_table tr th,.tree_table tr td{
  font-size: 14px;
  color: #444;
  padding: 8px;
  border: 1px solid #eee;
}
.tree_table tr td,.tree_table>thead th>div{
    text-align: center;
}
.tree_table tr td{
    border-top: none;
    cursor: pointer;
}
</style>
