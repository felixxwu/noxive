<template>
    <div id="header">
        <img id="logo" class="animated fadeInUp" src="../assets/logo.svg" alt="Noxive logo" width="250">
        <br>
        <div id="links" class="animated fadeInUp">
            <a id="spotify" :href="data.links.spotify">
                <img class="link" src="../assets/spotify.svg" alt="spotify logo" title="Spotify">
            </a>
            <a id="apple" :href="data.links.apple">
                <img class="link" src="../assets/apple.svg" alt="apple logo" title="Apple Music">
            </a>
            <a id="soundcloud" :href="data.links.soundcloud">
                <img class="link" src="../assets/soundcloud.svg" alt="soundcloud logo" title="SoundCloud">
            </a>
            <a id="youtube" :href="data.links.youtube">
                <img class="link" src="../assets/youtube.svg" alt="youtube logo" title="YouTube">
            </a>
            <a id="facebook" :href="data.links.facebook">
                <img class="link" src="../assets/facebook.svg" alt="facebook logo" title="Facebook">
            </a>
        </div>
        <br>
        <div id="about">
            <div class="animated fadeInUp">
                Noxive is a solo electronic music producer and computer science student at Edinburgh, with releases ranging from funky disco to sombre piano and bassy dance tunes.
                <br>
                <br>
                He has made numerous appearances on labels and YouTube channels such as
                <a href="https://www.youtube.com/channel/UC56Qctnsu8wAyvzf4Yx6LIw" target="_blank">Argofox</a>,
                <a href="https://soundcloud.com/traphoodfamily" target="_blank">TrapHood Family</a>,
                <a href="https://www.youtube.com/user/ParadoxiumTV" target="_blank">Paradoxium</a>, and
                <a href="https://www.youtube.com/user/Fantasyssmusic" target="_blank">The Soul of Wind</a>,
                and has collaborated with artists such as
                <a href="https://soundcloud.com/justin-jet-zorbas" target="_blank">Justin Jet Zorbas</a>,
                <a href="https://soundcloud.com/onetrueclive" target="_blank">Clive™</a>,
                <a href="https://spoti.fi/2Oq1Zym" target="_blank">Celia Brand-Freeman</a>, and
                <a href="https://spoti.fi/2TyoDFv" target="_blank">Andrea Pinedo</a>.
                <br>
                <br>
                contact / promo:
                <b class="all-copy">
                    felix@noxive.com
                </b>
                <br>
                <br>
                ♦
            </div>
        </div>
    </div>
</template>

<script>
import data from './data'

export default {
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
            data: data
        }
    },
}
</script>

<style lang="css" scoped>
a {
    color: white;
    font-weight: bold;
    text-decoration: none;
}

#about > * {
    padding: 30px;
    max-width: 600px;
    margin: auto;
}

.all-copy {  
    -webkit-user-select: all;  /* Chrome all / Safari all */
    -moz-user-select: all;     /* Firefox all */
    -ms-user-select: all;      /* IE 10+ */
    user-select: all;          /* Likely future */
    cursor: text;
}

#logo {
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