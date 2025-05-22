import { generarMatches } from '@/services/matchAlgorithm.js'

const props = defineProps({ usuarios: Array })
const suggestedMatches = ref([])

onMounted(() => {
  suggestedMatches.value = generarMatches(props.usuarios)
})
