// ページ上部へ戻るボタンを取得
const backToTop = document.getElementById("back-to-top");

// スクロール位置によってボタンの表示を切り替える
function toggleBackToTop() {

    if (window.scrollY > 300) {
        backToTop.classList.add("is-visible");
    } else {
        backToTop.classList.remove("is-visible");
    }

}

// スクロール時に実行
window.addEventListener("scroll", toggleBackToTop, { passive: true });

// ページ読み込み時にも表示状態を確認
toggleBackToTop();

// ボタンをクリックするとページ上部へ戻る
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});