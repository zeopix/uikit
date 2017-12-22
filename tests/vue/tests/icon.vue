
<script>
import ipsum from 'lorem-ipsum';
import svg from './svg.vue';

export default {

    name:'icon',
    
    extends: svg,

    props: {
        
        icon: {
            type: String,
            default: 'home',
            options: UIkit.icon.list()
        }
    }
}

</script>

