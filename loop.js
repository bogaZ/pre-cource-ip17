const tools = ['chainsaw', 'hammer', 'knife', 'tree', 'chicken'];

// carilah mana saja value yg termasuk perkakas
const newTools = []

tools.forEach(element => {
    if (element !== 'tree' && element !== 'chicken') {
        console.log(element)
    }
});

for (let index = 0; index < tools.length; index++) {
    if (tools[index] === 'tree' || tools[index] === 'chicken') {
        tools[index] = tools[index] + " is not tools"
    }
}

console.log(tools)