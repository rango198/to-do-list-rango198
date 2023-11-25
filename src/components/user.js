const param = location.search;
const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get('userid')
console.log(userId);

import { fetchInfo } from "../api";
import { markupByUserId, createListAlbum } from "../markup";
import { userTableEl, userAlbumEl } from "../refs";
import { addMarkup } from "../helpers";

async function onLoad() {
  try {
    const response = await fetchInfo(`users/${userId}`);

    const markup = markupByUserId(response);

    addMarkup(userTableEl, markup);

    const albums = await fetchInfo(`albums?userId=${userId}`);
    const albumMarkup = createListAlbum(albums);

    addMarkup(userAlbumEl, albumMarkup);
  } catch (err) {
    console.log(err.message);
  }
}

onLoad();

