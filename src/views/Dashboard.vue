<template>
    <div>
        <component :is="Nav"></component>
        <component :is="Sidebar"></component>
       <component :is="Content"></component>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import Sidebar from '../components/Sidebar.vue'
import Content from '../components/Content.vue'
export default{
    components:{
        Nav,
        Sidebar,
        Content
    },
    data(){
        return{
            Nav,
            Sidebar,
            Content
        }
    }
}
</script>

<style lang="css" scoped>
</style>