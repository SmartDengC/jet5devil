(function () {
  var brother_node = document.getElementsByClassName("mt-3");
  var times = document.getElementsByTagName("time");
  console.log("hello 1");
  console.log(times);
  console.log(brother_node);
  if (brother_node.length === 0) {
    return;
  }
  var current = document.createElement("div");
  current.innerHTML += "<p>竹外一枝斜，想佳人，天寒日暮梅花日落冬寒冷</p>";
  brother_node[0].insertAdjacentElement("afterend", current);
})();
