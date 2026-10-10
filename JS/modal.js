document.querySelectorAll(".skill-item, .work-item").forEach(card => {

    card.addEventListener("click", () => {

        const isMobile = getComputedStyle(document.documentElement)
        .getPropertyValue("--is-mobile")
        .trim() === "1";

        if (isMobile) {
            return;
        }

        // 画面全体を覆う背景を作成
        const overlay = document.createElement("div");
        overlay.classList.add("modal-overlay");

        // クリックしたカードを複製
        const modalCard = card.cloneNode(true);
        modalCard.classList.add("modal-content");

        // 背景の中にカードを配置
        const modalWrapper = document.createElement("div");
        modalWrapper.style.width = "fit-content";
        modalWrapper.style.margin = "auto";
        modalWrapper.style.flexShrink = "0";
        modalWrapper.appendChild(modalCard);

        overlay.appendChild(modalWrapper);

        // 画面に表示
        document.body.appendChild(overlay);

        const isTablet = getComputedStyle(document.documentElement)
            .getPropertyValue("--is-tablet")
            .trim() === "1";

        const scale = isTablet ? 1 : 1.3;

        modalWrapper.style.width = `${modalCard.offsetWidth * scale}px`;
        modalWrapper.style.height = `${modalCard.offsetHeight * scale}px`;

        // モーダルを閉じる共通処理
        function closeModal() {
            overlay.remove();
            document.removeEventListener("keydown", handleKeydown);
        }

        // Escキーの処理
        function handleKeydown(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        }

        // 背景をクリックすると閉じる
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeModal();
            }
        });

        // Escキーでも閉じる
        document.addEventListener("keydown", handleKeydown);

    });

});