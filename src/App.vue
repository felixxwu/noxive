<template>
  <div id="app">
    <Header></Header>
    <div id="songs">
      <Song
        v-for="(song, index) in songs" :key="index"
        :id="index"
        class="song"
        :song="song"
        :number="index"
        :selectSong="selectSong"
        :isSelected="selectedSong == index"
      ></Song>
    </div>
    <p>
      contact / promo: <a class="white" href="mailto:felix@noxive.com">felix@noxive.com</a>
      <br>
      <br>
      © Noxive {{ (new Date()).getYear() + 1900 }}
    </p>
  </div>
</template>

<script>
import Header from './components/Header'
import Song from './components/Song'
import data from './components/data'
import darkenColour from './components/darkenColour'

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
      songs: data,
      animationDelay: 2000,
      animationStep: 100,
      selectedSong: null
    }
  },
  methods: {
    selectSong(id) {
      this.selectedSong = id;
      let colour;
      if (id === null) {
        colour = "black";
        document.body.style.backgroundColor = "black";
      } else {
        colour = "#" + darkenColour(this.songs[id].colour);
      }
      document.body.style.backgroundColor = colour;
      document.getElementById("chrometheme").setAttribute("content", colour)
    }
  },
}
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
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

#songs {
  padding-top: 50px;
}

.song {
  opacity: 0;
  transition: 2s;
}

.white {
  color: white;
}

img, .shadow {
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.2));
}

/* ANIMATECSS ############################################################### */

.animated {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
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
