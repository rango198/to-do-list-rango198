import { createCardMarkup } from "../markup";
import { fetchInfo } from "../api";
import { addMarkup } from "../helpers";
import { cardsEl} from "../refs";

const searchParams = new URLSearchParams(location.search);
const albumId = searchParams.get("albumid");
console.log(albumId);

async function onload() {
  try {
    const respones = await fetchInfo(`albums/${albumId}/photos`);
    const markup = createCardMarkup(respones);
    console.log(respones);
    addMarkup(cardsEl, markup);
  } catch (err) {
    console.log(err.massage);
  }
}
onload();