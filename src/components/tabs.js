import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  const topic = document.createElement("div");
  topic.classList.add("topics");
  // topics.forEach((top) => {
  //   const tab = document.createElement("div");
  //   tab.classList.add("tab");
  //   tab.textContent = top;
  //   topic.appendChild(tab);
  // });
  for (let i = 0; i < topics.data.topics.length; i++) {
    const div = document.createElement("div");
    div.classList.add("tab");
    div.textContent = topics.data.topics[i];
    topic.appendChild(div);
  }
  return topic;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  axios.get(`http://localhost:5000/api/topics`)
  .then(resp => {
    const topics = Tabs(resp);
    document.querySelector(selector).appendChild(topics);
    console.log(topics)
  }).catch(err => {
    console.error(err);
  }).finally(() => console.log("Great job!"))
}


export { Tabs, tabsAppender }
