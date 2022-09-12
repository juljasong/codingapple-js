function openTab(i) {
  tabButton.removeClass("orange");
  tabContent.removeClass("show");
  document.querySelectorAll(".tab-button")[i].classList.add("orange");
  document.querySelectorAll(".tab-content")[i].classList.add("show");
}
