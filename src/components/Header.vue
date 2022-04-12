<template>
    <div id="header">
        <img @click="actions.randomColour()" id="logo" class="animated fadeInUp" src="../assets/logo.svg" alt="Noxive logo">
        <br>
        <div id="links" class="animated fadeInUp">
            <a id="spotify" href="https://open.spotify.com/artist/50XpNPncKlgkgpwRf5U2Jp">
                <img class="link" src="../assets/spotify.svg" alt="spotify logo" title="Spotify">
            </a>
            <a id="apple" href="https://itunes.apple.com/gm/artist/noxive/id976214256">
                <img class="link" src="../assets/apple.svg" alt="apple logo" title="Apple Music">
            </a>
            <a id="soundcloud" href="https://soundcloud.com/noxive">
                <img class="link" src="../assets/soundcloud.svg" alt="soundcloud logo" title="SoundCloud">
            </a>
            <a id="youtube" href="https://youtube.com/noxive">
                <img class="link" src="../assets/youtube.svg" alt="youtube logo" title="YouTube">
            </a>
            <a id="facebook" href="https://facebook.com/noxive">
                <img class="link" src="../assets/facebook.svg" alt="facebook logo" title="Facebook">
            </a>
        </div>
        <br>
        <div id="about" @click="expanded = !expanded; actions.randomColour(!expanded)">
            <button class="animated-fast fadeInUp shadow" v-if="!expanded">ABOUT</button>
            <div v-else class="animated-fast fadeInUp">
                Noxive is a solo electronic music producer and full time software developer, with releases ranging from funky disco to sombre piano and bassy dance tunes.
                <br>
                <br>
                He has made numerous appearances on labels and YouTube channels such as
                <a onclick="event.stopPropagation()" href="https://www.youtube.com/channel/UC56Qctnsu8wAyvzf4Yx6LIw" target="_blank">Argofox</a>,
                <a onclick="event.stopPropagation()" href="https://soundcloud.com/traphoodfamily" target="_blank">TrapHood Family</a>,
                <a onclick="event.stopPropagation()" href="https://www.youtube.com/user/ParadoxiumTV" target="_blank">Paradoxium</a>, and
                <a onclick="event.stopPropagation()" href="https://www.youtube.com/user/Fantasyssmusic" target="_blank">The Soul of Wind</a>,
                and has collaborated with artists such as
                <a onclick="event.stopPropagation()" href="https://soundcloud.com/justin-jet-zorbas" target="_blank">Justin Jet Zorbas</a>,
                <a onclick="event.stopPropagation()" href="https://soundcloud.com/onetrueclive" target="_blank">Clive™</a>,
                <a onclick="event.stopPropagation()" href="https://spoti.fi/2Oq1Zym" target="_blank">Celia Brand-Freeman</a>, and
                <a onclick="event.stopPropagation()" href="https://spoti.fi/2TyoDFv" target="_blank">Andrea Pinedo</a>.
                <br>
                <br>
                contact / promo:
                <b onclick="event.stopPropagation()" class="all-copy">
                    felix@noxive.com
                </b>
                <!-- ◆ -->
                <br>
                <br>
                <span style="cursor: pointer; font-size: 50px;">×</span>
                <!-- <h1>×</h1> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        actions: Object
    },
    created() {
        setTimeout(() => {
            document.getElementById("links").style.display = "initial";
        }, 1000);
        setTimeout(() => {
            document.getElementById("about").style.display = "initial";
        }, 1500);
    },
    data() {
        return {
            expanded: false
        }
    }
}
</script>

<style lang="css" scoped>
a {
    color: white;
    font-weight: bold;
    text-decoration: none;
}

#about > div {
    padding: 30px;
    max-width: 600px;
    margin: auto;
}

button {
    border: none;
    border-radius: 7px;
    color: black;
    background-color: white;
    /* text-decoration: underline; */
    font-weight: bold;
    font-size: medium;
    padding: 10px;
    margin: 30px;
    cursor: pointer;
}

.all-copy {  
    -webkit-user-select: all;  /* Chrome all / Safari all */
    -moz-user-select: all;     /* Firefox all */
    -ms-user-select: all;      /* IE 10+ */
    user-select: all;          /* Likely future */
    cursor: text;
}

#logo {
    width: 280px;
    cursor: pointer;
    padding: 20px;
}

#links, #about {
    display: none;
}

.link {
    padding: 15px;
    width: 40px;
}

</style>