const modal = document.getElementById("modal");
const submitBtn = document.getElementById("submit");
const cancelBtn = document.getElementById("cancel");

const toggleModal = () => {
    if (modal.style.display === "flex") modal.style.display = "none";
    else modal.style.display = "flex";
};

const myPromise = new Promise((resolve, reject) => {
    submitBtn.addEventListener("click", () => {
        resolve();
    });
    cancelBtn.addEventListener("click", () => {
        reject();
    });
});

myPromise
    .then(() => {
        toggleModal();
        console.log("resolve");
    })
    .catch(() => {
        toggleModal();
        console.log("reject");
    });
