<template>
    <span v-if="!isSelected">
        <img class="art animated zoomIn" @click="selectSong(number)" :src="song.art">
    </span>
    <div class="selected animated zoomIn shadow" v-else>
        <div v-html="song.embed"></div>
        <a v-if="song.spotify" :href="song.spotify">
            <img class="link" src="../assets/spotify.svg" alt="spotify logo">
        </a>
        <a v-if="song.apple" :href="song.apple">
            <img class="link" src="../assets/apple.svg" alt="apple logo">
        </a>
        <a v-if="song.soundcloud" :href="song.soundcloud">
            <img class="link" src="../assets/soundcloud.svg" alt="soundcloud logo">
        </a>
        <a v-if="song.youtube" :href="song.youtube">
            <img class="link" src="../assets/youtube.svg" alt="youtube logo">
        </a>
        <a @click="selectSong(null)">
            <img class="link" src="../assets/close.svg" alt="close icon">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        song: Object,
        number: Number,
        selectSong: Function,
        isSelected: Boolean
    }
}
</script>

<style lang="css" scoped>
.art {
    width: 250px;
    padding: 20px;
    border-radius: 35px;
}

img {
    cursor: pointer;
}

.link {
    padding: 15px;
    width: 40px;
}

.selected {
    max-width: 1000px;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>