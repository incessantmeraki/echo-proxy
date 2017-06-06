var net = require('net')

var socket = net.connect(5001,'localhost')

process.stdin.pipe(socket).pipe(process.stdout)
