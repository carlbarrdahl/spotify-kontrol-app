require([
	'$api/models#player'
], function(player) {
	player.addEventListener('change', function() {});

	function execute(data) {

		try {

			return player[data.command].call(player, data.payload).done(function(result) {
				return result;
			});

		} catch (e) {

			return new Error('Command not valid: ', data.command);

		}
	}

	exports.execute = execute;
});
