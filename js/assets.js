/* Les assets, on pourra plus tard ajouter des sons et des musiques */
const assetsToLoadURLs = {
    masque: { url: "./assets/images/masque.png" },
    bonhomme: { url: "./assets/images/bonhomme.png" },
    virus: { url: "./assets/images/covid-virus-logo.png" },
    castex: { url: "./assets/images/castex.png" },
    macron: { url: "./assets/images/macron.png" },
    trump: { url: "./assets/images/trump.png" },
    trump1:{ url: "./assets/images/trumpdance/frame-1.gif" },
    trump2:{ url: "./assets/images/trumpdance/frame-2.gif" },
    trump3:{ url: "./assets/images/trumpdance/frame-3.gif" },
    trump4:{ url: "./assets/images/trumpdance/frame-4.gif" },
    trump5:{ url: "./assets/images/trumpdance/frame-5.gif" },
    trump6:{ url: "./assets/images/trumpdance/frame-6.gif" },
    trump7:{ url: "./assets/images/trumpdance/frame-7.gif" },
    trump8:{ url: "./assets/images/trumpdance/frame-8.gif" },
    trump9:{ url: "./assets/images/trumpdance/frame-9.gif" },
    trump10:{ url: "./assets/images/trumpdance/frame-10.gif" },
    trump11:{ url: "./assets/images/trumpdance/frame-11.gif" },
    trump12:{ url: "./assets/images/trumpdance/frame-12.gif" },
    trump13:{ url: "./assets/images/trumpdance/frame-13.gif" },
    trump14:{ url: "./assets/images/trumpdance/frame-14.gif" },
    trump15:{ url: "./assets/images/trumpdance/frame-15.gif" },
    trump16:{ url: "./assets/images/trumpdance/frame-16.gif" },
    trump17:{ url: "./assets/images/trumpdance/frame-17.gif" },
    trump18:{ url: "./assets/images/trumpdance/frame-18.gif" },
    trump19:{ url: "./assets/images/trumpdance/frame-19.gif" },
    trump20:{ url: "./assets/images/trumpdance/frame-20.gif" },
    trump21:{ url: "./assets/images/trumpdance/frame-21.gif" },
    trump22:{ url: "./assets/images/trumpdance/frame-22.gif" },
    trump23:{ url: "./assets/images/trumpdance/frame-23.gif" },
    trump24:{ url: "./assets/images/trumpdance/frame-24.gif" },
    trump25:{ url: "./assets/images/trumpdance/frame-25.gif" },
    trump26:{ url: "./assets/images/trumpdance/frame-26.gif" },
    trump27:{ url: "./assets/images/trumpdance/frame-27.gif" },
    trump28:{ url: "./assets/images/trumpdance/frame-28.gif" },
    trump29:{ url: "./assets/images/trumpdance/frame-29.gif" },
    trump30:{ url: "./assets/images/trumpdance/frame-30.gif" },
    trump31:{ url: "./assets/images/trumpdance/frame-31.gif" },
    trump32:{ url: "./assets/images/trumpdance/frame-32.gif" },
    vaccin1:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin2:{ url: "./assets/images/vaccin/frame_0 (2).gif" },
    vaccin3:{ url: "./assets/images/vaccin/frame_0 (3).gif" },
    vaccin4:{ url: "./assets/images/vaccin/frame_0 (4).gif" },
    vaccin5:{ url: "./assets/images/vaccin/frame_0 (5).gif" },
    vaccin6:{ url: "./assets/images/vaccin/frame_0 (6).gif" },
    vaccin7:{ url: "./assets/images/vaccin/frame_0 (7).gif" },
    vaccin8:{ url: "./assets/images/vaccin/frame_0 (8).gif" },
    vaccin9:{ url: "./assets/images/vaccin/frame_0 (9).gif" },
    vaccin10:{ url: "./assets/images/vaccin/frame_0 (10).gif" },
    vaccin11:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin12:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin13:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin14:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin15:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin16:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin17:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin18:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin19:{ url: "./assets/images/vaccin/frame_0 (1).gif" },
    vaccin20:{ url: "./assets/images/vaccin/frame_0 (20).gif" },
    vaccin21:{ url: "./assets/images/vaccin/frame_0 (21).gif" },
    vaccin22:{ url: "./assets/images/vaccin/frame_0 (22).gif" },
    vaccin23:{ url: "./assets/images/vaccin/frame_0 (23).gif" },
    vaccin24:{ url: "./assets/images/vaccin/frame_0 (24).gif" },
    vaccin25:{ url: "./assets/images/vaccin/frame_0 (25).gif" },
    vaccin26:{ url: "./assets/images/vaccin/frame_0 (26).gif" },
    vaccin27:{ url: "./assets/images/vaccin/frame_0 (27).gif" },
    vaccin28:{ url: "./assets/images/vaccin/frame_0 (28).gif" },
    vaccin29:{ url: "./assets/images/vaccin/frame_0 (29).gif" },
    vaccin30:{ url: "./assets/images/vaccin/frame_0 (30).gif" },
    vaccin31:{ url: "./assets/images/vaccin/frame_0 (31).gif" },
    vaccin32:{ url: "./assets/images/vaccin/frame_0 (32).gif" },

    infection: {
        url:
            "./assets/audio/infection.wav",
        buffer: false,
        loop: false,
        volume: 1.5,
    },
    virusFond: {
        url:
            "./assets/audio/virus-fond.mp3",
        buffer: true,
        loop: true,
        volume: 1.0,
    },
};

function loadAssets(callback) {
    // here we should load the souds, the sprite sheets etc.
    // then at the end call the callback function
    loadAssetsUsingHowlerAndNoXhr(assetsToLoadURLs, callback);
}

// You do not have to understand in details the next lines of code...
// just use them!

/* ############################
    BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
    files have been loaded and decoded 
 ############################## */
function isImage(url) {
    return url.match(/\.(jpeg|gif|jpg|png)$/) != null;
}


function isAudio(url) {
    return url.match(/\.(mp3|ogg|wav)$/) != null;
}


function loadAssetsUsingHowlerAndNoXhr(assetsToBeLoaded, callback) {
    var assetsLoaded = {};
    var loadedAssets = 0;
    var numberOfAssetsToLoad = 0;

    // define ifLoad function
    var ifLoad = function () {
        if (++loadedAssets >= numberOfAssetsToLoad) {
            callback(assetsLoaded);
        }
        console.log("Loaded asset " + loadedAssets);
    };

    // get num of assets to load
    for (var name in assetsToBeLoaded) {
        numberOfAssetsToLoad++;
    }

    console.log("Nb assets to load: " + numberOfAssetsToLoad);

    for (name in assetsToBeLoaded) {
        var url = assetsToBeLoaded[name].url;
        console.log("Loading " + url);
        if (isImage(url)) {
            assetsLoaded[name] = new Image();

            assetsLoaded[name].onload = ifLoad;
            // will start async loading. 
            assetsLoaded[name].src = url;
        } 
        
        else {
            // We assume the asset is an audio file
            console.log("loading " + name + " buffer : " + assetsToBeLoaded[name].loop);
            assetsLoaded[name] = new Howl({
                src: [url],
                buffer: assetsToBeLoaded[name].buffer,
                loop: assetsToBeLoaded[name].loop,
                autoplay: false,
                volume: assetsToBeLoaded[name].volume,
                onload: function () {
                    if (++loadedAssets >= numberOfAssetsToLoad) {
                        callback(assetsLoaded);
                    }
                    console.log("Loaded asset " + loadedAssets);
                }
            }); // End of howler.js callback
        } // if

    } // for
} // function

