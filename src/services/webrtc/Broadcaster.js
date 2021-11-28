import {socket} from '../socketIO.js';

const peerConnections = {};
const config = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302'],
    },
  ],
};
const constraints = {
  video: false,
  audio: true,
};

function startStream() {
  navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    audio.srcObject = stream;
    socket.emit('broadcaster');
  }).catch(error => console.error(error));

  socket.on('watcher', id => {
    const peerConnection = new RTCPeerConnection(config);
    peerConnections[id] = peerConnection;

    let stream = audio.srcObject;
    stream.getAudioTracks().
        forEach(track => peerConnection.addTrack(track, stream));

    peerConnection.onicecandidate = event => {
      if (event.candidate) {
        socket.emit('candidate', id, event.candidate);
      }
    };

    peerConnection.createOffer().
        then(sdp => peerConnection.setLocalDescription(sdp)).
        then(() => {
          socket.emit('offer', id, peerConnection.localDescription);
        });
  });

  socket.on('answer', (id, description) => {
    peerConnections[id].setRemoteDescription(description);
  });

  socket.on('candidate', (id, candidate) => {
    peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
  });

  socket.on('disconnectPeer', id => {
    peerConnections[id].close();
    delete peerConnections[id];
  });
}



const audio = document.querySelector('audio');



function getDevices() {
  return navigator.mediaDevices.enumerateDevices();
}
