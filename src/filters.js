import Vue from 'vue'

Vue.filter('currency', (num) => {
  if (typeof num !== 'number') {
    num = Number.parseFloat(num)
  }

  return num.toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
})
