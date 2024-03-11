document.getElementById("resourceForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var resourceInput = document.getElementById("resourceInput");
  var resourceValue = resourceInput.value.trim();
  if (resourceValue !== "") {
      resourceInput.value = "";
      addResourceToList(resourceValue);
  } else {
      alert("Please enter a valid resource.");
  }
});

function addResourceToList(resourceValue) {
  var resourceList = document.getElementById("resourceList");
  var li = document.createElement("li");
  li.textContent = resourceValue;
  resourceList.appendChild(li);
}