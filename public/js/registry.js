

const deleteRegistryGift = async (event) => {
  console.log(document.getElementById("theId").getAttribute("data-registryid"));
  // event.preventDefault();
  const id = event.target.dataset.postid;
  const registryid = document
    .getElementById("theId")
    .getAttribute("data-registryid");
  console.log(registryid);

  const response = await fetch(`/api/registrygift/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(`/registry/${registryid}`);
  } else {
    alert("Failed to delete the post!");
  }
};