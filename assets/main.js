const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
    // console.log(e.target.closest(".accordion-panel"));
    const activePanel = e.target.closest(".accordion-panel");
    if(!activePanel) return;
    toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll('.accordion-contents');
    // console.log(buttons);

    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    });

    contents.forEach((content) => {
        content.setAttribute("aria-hidden", true);
    });

    panelToActivate.querySelector("button").setAttribute('aria-expanded', true);
    panelToActivate.querySelector(".accordion-content").setAttribute("aria-hidden", false);
}