import fetch from "node-fetch";
import ab2str from "arraybuffer-to-string";
import str2ab from "string-to-arraybuffer";

async function fetchAudio() {
    var result = await fetch("https://files.soundoftext.com/b7155c50-6dfc-11ed-a44a-8501b7b1aefa.mp3");
    let data = await result.arrayBuffer();

    console.log(ab2str(data, "base64"));
}

fetchAudio();
