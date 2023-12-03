import { markupByUserId, createListAlbum } from "../markup";
import { fetchInfo } from "../api";
import { addMarkup } from "../helpers";
import { tablUsersEl, ulAlbums } from "../refs";

const param = location.search;

const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get("userid");
console.log(userId);

async function onload() {
  try {
    const respones = await fetchInfo(`users/${userId}`);
    const markup = markupByUserId(respones);
    addMarkup(tablUsersEl, markup);

    const paramsAlbums = await fetchInfo(`albums?userId=${userId}`);
    const markupAlbums = createListAlbum(paramsAlbums);
    addMarkup(ulAlbums, markupAlbums);
  } catch (err) {
    console.log(err.massage);
  }
}

onload();


ulAlbums.addEventListener("click", onClick);

function onClick(event) {

  const albumId = event.target.closest(".js-list-user-album").dataset.id;
  console.log(albumId);

  location.href = `album.html?albumid=${albumId}`;
}