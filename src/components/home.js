import { fetchInfo } from "../api";
import { markupUsers } from "../markup";
import { tableEl } from "../refs";
import { addMarkup } from "../helpers";

async function onLoad() {
  try {
    const response = await fetchInfo("users");

    const markup = markupUsers(response);

    addMarkup(tableEl, markup);
  } catch (err) {
    console.log(err.massage);
  }
}
onLoad();
