import './ui.scss';

function checkboxToggle(element, event) {
  const toggleBlock = element.closest('.form-group').querySelector('.row')
  event.target.checked === true ?
    toggleBlock.classList.remove('hide') :
    toggleBlock.classList.add('hide')
}

function minmax(value, min, max) {
  if (+value < min || isNaN(+value)) {
    return min;
  } else if (+value > max) {
    return max;
  } else {
    return value;
  }
}

function maxLengthCheck(object) {
  if (object.value.length > object.max.length)
    object.value = object.value.slice(0, object.max.length)
}

function onChangeCheckbox(element, from, to) {
  element.addEventListener('change', function (e) {
    checkboxToggle(this, e)
  })
}

// quantity
const quantity = document.getElementById('quantity')
// opacity
const opacity = document.getElementById('opacity')
const opacityFrom = document.getElementById('opacityFrom')
const opacityTo = document.getElementById('opacityTo')
// sizePPp
const size = document.getElementById('size')
const sizeFrom = document.getElementById('sizeFrom')
const sizeTo = document.getElementById('sizeTo')
// rotation
const rotation = document.getElementById('rotation')
const rotationFrom = document.getElementById('rotationFrom')
const rotationTo = document.getElementById('rotationTo')


onChangeCheckbox(opacity)
onChangeCheckbox(size)
onChangeCheckbox(rotation)

function minmaxHandler(element) {
  element.addEventListener('keyup', (e) => {
    maxLengthCheck(e.target)
    e.target.value = minmax(e.target.value, e.target.min, e.target.max)
  })
}

minmaxHandler(quantity)
minmaxHandler(sizeFrom)
minmaxHandler(sizeTo)
minmaxHandler(rotationFrom)
minmaxHandler(rotationTo)

function getFormData(form) {
  const formData = new FormData(form);
  let obj = {}
  formData.forEach((value, key) => {
    obj[key] = value
  });
  return obj
}

function checkData(data) {
  return {
    quantity: Math.abs(parseInt(data.quantity, 10)) > 999 ? 25 : Math.abs(parseInt(data.quantity, 10)) || 25,
    opacity: data.opacity == 'on' ? true : false,
    opacityFrom: Math.abs(data.opacityFrom) > 1 ? 1 : Math.abs(data.opacityFrom) || 0.1,
    opacityTo: parseFloat(data.opacityTo) > 1 ? 1 : parseFloat(data.opacityTo) || 1,
    size: data.size == 'on' ? true : false,
    sizeFrom: Math.abs(parseInt(data.sizeFrom)) > 999 ? 8 : Math.abs(parseInt(data.sizeFrom)) || 8,
    sizeTo: Math.abs(parseInt(data.sizeTo)) > 999 ? 100 : Math.abs(parseInt(data.sizeTo)) || 100,
    rotation: data.rotation == 'on' ? true : false,
    rotationFrom: Math.abs(parseInt(data.rotationFrom)) > 360 ? 0 : Math.abs(parseInt(data.rotationFrom)) || 0,
    rotationTo: Math.abs(parseInt(data.rotationTo)) > 360 ? 360 : Math.abs(parseInt(data.rotationTo)) || 360,
  }
}

document.getElementById('generate').onclick = () => {

  const form = document.getElementById('form')
  let data = checkData(getFormData(form))

  parent.postMessage({
    pluginMessage: {
      type: 'magic',
      data
    }
  }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({
    pluginMessage: {
      type: 'cancel'
    }
  }, '*')
}