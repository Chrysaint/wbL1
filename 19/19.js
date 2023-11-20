// Не Дописано

const KEY =
  "2b75fb682b75fb682b75fb687e2863a04e22b752b75fb684e2f5e3b3b3c3f56c68a8ae8";

const count = 15;
let URL = `https://api.vk.com/method/wall.get?domain=wildberries_shop&count=${count}&access_token=${KEY}&v=5.154&callback=callbackFunc`;

const dateOptions = {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
};

function fetch() {
  let script = document.createElement("script");
  script.src = URL;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function callbackFunc(result) {
  let data = result.response.items;
  data.map((item) => {
    const date = new Date(item.date * 1000)
      .toLocaleDateString("ru", dateOptions)
      .replace(".,", " в");
    const itemAttachment = item.attachments[0];
    let img;
    console.log(data);
    if (itemAttachment.type === "video") {
      img = itemAttachment.video.image[2].url;
    } else if (itemAttachment.type === "photo") {
      img = itemAttachment.photo.sizes[3].url;
    }
    createItem(date, item.text, item.likes.count, item.reposts.count, img);
  });
}

const postList = document.querySelector(".posts__list");
function createItem(date, text, likes, reposts, img) {
  const template = document.querySelector("#post-template");

  const itemDate = template.content.querySelector(".item__publish-date");
  itemDate.textContent = date;

  const itemText = template.content.querySelector(".item__text");
  itemText.textContent = text;

  const itemLikes = template.content.querySelector("#likes");
  itemLikes.textContent = likes + " лайка(ов)";

  const itemReposts = template.content.querySelector("#reposts");
  itemReposts.textContent = reposts + " репостов";

  const itemImg = template.content.querySelector(".item__img");
  if (!img) {
    itemImg.remove();
  } else {
    itemImg.setAttribute("src", img);
  }

  const li = template.content.cloneNode(true);
  postList.appendChild(li);
}

fetch();
