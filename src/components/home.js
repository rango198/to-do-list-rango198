import { fetchInfo } from "../api";
import { markupUsers } from "../markup";
import { addMarkup } from "../helpers";
import { tablEl } from "../refs";

async function onload() {
  try {
    const respones = await fetchInfo("users")
    const markup = markupUsers(respones);
    addMarkup(tablEl, markup);
  } catch (err) {
    console.log(err.massage)
  }
}


tablEl.addEventListener("click", onClick);

function onClick(event) {
  const userId = event.target.closest("tr").dataset.userid;
  location.href = `./user.html?userid=${userId}`
}

onload();