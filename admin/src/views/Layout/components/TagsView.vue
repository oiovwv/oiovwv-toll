<template>
    <div class="tags-view-container">
        <scroll-pane ref="scrollPane" class="tags-view-wrapper">
            <router-link ref="tag" class="tags-view-item" :class="isActive(tag)?'active':''" 
                tag="span" v-for="tag in visitedViews" :key="tag.path" 
                :to="{ path: tag.path, query: tag.query,fullPath: tag.fullPath }"
                @click.middle.native="closeSelectedTag(tag)"
                @contextmenu.prevent.native="openMenu(tag,$event)">
                {{generateTitle(tag.title)}}
                <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
            </router-link>
        </scroll-pane>
    </div>
</template>
<script>
import ScrollPane from '../../../components/ScrollPane'
import {generateTitle} from '../../../utils/i18n.js'
export default {
    components:{
        ScrollPane
    },
    computed:{
        visitedViews(){
            return this.$store.state.tagsView.visitedViews
        }
    },
    watch:{
        $route(){
            this.addViewTags()
            this.moveToCurrentTag()
        }
    },
    mounted(){
        this.addViewTags()
    },
    methods:{
        generateTitle,
        isActive(route){
            return route.path === this.$route.path
        },
        addViewTags(){
            const {name}=this.$route
            if(name){
                return this.$store.dispatch('addView',this.$route)
            }
            return false
        },
        moveToCurrentTag(){
            const tags=this.$refs.tag
            for(const tag of tags){
                if(tag.to.path===this.$route.path){
                    this.$refs.scrollPane.moveToTarget(tag)
                }
                if(tag.to.path!==this.$route.fullPath){
                    this.$store.dispatch('updateVisitedView',this.$route)
                }
                break
            }
        },
        refreshSelectedTag(view) {
            this.$store.dispatch('delCachedView', view).then(() => {
                const { fullPath } = view
                this.$nextTick(() => {
                    this.$router.replace({
                        path: '/redirect' + fullPath
                    })
                })
            })
        },
        closeSelectedTag(view) {
            this.$store.dispatch('delView', view).then(({ visitedViews }) => {
                if (this.isActive(view)) {
                    const latestView = visitedViews.slice(-1)[0]
                    if (latestView) {
                        this.$router.push(latestView)
                    } else {
                        this.$router.push('/')
                    }
                }
            })
        },
        closeOthersTags() {
            this.$router.push(this.selectedTag)
            this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
                this.moveToCurrentTag()
            })
        },
        closeAllTags() {
            this.$store.dispatch('delAllViews')
            this.$router.push('/')
        },
        openMenu(tag, e){
            const menuMinWidth = 105
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$el.offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX - offsetLeft + 15 // 15: margin right
            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }
            this.top = e.clientY
            this.visible = true
            this.selectedTag = tag
        }
    }
}
</script>
<style lang="scss" scoped>
.tags-view-container {
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    .tags-view-wrapper {
        .tags-view-item {
            display: inline-block;
            position: relative;
            cursor: pointer;
            height: 27px;
            line-height: 26px;
            border: 1px solid #d8dce5;
            color: #495060;
            background: #fff;
            padding: 0 8px;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 3px;
            .el-icon-close{
                width: 16px;
                height: 16px;
                vertical-align: 2px;
                border-radius: 50%;
                text-align: center;
                transition: all .3s cubic-bezier(.645, .045, .355, 1);
                transform-origin: 100% 50%;
                &:before {
                    transform: scale(.6);
                    display: inline-block;
                    vertical-align: -3px;
                }
                &:hover {
                    background-color: #b4bccc;
                    color: #fff;
                }
            }
            &:first-of-type {
                margin-left: 15px;
            }
            &:last-of-type {
                margin-right: 15px;
            }
            &.active {
                background-color: rgb(5,165,159);
                color: #fff;
                border-color: rgb(5,165,159);
                &::before {
                    content: '';
                    background: #fff;
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    position: relative;
                    margin-right: 2px;
                }
            }
        }
    }
    .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 100;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
        li {
            margin: 0;
            padding: 7px 16px;
            cursor: pointer;
            &:hover {
                background: #eee;
            }
        }
    }
}

</style>
