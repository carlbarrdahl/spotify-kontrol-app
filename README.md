kontrol
=======

A small app that listens and exectues commands through websockets and returns player object

## How to use
Connect a controller to `ws://kontrol-app.herokuapp.com` and include the channel id in the data package.
```javascript
var data = {
	command: 'vol',
	payload: 0.5,
	channel: 'abcd'
}
```
You can use https://github.com/carlbarrdahl/spotify-kontrol-cli to send commands from your terminal

## Examples
Pause current track
`ws.send({command: 'pause'});`

Resume play
`ws.send({command: 'play'});`

Next track
`ws.send({command: 'skipToNextTrack'});`

Previous track
`ws.send({command: 'skipToPrevTrack'});`

Set volume to 50%
`ws.send({command: 'setVolume', payload: 0.5});`
