const addRegistryGift = async (event) => {
  const registryID = event.target.data;
  const registryGiftName = document
    .querySelector("#registryGiftName")
    .value.trim();
  console.log(registryGiftName);
  if (registryGiftName) {
    const response = await fetch(`/api/registrygift`, {
      method: "POST",
      body: JSON.stringify(
        { gift: registryGiftName },
        { registry_id: registryID }
      ),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/registry");
    } else {
      alert("Failed to create registry gift");
    }
  }
};

const deleteRegistryGift = async (event) => {
  console.log(event);
  // event.preventDefault();
  const id = event.target.dataset.postid;
  console.log(id);

  const response = await fetch(`/api/registry/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete the post!");
  }
};
