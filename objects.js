var playlist = {
  Jackson: 'thriller',
  Beatles: 'hey jude',
  Queen: 'Radio Ga Ga'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
