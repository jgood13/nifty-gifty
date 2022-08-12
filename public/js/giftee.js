const giftRemind = document.getElementById("reminder");

const createGiftOccasion = async (event) => {
  // if (giftRemind === true) {
  // }

  // const occasionDate = document.getElementById("occasionDate").value;
  // const isRemind = document.getElementById("reminder").value;

  console.log(typeof isRemind);
  if (document.getElementById("occasionName").value) {
    const response = await fetch(`/api/giftoccasion`, {
      method: "POST",
      body: JSON.stringify({
        occasion: document.getElementById("occasionName").value,
        giftee_id: document.getElementById('theId').getAttribute('data-occasionid')
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(
        `/giftee/${document
          .getElementById("theId")
          .getAttribute("data-occasionid")}`
      );
    } else {
      alert("Failed to create event");
    }
  }
};

const deleteGiftOccasions = async (event) => {
  console.log(document.getElementById("theId").getAttribute("data-occasionid"));
  // event.preventDefault();
  const id = event.target.dataset.postid;

  const response = await fetch(`/api/giftoccasion/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(
      `/giftee/${document
        .getElementById("theId")
        .getAttribute("data-occasionid")}`
    );
  } else {
    alert("Failed to delete the post!");
  }
};
