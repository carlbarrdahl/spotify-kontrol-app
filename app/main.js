require([
	'app/commands'
], function(commands) {

	var ws;
	var serverUrl = 'ws://localhost:8080';

	var status = document.querySelector('[role=status]');
	status.textContent = 'Connecting to: ' + serverUrl;

	(function connect() {

		ws = new WebSocket(serverUrl);

		ws.onopen = function() {
			status.textContent = 'Connected!';
		};

		ws.onclose = function() {
			status.textContent = 'Disconnected. Trying to reconnect...';
			setTimeout(connect, 2000);
		};

		ws.onmessage = function(event) {
			var data = JSON.parse(event.data);

			// Execute command and send the result back through the websocket
			commands.execute(data).done(function(result) {

				ws.send(JSON.stringify(result));

			});
		};
	})();

});
