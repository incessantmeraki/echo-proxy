var net = require('net')

var server = net.createServer(function (socket) {
  socket.pipe(net.connect(5000, 'localhost')).pipe(socket)
})

server.listen(5001)
