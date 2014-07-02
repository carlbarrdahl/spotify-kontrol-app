kontrol
=======

A small app that listens and exectues commands through websockets and returns player object

## How to use
For now you have to set the Websocket server manually in /app/main.js

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
