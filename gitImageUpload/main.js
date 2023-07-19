mdata = {
    owner: "shirosuzaku",
    repo: "web-image",
    token: "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",
    content: "",
    name: "testimg.jpg"
}
console.log(mdata.owner)


function uploadImage(data) {
    return fetch(
      `https://api.github.com/repos/${data.owner}/${data.repo}/contents/${data.name}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${data.token}`
        },
        body: JSON.stringify({
          message: "upload image from api",
          content: data.content
        })
      }
    ).then((res) => console.log(res.json()) );
}

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}
  
toDataURL('./img.jpg', function(dataUrl) {
    mdata.content = dataUrl.split('base64,')[1]
    uploadImage(mdata)
    // console.log(mdata.content)
})

