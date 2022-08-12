const addRegistryGift = async (event) => {
  // if (giftRemind === true) {
  // }

  // const occasionDate = document.getElementById("occasionDate").value;
  // const isRemind = document.getElementById("reminder").value;

  // console.log(typeof isRemind);
  if (document.getElementById("giftName").value) {
    const response = await fetch(`/api/registrygift`, {
      method: "POST",
      body: JSON.stringify({
        gift: document.getElementById("giftName").value,
        registry_id: document.getElementById('theId').getAttribute('data-name')
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(document.getElementById('theId').getAttribute('data-name'))
      document.location.replace(
        `/registry/${document
          .getElementById("theId")
          .getAttribute("data-name")}`
      );
    } else {

      alert("Failed to create event");
    }
  }
};

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


const goToLink = (event) => {
  let name = event.target.dataset.linkid;
  console.log('gotolink', name)
  let url = `https://www.amazon.com/` + name
  window.open(url, '_blank')
}