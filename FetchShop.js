function FetchShop(entree) {
    var elements = document.querySelectorAll(".Cartes");

    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });

    fetch("PHP API.php")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            API = data

            for (var i = 0 ; i < (API.data.featured.entries).length; i++) {
                for (var j = 0 ; j < (API.data.featured.entries[i].items).length; j++) {
                    if (API.data.featured.entries[i].items[j].type.value == entree) {
                        const div = document.createElement("div");

                        const a = document.createElement("a");

                        const img = document.createElement("img");
                        img.src = API.data.featured.entries[i].items[j].images.icon;
                        img.alt = "Image Skin " + API.data.featured.entries[i].items[j].name;
                        a.appendChild(img);
                        div.appendChild(a);

                        const h3 = document.createElement("h3");
                        h3.textContent = API.data.featured.entries[i].items[j].name;
                        div.appendChild(h3);

                        const h5 = document.createElement("h5");
                        h5.textContent = "Part of the " + API.data.featured.entries[i].items[j].set.value + " set";
                        div.appendChild(h5);

                        const h4 = document.createElement("h4");
                        h4.textContent = "Chapter " + API.data.featured.entries[i].items[j].introduction.chapter + ", Season " + API.data.featured.entries[i].items[j].introduction.season;
                        div.appendChild(h4);

                        div.classList.add("Cartes");
                        document.getElementById("FortniteSkin").appendChild(div);
                    }
                    else {
                    }
                }
            }
        })
        .catch(function(error) {
            console.log("error");
        });
}