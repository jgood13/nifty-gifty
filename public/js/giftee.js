const giftRemind = document.querySelector("#reminder");

const createGiftOccasion = () => {
  if (giftRemind === true) {
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
