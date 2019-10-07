<template>
    <div id="header">
        <img id="logo" class="animated fadeInUp" src="../assets/logo.svg" alt="Noxive logo" width="250">
        <br>
        <div id="links" class="animated fadeInUp">
            <a id="spotify" href="https://open.spotify.com/artist/50XpNPncKlgkgpwRf5U2Jp">
                <img class="link" src="../assets/spotify.svg" alt="spotify logo">
            </a>
            <a id="apple" href="https://itunes.apple.com/gm/artist/noxive/id976214256">
                <img class="link" src="../assets/apple.svg" alt="apple logo">
            </a>
            <a id="soundcloud" href="https://soundcloud.com/noxive">
                <img class="link" src="../assets/soundcloud.svg" alt="soundcloud logo">
            </a>
            <a id="youtube" href="https://www.youtube.com/playlist?list=PLOZyhPV9JCou47tEa6AA-5LXXFXTK3y5m">
                <img class="link" src="../assets/youtube.svg" alt="youtube logo">
            </a>
            <a id="facebook" href="https://noxive.com/facebook">
                <img class="link" src="../assets/facebook.svg" alt="facebook logo">
            </a>
        </div>
        <br>
        <br>
        <a id="email" class="white animated fadeInUp" href="mailto:felix@noxive.com">felix@noxive.com</a>
    </div>
</template>

<script>
export default {
    created() {
        setTimeout(() => {
            document.getElementById("links").style.display = "initial";
        }, 1000);
        setTimeout(() => {
            document.getElementById("email").style.display = "initial";
        }, 1500);
    }
}
</script>

<style lang="css" scoped>
#logo {
    padding: 30px;
}

#links, #email {
    display: none;
}

.link {
    padding: 15px;
    width: 40px;
}

</style>