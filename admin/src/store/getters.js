const getters={
    name:state => state.user.name,
    avatar:state=>state.user.avatar,
    token:state => state.user.token,
    roles:state=>state.user.roles,
    language:state=>state.app.language,
    sidebar:state=>state.app.sidebar,
    device:state=>state.app.device,
    visitedViews:state=>state.tagsView.visitedViews,
    cachedViews:state=>state.tagsView.cachedViews,
    permission_routers:state=>state.permission.routers,
    addRouters:state=>state.permission.addRouters
}
export default getters