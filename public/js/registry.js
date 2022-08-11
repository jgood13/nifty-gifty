const addRegistryGift = async (event) => {
  event.preventDefault();
  const registryGiftName = document
    .querySelector("#registryGiftName")
    .value.trim();

  if (registryName) {
    const response = await fetch(`/api/registrygift`, {
      method: "POST",
      body: JSON.stringify({ registryGiftName }),
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

const submitGift = document.querySelector("#submitNewGift");
submitGift.addEventListener("submit", addRegistryGift);
