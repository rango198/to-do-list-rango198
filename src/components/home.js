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

tableEl.addEventListener("click", onClick);

function onClick(event) {
  const userId = event.target.closest('tr').dataset.userid;
  
  location.href = `user.html?userid=${userId}`;
}
