// お問い合わせフォームを取得
const contactForm = document.getElementById("contact-form");

// 送信結果の表示領域を取得
const formStatus = document.getElementById("form-status");

// 送信ボタンを取得
const submitButton = contactForm.querySelector('button[type="submit"]');

// フォーム送信時の処理
contactForm.addEventListener("submit", async (event) => {

    // 通常の画面遷移を停止
    event.preventDefault();

    // 送信中はボタンを無効化
    submitButton.disabled = true;
    submitButton.textContent = "送信中...";

    // 前回のメッセージを消す
    formStatus.textContent = "";
    formStatus.className = "";

    try {

        // フォームの入力内容を取得
        const formData = new FormData(contactForm);

        // Formspreeへ送信
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        // 送信結果を判定
        if (response.ok) {

            // 成功メッセージ
            formStatus.textContent =
                "お問い合わせありがとうございます。送信が完了しました。";

            formStatus.classList.add("success");

            // 入力内容をクリア
            contactForm.reset();

        } else {

            // エラーメッセージ
            formStatus.textContent =
                "送信に失敗しました。時間をおいて再度お試しください。";

            formStatus.classList.add("error");

        }

    } catch (error) {

        // 通信エラー
        formStatus.textContent =
            "通信エラーが発生しました。接続状況をご確認ください。";

        formStatus.classList.add("error");

        console.error("送信エラー:", error);

    } finally {

        // 送信ボタンを元に戻す
        submitButton.disabled = false;
        submitButton.textContent = "送信する";

    }

});