module.exports = function(RED) {
    function EdgeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            require('edge-js').func(config.func)(msg.payload, (err, result) => {
                if (err) return node.error(err, msg);

                msg.payload = result;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("edge",EdgeNode);
}
