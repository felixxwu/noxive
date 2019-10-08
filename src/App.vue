<template>
  <div id="app">
    <Header :randomColour="randomColour"></Header>
    <h1 @click="selectTag(null)" v-if="selectedTag">filter: #{{ selectedTag }} ×</h1>
    <div id="songs">
      <Song
        v-for="(song, index) in songs" :key="index"
        :id="index"
        class="song"
        :song="song"
        :number="index"
        :selectSong="selectSong"
        :isSelected="selectedSong == index"
        :selectTag="selectTag"
      ></Song>
    </div>
    <p @click="gnomed">
      © Noxive {{ (new Date()).getYear() + 1900 }}
    </p>
  </div>
</template>

<script>
import Header from './components/Header'
import Song from './components/Song'
import data from './components/data'
import darkenColour from './components/darkenColour'
import hslToRgb from './components/hslToRgb'

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
          document.getElementById(index).style.opacity = 1;
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
      selectedTag: null
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
      if (tag === null) {
        this.randomColour(true);
      } else {
        let colour = darkenColour(this.songs[0].colour);
        document.body.style.backgroundColor = "#" + colour;
        // this.randomColour(false);
        document.getElementById("songs").scrollIntoView({
          behavior: "smooth"
        });
      }
    },
    selectSong(id) {
      this.selectedSong = id;
      let colour;
      if (id === null) {
        colour = "black";
        document.body.style.backgroundColor = "black";
      } else {
        colour = "#" + darkenColour(this.songs[id].colour);
        this.$nextTick(() => {
          document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        })
      }
      document.body.style.backgroundColor = colour;
      document.getElementById("chrometheme").setAttribute("content", colour)
    },
    randomColour(black) {
        if (black) {
            document.body.style.backgroundColor = "black";
            return;
        }
        let random = Math.random();
        let colour = hslToRgb(random, 0.7, 0.35);
        document.body.style.backgroundColor
            = `rgb(${colour[0]},${colour[1]},${colour[2]})`;
    },
    gnomed() {
      console.log("⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿⣿⣿⣿⣿\n⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿\n⣿⣿⣤⣀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿\n⣿⣿⣿⡟⣻⣿⣿⣿⣿⣿⣟⠉⠙⢹⣿⣏⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⠟⠋⠄⣿⣿⣿⣿⣿⣿⣿⣟⡛⠛⢛⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡟⠁⠄⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡇⠄⠄⠄⠄⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠛⠿⠛⠻⣿\n⡇⠄⠄⠄⠄⠄⠄⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⠄⠄⠄⣠⣽\n⣇⣀⠄⣀⡀⢀⠄⠄⠄⠄⠙⠛⠛⠿⣿⢿⠿⠟⠛⠄⠄⠄⠄⠈⢿⣿");
    }
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
