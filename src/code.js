function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFloat(min, max) {
  return parseFloat(((Math.random() * (max - min)) + min).toFixed(1));
}

function randn_bm(min, max, skew) {
  var u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
  num = Math.pow(num, skew); // Skew
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  return num;
}


figma.showUI(__html__, {
  width: 356,
  height: 440
});

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  if (msg.type === 'generate-confetti') {

    const data = msg.data;
    var nodes = [];

    // selection nodes
    const selections = figma.currentPage.selection
    const selectionsLength = selections.length

    // parent node
    const parentNode = selections[0].parent

    // max x, y coordinates
    const maxX = parentNode.width
    const maxY = parentNode.height

    for (let i = 0; i < data.quantity; i++) {

      let el = selections[randomInt(0, selectionsLength)];

      // const newNode = node.cloneNode();
      // node.rotation = randomInt(0, 360);
      // node.opacity = randomFloat(0.1, 1);
      // const wh = newNode.width / newNode.height
      // const coefficient = randomFloat(0.5, wh + 0.1);
      // newNode.resize(
      //   Math.floor(newNode.width * coefficient),
      //   Math.floor(newNode.height * coefficient)
      // );
      el.opacity = randomFloat(0.1, 1);

      el.x = randn_bm(0, (maxX - el.width), 1);
      el.y = randn_bm(0, (maxY - el.height), 1);

      // console.log(`el ${i}, id: ${el.id}, x: ${el.x}, y: ${el.y} `);
      parentNode.appendChild(el.clone())
    }

    // figma.currentPage.selection = nodes
    // figma.viewport.scrollAndZoomIntoView(nodes)

    // const nodes: SceneNode[] = [];
    // for (let i = 0; i < msg.count; i++) {
    //   const rect = figma.createRectangle();
    //   rect.x = i * 150;
    //   rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
    //   figma.currentPage.appendChild(rect);
    //   nodes.push(rect);
    // }
    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);

  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};


// This shows the HTML page in "ui.html".
// figma.showUI(__html__);

// console.log(nodes);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
// figma.ui.onmessage = msg => {
// One way of distinguishing between different types of messages sent from
// your HTML page is to use an object with a "type" property like this.

// if (msg.type === 'create-rectangles') {
//   const nodes: SceneNode[] = [];
//   for (let i = 0; i < msg.count; i++) {
//     const rect = figma.createRectangle();
//     rect.x = i * 150;
//     rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
//     figma.currentPage.appendChild(rect);
//     nodes.push(rect);
//   }
//   figma.currentPage.selection = nodes;
//   figma.viewport.scrollAndZoomIntoView(nodes);
// }

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.

// };