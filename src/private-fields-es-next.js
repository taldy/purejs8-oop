class Post {
  #updated = false;
  #updatedAt = null;

  constructor(text, author) {
    this.text = text;
    this.author = author;
    console.log("post created");
  }

  update(value) {
    this.text = value;
    this.#markAsUpdated();
    console.log("post updated");
  }

  #markAsUpdated() {
    this.#updated = true;
    this.#updatedAt = new Date().getTime();
  }
}

let post;

function create() {
  post = new Post("some text", "Alex");
  console.log("post", post);
}

function update() {
  post.update(`Random value ${getRandomValue()}`);
  console.log("post", post, post['#updated']);
}

document.querySelector("#container7 .create").addEventListener("click", create);
document.querySelector("#container7 .update").addEventListener("click", update);
