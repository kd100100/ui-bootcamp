const P1 = () =>
    new Promise((resolve, reject) => {
        resolve();
    });
const P2 = (result) =>
    new Promise((resolve, reject) => {
        resolve();
    });
const P3 = (result) =>
    new Promise((resolve, reject) => {
        resolve();
    });
const P4 = (result) =>
    new Promise((resolve, reject) => {
        resolve();
    });

// P1 -> P2
// P1 x P3
// P2,P3 -> P4

P1()
    .then((data) => {
        P2(data).then(() => {
            console.log("P2");
        });
    })
    .catch((data) => {
        P3(data).then(() => {
            console.log("P3");
        });
    })
    .finally((data) => {
        P4(data).then(() => {
            console.log("P4");
        });
    });
