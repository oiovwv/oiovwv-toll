<template>
    <transition :name="transitionName">
        <div v-show="visible" class="back-to-ceiling" :style="customStyle" @click="backToTop">
            <svg class="Icon Icon--backToTopArrow">
                <!-- <title>回到顶部</title> -->
                <g>
                    <path d="M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z" fill-rule="evenodd"/>
                </g>
            </svg>
        </div>
    </transition> 
</template>
<script>
export default {
    data(){
        return {
            visible:false,
            interval:null,
            isMoving:false
        }
    },
    props:{
        visibilityHeight:{
            type:Number,
            default:350
        },
        backPosition:{
            type:Number,
            default:0
        },
        customStyle:{
            type:Object,
            default:function(){
                return {
                    width:'40px',
                    height:'40px',
                    right:'50px',
                    bottom:'50px',
                    background:'#e7eaf1',
                    'line-height':'45px',
                    'border-radius':'4px',
                    display: 'block'
                }
            }
        },
        transitionName:{
            type:String,
            default:'fade'
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy(){
        window.removeEventListener('scroll',this.handleScroll)
        if(this.interval){
            clearInterval(this.interval)
        }
    },
    methods:{
        handleScroll(){
            console.log(window)
            this.visible=window.pageYOffset>this.visibilityHeight
        },
        backToTop(){
            if(this.isMoving) return
            const start=window.pageYOffset
            let i=0
            this.isMoving=true
            this.interval=setInterval(()=>{
                const next=Math.floor(this.easeOutQuad(10 * i, start, -start, 500))
                if(next<this.backPosition){
                    window.scrollTo(0,this.backPosition)
                    clearInterval(this.interval)
                    this.isMoving=false
                }else{
                    window.scrollTo(0,next)
                }
                i++
            },16.8)
        },
        easeOutQuad(t,b,c,d){
            if ((t /= d / 2) < 1) return c / 2 * t * t + b
            return -c / 2 * (--t * (t - 2) - 1) + b
        }
    }
}
</script>
<style lang="scss" scoped>
.back-to-ceiling{
    position: fixed;
    text-align: center;
    cursor: pointer;
}
.Icon{
    width: 16px;
    height: 16px;
    fill: #9aaabf;
    background: none;
}
.fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
}
.fade-leave-to,.fade-enter{
    opacity: 0;
}
</style>
