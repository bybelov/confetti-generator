// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
/*
Колонок
Строк

Случайная прозрачность
Случайные размеры
Случайные повороты

*/
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomFloat(min, max) {
    return parseFloat(((Math.random() * (max - min)) + min).toFixed(1));
}
function generateNodes() {
    var nodes = figma.currentPage.selection;
    var nodesLength = nodes.length;
    for (var i = 0; i < nodesLength; i++) {
        var node = nodes[i];
        node.rotation = randomInt(0, 360);
        node.opacity = randomFloat(0.1, 1);
        var wh = node.width / node.height;
        var coefficient = randomFloat(0.5, wh + 0.1);
        node.resize(Math.floor(node.width * coefficient), Math.floor(node.height * coefficient));
    }
}
figma.showUI(__html__);
figma.ui.onmessage = function (msg) {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === 'create-rectangles') {
        var nodes = [];
        for (var i = 0; i < msg.count; i++) {
            var rect = figma.createRectangle();
            rect.x = i * 150;
            rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
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
