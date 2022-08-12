const createGift = async (event) => {
  console.log(document.getElementById("occasionGift").value)
  if (document.getElementById("occasionGift").value) {
    const response = await fetch(`/api/giftidea`, {
      method: "POST",
      body: JSON.stringify({
        gift: document.getElementById("occasionGift").value,
        giftOccasion_id: document.getElementById('theId').getAttribute('data-occasion')
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log('added gift')
      document.location.replace(
        `/giftoccasion/${document
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

const goToLink = (event) => {
  let name = event.target.dataset.linkid;
  console.log('gotolink', name)
  let url = `https://www.amazon.com/` + name
  window.open(url, '_blank')
}