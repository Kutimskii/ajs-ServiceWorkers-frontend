if (navigator.serviceWorker) {
  window.addEventListener("load", async () => {
    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register("service-worker.js");
        console.log("sw registered");
      }
    } catch (e) {
      console.log(e);
    }
  });
}
let result;
const createRequest = async () => {
  try {
    const respone = await fetch("http://localhost:3000?method=allNews");
    if (respone.status >= 200) {
      document.querySelector(".modal_container").classList.remove("active");
      document.querySelector("body").style.cursor = "initial";
      result = await respone.json();
      document.querySelector("ul").innerHTML = "";
      result.forEach((element) => {
        document.querySelector("ul").insertAdjacentHTML(
          "afterbegin",
          `<li class="news_card">
		<h2 class="news_card_header">News header</h2>
		<div class="news_content">
			<div class="news_content_img">
			</div><div class="news_content_description_wrap">
			<div class="news_content_description">${element.name}</div>
			<div class="news_content_description">${element.name}</div>
		</div>
		</div>
		</h2>
	</li>`
        );
      });
    } else {
      return;
    }
  } catch (error) {
    document.querySelector("body").style.cursor = "initial";
    document.querySelector(".modal_container").classList.add("active");
  }
};
createRequest();
if (!result) {
  document.querySelector("body").style.cursor = "wait";
}
