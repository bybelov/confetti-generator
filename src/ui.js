import './ui.scss';

const data = {
  quantity: 10,
  opacity: {
    active: false,
    from: 0.5,
    to: 1
  },
  size: {
    active: false,
    from: null,
    to: null
  },
  rotation: {
    active: false,
    from: 0,
    to: 360
  }
};

function checkboxToggle(element, event){
  const toggleBlock = element.closest('.form-group').querySelector('.row')
  event.target.checked === true ? 
    toggleBlock.classList.remove('hide') : 
    toggleBlock.classList.add('hide')
}

function onChangeCheckbox(element){
  element.addEventListener('change', function(e){
    checkboxToggle(this, e)
  })
}

// quantity
const quantity = document.getElementById('quantity')

// opacity
const opacity = document.getElementById('opacity')
const opacityFrom = document.getElementById('opacityFrom')
const opacityTo = document.getElementById('opacityTo')

onChangeCheckbox(opacity)

// sizePPp
const size = document.getElementById('size')
const sizeFrom = document.getElementById('sizeFrom')
const sizeTo = document.getElementById('sizeTo')

onChangeCheckbox(size)

// rotation
const rotation = document.getElementById('rotation')
const rotationFrom = document.getElementById('rotationFrom')
const rotationTo = document.getElementById('rotationTo')

onChangeCheckbox(rotation)

document.getElementById('generate').onclick = () => {

  // quantity
  const quantityValue = parseInt(quantity.value, 10)
  data.quantity = quantityValue || 10;

  // opacity
  const opacityActive = opacity.checked ? true : false
  const opacityFromValue = parseFloat(opacityFrom.value)
  const opacityToValue = parseFloat(opacityTo.value)
  data.opacity.active = opacityActive || false
  data.opacity.from = opacityFromValue || 0.5
  data.opacity.to = opacityToValue || 1

  // size
  const sizeActive = size.checked ? true : false
  const sizeFromValue = parseInt(sizeFrom.value)
  const sizeToValue = parseInt(sizeTo.value)
  data.size.active = sizeActive || false
  data.size.from = sizeFromValue || null
  data.size.to = sizeToValue || null

  // rotation
  const rotationActive = rotation.checked ? true : false
  const rotationFromValue = parseInt(rotationFrom.value)
  const rotationToValue = parseInt(rotationTo.value)
  data.rotation.active = rotationActive || false
  data.rotation.from = rotationFromValue || null
  data.rotation.to = rotationToValue || null

  console.log(data);

  // const count = parseInt(textbox.value, 10)
  parent.postMessage({ pluginMessage: { type: 'generate-confetti', data } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}