document.querySelectorAll(".skill-item, .work-item").forEach(card => {

    card.addEventListener("click", () => {

        // スマホ判定
        const isMobile = getComputedStyle(document.documentElement)
            .getPropertyValue("--is-mobile")
            .trim() === "1";

        if (isMobile) {
            return;
        }

        // CSSからモーダルの拡大率を取得
        const scale = parseFloat(
            getComputedStyle(document.documentElement)
                .getPropertyValue("--modal-scale")
        );

        // 元のカードの幅を取得
        const originalWidth = card.getBoundingClientRect().width;

        // 背景を作成
        const overlay = document.createElement("div");
        overlay.classList.add("modal-overlay");

        // 中央配置用の領域を作成
        const modalWrapper = document.createElement("div");
        modalWrapper.classList.add("modal-wrapper");

        // カードを複製
        const modalCard = card.cloneNode(true);
        modalCard.classList.add("modal-content");

        // フェードインのtransformとの競合を防ぐ
        modalCard.classList.remove("fade-in", "is-visible");

        // 元のカードの幅を固定
        modalCard.style.width = `${originalWidth}px`;

        // モーダルを組み立てる
        modalWrapper.appendChild(modalCard);
        overlay.appendChild(modalWrapper);
        document.body.appendChild(overlay);

        // 拡大前のカードの高さを取得
        const originalHeight = modalCard.offsetHeight;

        // 拡大後の表示領域を確保
        modalWrapper.style.width = `${originalWidth * scale}px`;
        modalWrapper.style.height = `${originalHeight * scale}px`;

        // モーダルを閉じる共通処理
        function closeModal() {
            overlay.remove();
            document.removeEventListener("keydown", handleKeydown);
        }

        // Escキーで閉じる
        function handleKeydown(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        }

        // 背景クリックで閉じる
        overlay.addEventListener("click", event => {
            if (event.target === overlay) {
                closeModal();
            }
        });

        // Escキーで閉じる
        document.addEventListener("keydown", handleKeydown);

    });

});