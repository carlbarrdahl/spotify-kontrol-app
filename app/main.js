require([
	'app/commands'
], function(commands) {

	var ws;
	var channel;
	var serverUrl = 'ws://kontrol-app.herokuapp.com';

	var status = document.querySelector('[role=status]');
	status.textContent = 'Connecting to: ' + serverUrl;

	(function connect() {

		ws = new WebSocket(serverUrl);

		ws.onopen = function() {
			status.textContent = 'Connected!';

			setInterval(ping, 20000);
		};

		ws.onclose = function() {
			status.textContent = 'Disconnected. Trying to reconnect...';
			setTimeout(connect, 2000);
		};

		ws.onmessage = function(event) {
			var data = JSON.parse(event.data);

			if (data.msg === 'channel') {

				channel = data.payload;
				status.textContent = 'Connected to channel: ' + data.payload;

			} else {

				// Execute command and send the result back through the websocket
				commands.execute(data).done(function(result) {
					result.channel = channel;
					ws.send(JSON.stringify(result));

				});
			}

		};
	})();

	function ping() {
		ws.send(JSON.stringify({msg: 'ping'}));
	}

});
