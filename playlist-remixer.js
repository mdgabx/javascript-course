/* 
Build a Playlist Remix Engine

In this lab, you will build a program that creates a single remix playlist from multiple playlists submitted by listeners.

Each listener provides a list of songs they want to hear. Some songs may appear more than once, and some artists may show up too many times. Your job is to work through these playlists step by step: combine them into one list, score each song, remove duplicate songs, limit how often the same artist appears, and then create a final play order.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should create a function named flattenPlaylists that accepts an array of playlists where each playlist is an array of objects with the following properties: trackId, artist, title, votes, bpm. If the input is not an array, flattenPlaylists should return an empty array. An example playlist has been provided for you. You can use this example to test out your function.

    flattenPlaylists should return a flat array of track objects, where each object includes all the original track properties plus a source property set to an array with the playlist index and the track index indicating where the track originated.

    You should create a function named scoreTracks that accepts an array of track objects as returned by flattenPlaylists (each with trackId, artist, title, votes, bpm, and source properties) and returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120).

    You should create a function named dedupeTracks that accepts an array of track objects as returned by scoreTracks and returns a new array with duplicate trackId entries removed, keeping only the first occurrence of each.

    You should create a function named enforceArtistQuota that accepts an array of track objects as returned by dedupeTracks and a number representing the maximum allowed occurrences per artist. The function should return a new array where no artist appears more times than the given number, keeping the earliest occurrences.

    You should create a function named buildSchedule that accepts an array of track objects as returned by enforceArtistQuota and returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast order.

    You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order
*/

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    },
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
  ]
];

function flattenPlaylists(playlists) {
  const result = [];

  if (!Array.isArray(playlists)) {
    return result;
  }

  // playlists is an array
  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    // loop the playlist to loop the track
    for (let j = 0; j < playlist.length; j++) {
      const track = playlist[j];

      result.push({
        ...track,
        source: [i, j]
      });
    }
  }

  // console.log(result);
  return result;
}

function scoreTracks(tracks) {
  const scores = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];

    scores.push({
      ...track,
      score: track["votes"] * 10 - Math.abs(track["bpm"] - 120)
    })
  }

  return scores;
}

function dedupeTracks(tracks) {
  // loop the tracks list 
  for (let i = 0; i < tracks.length; i++) {
    const trackId = tracks[i]["trackId"];

    for (let j = i + 1; j < tracks.length; j++) {
      if (trackId === tracks[j]["trackId"]) {
        // remove the duplicate
        tracks.splice(j, 1);
      }
    }
  }

  return tracks;
}

function enforceArtistQuota(tracks, maxPerArtist) {

  const result = [];
  let artistCount = {};

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const artist = track.artist;

    if (artistCount[artist] === undefined) {
      artistCount[artist] = 0;
    }

    if (artistCount[artist] < maxPerArtist) {
      result.push(track);
      artistCount[artist]++;
    }
  }

  return result;
}

function buildSchedule(tracks) {
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    result.push({
      slot: i + 1,
      trackId: track.trackId
    })
  }

  return result;
}

function remixPlaylist(playlists, maxPerArtist) {
  const lists = flattenPlaylists(playlists);
  const tracks = scoreTracks(lists);
  const normalizeTracks = dedupeTracks(tracks);
  const enforcedTracks = enforceArtistQuota(normalizeTracks, maxPerArtist);
  const trackSlots = buildSchedule(enforcedTracks);
  return trackSlots
}


