let listSong = document.getElementById("listSong");
let selectedMedia = document.getElementById("selectedMedia");
let colArray = document.getElementsByTagName("div");


let h1listSong = document.createElement("h1");
h1listSong.innerText = "Titolo : video gatto  "
listSong.appendChild(h1listSong);

let videolistSong = document.createElement("video");
videolistSong.src = "video/gatto.mp4";
videolistSong.controls = true
listSong.appendChild(videolistSong);

bottoneAudio = document.createElement("button")
bottoneAudio.innerText = "audio"
bottoneAudio.onclick = function () {
    let audio = document.createElement("audio");
    audio.controls = true;
    audio.autoplay = true;
    let source = document.createElement("source");
    source.src = "video/gatto.mp4"
    source.type = "audio/mp4"
    audio.appendChild(source)
    listSong.appendChild(audio)
}
listSong.appendChild(bottoneAudio);



let pressedvideo1 = false
bottoneVideo2 = document.createElement("button")
bottoneVideo2.innerText = "video"

bottoneVideo2.onclick = function () {
    if (pressedvideo1 == false) {
        pressedvideo1 = true;
        let videolistSong2 = document.createElement("video");
        let divGene = document.createElement("div")
        videolistSong2.src = "video/gatto.mp4";
        videolistSong2.controls = true
        videolistSong2.id = "idvideo1"
        divGene.appendChild(videolistSong2);
        colArray[3].appendChild(divGene);
    } else {
        bottoneVideo2.disabled = true;
    }
}
listSong.appendChild(bottoneVideo2);

console.log(videolistSong)

let pdesclistSong = document.createElement("p");
pdesclistSong.innerHTML = "  in questo video e presente un gatto "
listSong.appendChild(pdesclistSong);



// elemento 2 

let h1selectedMedia = document.createElement("h1");
h1selectedMedia.innerText = "Titolo : gattopiano "
selectedMedia.appendChild(h1selectedMedia);


let videoselectedMedia = document.createElement("video");
videoselectedMedia.src = "video/original.mp4";
videoselectedMedia.controls = true
selectedMedia.appendChild(videoselectedMedia);



bottoneAudiolistSong = document.createElement("button")
bottoneAudiolistSong.innerText = "audio"
bottoneAudiolistSong.onclick = function () {
    let audio = document.createElement("audio");
    audio.controls = true;
    audio.autoplay = true;
    let source = document.createElement("source");
    source.src = "video/original.mp4"
    source.type = "audio/mp4"
    audio.appendChild(source)
    selectedMedia.appendChild(audio)


}
selectedMedia.appendChild(bottoneAudiolistSong);


let pressedvideo2 = false
bottoneVideo = document.createElement("button")
bottoneVideo.innerText = "video"
bottoneVideo.onclick = function () {
    if (pressedvideo2 == false) {
        pressedvideo2 = true;
        let videoselectedMedia2 = document.createElement("video");
        let divGene = document.createElement("div")
        videoselectedMedia2.src = "video/original.mp4";
        videoselectedMedia2.controls = true
        videoselectedMedia2.id = "idvideo2"
        divGene.appendChild(videoselectedMedia2)
        colArray[5].appendChild(divGene);
    } else {
        bottoneVideo.disabled = true;
    }
}
selectedMedia.appendChild(bottoneVideo);

console.log(selectedMedia)

let pdescvideoselectedMedia = document.createElement("p");
pdescvideoselectedMedia.innerHTML = " in questo video un gatto suona il pianoforte "
selectedMedia.appendChild(pdescvideoselectedMedia);

