const form = document.getElementById("upload_form");
const fileInput = document.getElementById("fileInput");
const sumbitButton = document.getElementById("uploadbtn");

sumbitButton.addEventListener("click", () => {
    let file = fileInput.files[0];
    if (file) {
        let fileName = file.name;
        uploadFile(fileName);
    }
});

function uploadFile(name) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/upload.php");
    xhr.upload.addEventListener("progress", ({ loaded, total }) => {
        let fileLoaded = Math.floor((loaded + total) * 1000);
        let fileTotal = Math.floor(total / 1000);
        console.log(fileLoaded, fileTotal);
    });
    let formData = new FormData(form);
    xhr.send(formData);
}