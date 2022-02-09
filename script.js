var counterDiv = document.querySelector(".visit-counter");
var currentCount = localStorage.getItem("page_view");

if (currentCount) {
  currentCount = Number(currentCount) + 1;
  localStorage.setItem("page_view", currentCount);
} else {
  currentCount = 1;
  localStorage.setItem("page_view", currentCount);
}

counterDiv.innerHTML = "Website Visitors: " + currentCount;
