import { ref, reactive } from 'vue'
import { months, days } from '@/utils/common'

const useFullDate = (date) => {
  const formatDate = ref(new Date(date))

  const dateObject = reactive({
    day: formatDate.value.getDate(),
    month: months[formatDate.value.getMonth()],
    year: formatDate.value.getFullYear(),
    weekDay: days[formatDate.value.getDay()],
  })

  return {
    ...dateObject,
  }
}

export default useFullDate
