import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import ab2str from "arraybuffer-to-string";
import str2ab from "string-to-arraybuffer";

async function fetchAudio(url: string) {
    var result = await fetch("https://files.soundoftext.com/b7155c50-6dfc-11ed-a44a-8501b7b1aefa.mp3");
    let decoder = new TextDecoder();
    let data = await result.arrayBuffer();

    return ab2str(data, "base64");
}

export default async (request: VercelRequest, response: VercelResponse) => {
    const { url } = request.query;

    let result = await fetchAudio(url as string);
    response.status(200).send(result);
};
