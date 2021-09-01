const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/catz-n-dogz/upload';
const CLOUDINARY_UPLOAD_PRESET = 'lhxcc2tl';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData

    }).then(function (res) {
        console.log(res);
        imgPreview.src = res.data.secure_url;


    }).catch(function (err) {
        console.log(err)
    });

});

// let apiKey = 912125249931395

// function getImage() {
//     fetch('https://912125249931395:Zv42XUvs5fnPjeqvRtD9BjkAl-U@api.cloudinary.com/v1_1/catz-n-dogz/resources/search')

//     .then(function (res) {
        
//         console.log(res)
//     })
// };

// getImage();