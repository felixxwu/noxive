<template>
  <div id="app">
    <Header :actions="actions"></Header>
    <h1 @click="selectTag(null)" v-if="selectedTag">filter: #{{ selectedTag }} ×</h1>
    <div id="songs" v-if="allSongs.length !== 0">
      <Song
        :id="index"
        class="song"
        v-for="(song, index) in songs" :key="index"
        :song="song"
        :number="index"
        :isSelected="selectedSong == index"
        :welcome="welcome"
        :selectSong="selectSong"
        :selectTag="selectTag"
      ></Song>
    </div>
    <p v-else>
      Loading...
    </p>
    <p id="copyright" @click="actions.gnome">
      © Noxive {{ (new Date()).getYear() + 1900 }}
    </p>
  </div>
</template>

<script>
import { db } from './db'
import Header from './components/Header'
import Song from './components/Song'
import actions from './components/actions'

export default {
  name: 'app',
  components: {
    Header,
    Song
  },
  mounted() {
    // console.log(location.hash)
    db.collection('songs').orderBy('published', 'desc')
      .get()
      .then(querySnapshot => {
        this.allSongs = querySnapshot.docs.map(doc => doc.data())
        setTimeout(() => {
          this.songs.forEach((element, index) => {
            setTimeout(() => {
              let el = document.getElementById(index);
              if (el) el.style.opacity = 1;
            }, this.animationStep * index);
          });
          document.getElementById("copyright").style.display = "initial";
          setTimeout(() => {
            location.hash && this.selectSongByHash(location.hash.substr(1))
          }, 500);
        }, this.animationDelay);
      })

  },
  data() {
    return {
      animationDelay: 1000,
      animationStep: 100,
      selectedSong: null,
      selectedTag: null,
      welcome: true,
      actions: actions,
      allSongs: []
    }
  },
  computed: {
    songs() {
      if (this.selectedTag == null) {
        return this.allSongs;
      } else {
        return this.allSongs.filter(song => {
          return song.tag == this.selectedTag;
        })
      }
    }
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = tag;
      this.selectedSong = null;
      this.welcome = false;
      actions.tagSelected(tag, this.songs[0]);

      this.songs.forEach((element, index) => {
        setTimeout(() => {
          let el = document.getElementById(index);
          if (el) el.style.opacity = 1;
        }, this.animationStep * index);
      });
    },
    selectSong(id) {
      this.selectedSong = id;
      if (id == null) {
        history.replaceState(null, null, ' ');
      } else {
        location.hash = this.songs[id].hash
      }
      actions.songSelected(this.songs[id], id);
      setTimeout(() => {
        this.songs.forEach((element, index) => {
          document.getElementById(index).style.opacity = 1;
        });
      }, 0);
    },
    selectSongByHash(hash) {
      const id = this.songs.findIndex(song => song.hash === hash)
      // console.log(this.songs)
      // console.log({id})
      this.selectSong(id)
    },
  },
}
</script>

<style>
* {
  font-family: 'Montserrat', sans-serif;
  --black: #1a1a1a;
}

h1 {
  cursor: pointer;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--black);
  color: white;
  text-align: center;
  transition: 1s;
}

#app {
  max-width: 1200px;
  margin: auto;
}

p {
  padding: 50px;
}

#songs {
  margin-bottom: 50px;
}

.song {
  opacity: 0;
  transition: 2s;
}

.white {
  color: white;
}

img, .shadow {
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.3));
}

#copyright {
  display: none;
}

/* ANIMATECSS ############################################################### */

.animated {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated-fast {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes zoomIn {
  from {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes zoomIn {
  from {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
</style>
