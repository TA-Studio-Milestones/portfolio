// ① 監視オブジェクトを作成
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        } else {
            entry.target.classList.remove("is-visible");
        }

    });

}, {
    threshold: 0.15
});


// ② HOME専用フェードイン
const homeElements = document.querySelectorAll(".home-fade, .profile-fade");

homeElements.forEach(element => {
    observer.observe(element);
});

// ③ スキル・制作物のフェードイン
const fadeElements = document.querySelectorAll(
    ".skill-item, .work-item"
);

fadeElements.forEach(element => {
    element.classList.add("fade-in");
    observer.observe(element);
});