const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  const header = document.createElement("div");
  const dates = document.createElement("span");
  const titles = document.createElement("h1");
  const temps = document.createElement("span");

  header.classList.add("header");
  dates.classList.add("date");
  temps.classList.add("temp");
  
  dates.textContent = date;
  titles.textContent = title;
  temps.textContent = temp;

  header.appendChild(dates);
  header.appendChild(titles);
  header.appendChild(temps);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  const select = document.querySelector(selector);
  select.appendChild(Header("Lambda Times","JANUARY 6, 2021", "26°"))
}

export { Header, headerAppender }
