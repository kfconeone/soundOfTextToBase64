import type { VercelRequest, VercelResponse } from "@vercel/node";
import ab2str from "arraybuffer-to-string";

async function fetchAudio(url: string) {
    var result = await fetch("https://files.soundoftext.com/b7155c50-6dfc-11ed-a44a-8501b7b1aefa.mp3");
    let data = await result.arrayBuffer();

    return ab2str(data, "base64");
}

export default async (request: VercelRequest, response: VercelResponse) => {
    let result;
    try {
        const { url } = request.query;
        result = await fetchAudio(url as string);
    } catch (err) {
        console.log(err);
    }

    response.status(200).send(result);
};
