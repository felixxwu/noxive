<template>
  <div id="app">
    <Header :actions="actions"></Header>
    <h1 @click="selectTag(null)" v-if="selectedTag">filter: #{{ selectedTag }} ×</h1>
    <div id="songs">
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
    <p @click="actions.gnome">
      © Noxive {{ (new Date()).getYear() + 1900 }}
    </p>
  </div>
</template>

<script>
import Header from './components/Header'
import Song from './components/Song'
import data from './components/data'
import actions from './components/actions'

export default {
  name: 'app',
  components: {
    Header,
    Song
  },
  created() {
    setTimeout(() => {
      this.songs.forEach((element, index) => {
        setTimeout(() => {
          let el = document.getElementById(index);
          if (el) el.style.opacity = 1;
        }, this.animationStep * index);
      });
    }, this.animationDelay);
  },
  updated() {
    this.songs.forEach((element, index) => {
      document.getElementById(index).style.opacity = 1;
    });
  },
  data() {
    return {
      animationDelay: 2000,
      animationStep: 100,
      selectedSong: null,
      selectedTag: null,
      welcome: true,
      actions: actions
    }
  },
  computed: {
    songs() {
      if (this.selectedTag == null) {
        return data.songs;
      } else {
        return data.songs.filter(song => {
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
    },
    selectSong(id) {
      this.selectedSong = id;
      actions.songSelected(this.songs[id], id);
    },
  },
}
</script>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}

h1 {
  cursor: pointer;
}

body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  text-align: center;
  transition: 1s;
}

p {
  padding: 50px;
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
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
</style>
