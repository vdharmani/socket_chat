const sockets = (server) => {
    const io = require('socket.io')(server);
    io.on('connection', (socket) => { 
		console.log("fadfdsfdsfsdfds");
        socket.on('disconnect', (user_id) => {
            console.log("users leave the room");
            socket.leave(user_id)
        });
       
        socket.on('ConncetedChat', (user_id) => {
			console.log(user_id);
            socket.join(user_id);
            socket.broadcast.to(user_id).emit('ConncetedChat', user_id);    
        });
    
        socket.on('newMessage', (id,message) => {
			console.log(message);
            socket.broadcast.to(id).emit('newMessage', id , message);
        });

        socket.on('leaveChat', (id) => {
            socket.leave(id); 
            socket.broadcast.to(id).emit('leaveChat', id);        
        });
        socket.on('type', (id,typing) => {
		console.log(typing);
            socket.broadcast.to(id).emit('type', id , typing);
        });
	    
        socket.on('ChatStatus', (id,details) => {
		console.log(details)
            socket.broadcast.to(id).emit('ChatStatus', id,details);        
        });
	    
        socket.on('errors', function (err) {
            alert('received socket error:')
            console.log(err)
        })
      });
}
module.exports = sockets; 
