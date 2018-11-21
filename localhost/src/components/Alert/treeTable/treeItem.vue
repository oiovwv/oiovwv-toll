<template>
    <div class="tree_item">
        <table>
	      <tr>
	        <td>
	          <table>
	              <tr class="leve" @click="handlerExpand(model)"> 
                    <td @click="iomrView(model)">{{model.ObjectName}}</td>
                    <td>{{model.newBuild}}</td>
                    <td>
                        <span class="badge">21%</span>
                        {{model.shifang}}
                    </td>
                    <td>{{model.cancel}}</td>
                    <td>{{model.pick}}</td>
                    <td>{{model.fahuo}}</td>
                    <td>
                        <span class="badge">21%</span>
                        {{model.fayun}}
                    </td>
                    <td>
                        <span class="badge">21%</span>
                        {{model.jiaofu}}
                    </td>
                    <td>
                        <span class="badge">21%</span>
                        {{model.zhunshijiaofu}}
                    </td>
                    <td>
                        <span class="badge">21%</span>
                        {{model.wanzhengjiaofu}}
                    </td>
                    <td>
                        <span class="badge">21%</span>
                        {{model.huidan}}
                    </td>
                    <td>
                        <span class="badge">21%</span>
                        {{model.zhunshihuidan}}
                    </td>
	              </tr>
	          </table>
	        </td>
	      </tr>
	    </table>
	    <div v-show="model.isExpand" class="tree_node">
	        <tree-item
	          v-for="(m, i) in model.children"
	          :key="String('child_node'+i)"
	          :num='i'
	          :root="1"
	          @handlerExpand="handlerExpand"
	          :nodes.sync='model.children.length'
	          :trees.sync='trees'
	          :model.sync="m">
	        </tree-item>
	    </div>
    </div>    
</template>
<script>
export default {
    name:"treeItem",
    data(){
        return {
            parentNodeModel: null
        }
    },
    props: ['model', 'num', 'nodes', 'root', 'trees'],
    methods:{
        getParentNode(m) {
            // 查找点击的子节点
            var recurFunc = (data, list) => {
                data.forEach((l) => {
                    if (l.id === m.id) this.parentNodeModel = list
                    if (l.children) {
                        recurFunc(l.children, l)
                    }
                })
            }
            recurFunc(this.trees, this.trees)
        },
        handlerExpand(m){
            this.$emit('handlerExpand', m)
        },
        iomrView(m){
            this.$emit('iomrView',m)
        }
    }
}
</script>
