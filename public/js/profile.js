const targetGiftee = document.querySelectorAll(".targetGiftees");
const targetRegistry = document.querySelectorAll(".targetRegistry");

const deleteGiftees = async (event) => {
  // event.preventDefault();
  console.log(document.querySelector(".targetGiftees"));
  const id = document
    .querySelector(".targetGiftees")
    .getAttribute("data-postId");
  console.log(id, "DELETE");

  const response = await fetch(`/api/giftee/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete the post!");
  }
};

const deleteRegistries = async (event) => {
  // event.preventDefault();
  const id = document
    .querySelector(".targetRegistry")
    .getAttribute("data-postId");

  const response = await fetch(`/api/registry/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete the post!");
  }
};

const addGiftee = async (event) => {
  const gifteeName = document.querySelector("#gifteeName").value.trim();
  console.log("add", gifteeName);
  const response = await fetch(`/api/giftee`, {
    method: "POST",
    body: JSON.stringify({ name: gifteeName }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};

const addRegistry = async (event) => {
  event.preventDefault();
  const registryName = document.querySelector("#registryName").value.trim();

  if (registryName) {
    const response = await fetch(`/api/registry`, {
      method: "POST",
      body: JSON.stringify({ name: registryName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create registry");
    }
  }
};

document.querySelector(".gifteeSubmit").addEventListener("click", addGiftee);
document
  .querySelector(".registrySubmit")
  .addEventListener("click", addRegistry);

// document
//   .querySelectorAll(".deleteGiftee")
//   .addEventListener("click", deleteGiftees);

// document
//   .querySelectorAll(".deleteRegistry")
//   .addEventListener("click", deleteRegistries);
