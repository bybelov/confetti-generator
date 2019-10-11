'use strict'

function randomInt(from, to) {
  return Math.floor(from + (to - from) * Math.random());
}

function randomFloat(min, max) {
  return parseFloat(((Math.random() * (max - min)) + min).toFixed(1));
}

function noRepeatX(nodes) {
  for (let k; k < nodes.length; k++) {
    if ((el.x + el.width) < node[k].x && (el.x + el.width) > (node[k].x + node[k].width)) {
      return
    } else {
      el.x = randomInt(0, maxX);
      noRepeatX();
    }
  }
}

function noRepeatY(nodes) {
  for (let k; k < nodes.length; k++) {
    if ((el.y + el.height) < node[k].y && (el.y + el.height) > (node[k].y + node[k].height)) {
      return
    } else {
      el.y = random(0, maxY);
      noRepeatY();
    }
  }
}

figma.showUI(__html__, {
  width: 356,
  height: 400
});

figma.ui.onmessage = msg => {

  if (msg.type === 'magic') {

    const data = msg.data;
    let parentNode,
      maxX,
      maxY,
      nodes = [],
      selections,
      selectionsLength;

    selections = figma.currentPage.selection;
    selectionsLength = selections.length;

    try {
      // parent node
      parentNode = selections[0].parent
      if (parentNode.type === 'PAGE') {
        alert('You have chosen a parent. Select its children.');
        return
      }
      // max x, y coordinates
      maxX = parentNode.width;
      maxY = parentNode.height;
    } catch (error) {
      alert('Select the elements inside the frame');
      return
    }

    let length;
    if (data.quantity - selectionsLength <= 0) {
      length = data.quantity;
    } else {
      length = data.quantity - selectionsLength;
    }

    for (let i = 0; i < length; i++) {

      const el = selections[randomInt(0, selectionsLength)];

      if (data.rotation === true) {
        el.rotation = randomInt(data.rotationFrom, data.rotationTo);
      }
      if (data.opacity === true) {
        el.opacity = randomFloat(data.opacityFrom, data.opacityTo);
      }

      if (data.size === true) {
        const proportional = el.width / el.height
        const resizeWidth = randomInt(data.sizeFrom, data.sizeTo)
        const resizeHeight = resizeWidth / proportional
        el.resize(resizeWidth, resizeHeight)
      }

      el.x = randomInt(0, maxX);
      el.y = randomInt(0, maxY);

      // console.log(`id: ${el.id}, x: ${el.x}, y: ${el.y}`);
      noRepeatX(nodes);
      noRepeatY(nodes);

      // nodes.push(el);

      const clone = el.clone();
      clone.name = `${el.name}:${i + 1}`;

      parentNode.appendChild(clone);

    } // end for
  }

  if (msg.type === 'cancel') {
    figma.clientStorage.setAsync('selections', null);
    figma.closePlugin();
  }

};