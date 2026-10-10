// メニューボタンを取得
const menuToggle = document.querySelector(".menu-toggle");

// ナビゲーションを取得
const globalNav = document.getElementById("global-nav");

// ボタンをクリックしたとき
menuToggle.addEventListener("click", () => {

    // メニューの開閉を切り替える
    const isOpen = globalNav.classList.toggle("is-open");

    // アクセシビリティ用の状態を更新
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    // ボタンの表示を変更
    menuToggle.textContent = isOpen ? "×" : "☰";

    // ボタンの説明を変更
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "メニューを閉じる" : "メニューを開く"
    );

});