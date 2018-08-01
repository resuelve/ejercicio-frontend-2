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

Vue.filter('dollar', (num) => {
  if (typeof num !== 'number') {
    num = Number.parseFloat(num)
  }

  return num / 21.50
})
