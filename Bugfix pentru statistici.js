document.addEventListener("DOMContentLoaded", function() {
    const groupLegendElement = document.querySelector('.footer_group');
    const groupTabTarget = document.querySelector('#groups');
    if (groupLegendElement) {
        console.log("???? S-a găsit conținutul legendei grupului:", groupLegendElement.innerHTML);
        const newGroupContent = document.createElement("div");
        newGroupContent.innerHTML = groupLegendElement.innerHTML;
        groupTabTarget.innerHTML = "";
        groupTabTarget.appendChild(newGroupContent)
    } else {
        console.log("???? Nu s-a găsit niciun conținut legat de legenda grupului.")
    }
    const tabs = document.querySelectorAll(".tab-menu li");
    const contents = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const tabName = this.getAttribute("data-tab");
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            const targetTab = document.getElementById(tabName);
            if (targetTab) targetTab.classList.add("active")
        })
    });
    const defaultTab = document.querySelector(".tab-menu li.active");
    if (defaultTab) defaultTab.click()
});
