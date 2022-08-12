const createGift = async (event) => {
  if (document.getElementById("occasionGift").value) {
    const response = await fetch(`/api/giftidea`, {
      method: "POST",
      body: JSON.stringify({
        occasion: document.getElementById("occasionGift").value,
        giftee_id: document.getElementById('theId').getAttribute('data-occasion')
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log('added gift')
      document.location.replace(
        `/giftee/${document
          .getElementById("theId")
          .getAttribute("data-occasion")}`
      );
    } else {
      alert("Failed to create event");
    }
  }
};

const deleteGiftIdea = async (event) => {
  console.log(document.getElementById("theId").getAttribute("data-occasion"));
  // event.preventDefault();
  const id = event.target.dataset.postid;

  const response = await fetch(`/api/giftidea/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log(document
      .getElementById("theId")
      .getAttribute("data-occasion"))
    document.location.replace(
      `/giftoccasion/${document
        .getElementById("theId")
        .getAttribute("data-occasion")}`
    );
  } else {
    alert("Failed to delete the post!");
  }
};
