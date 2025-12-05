// ----------------- SMOOTH SCROLL -----------------
function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"});
}

// ----------------- FILTRAGE DU PORTFOLIO -----------------
const filterContainer = document.querySelector(".gallery__categories");
const galleryItems = document.querySelectorAll(".project__card");

if(filterContainer) {
    filterContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("filter-item")){
            // enlever "active" du précédent
            const previousActive = filterContainer.querySelector(".active");
            if(previousActive) previousActive.classList.remove("active");
            event.target.classList.add("active");

            const filterValue = event.target.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if(item.classList.contains(filterValue) || filterValue === "all"){
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    });
}
