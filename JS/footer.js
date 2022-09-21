let footer = document.querySelector("footer")
footer.innerHTML = `
    <div class="foot_container">
            <div class="send_email">
                <p>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</p>
                <div class="send_email_input">
                    <form name="email">
                        <input type="email" placeholder="Введите ваш e-mail:" required name="email">
                        <button>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
            <div class="info_about_site">
                <div class="left_side">
                    <p><b>Информация</b></p>
                    <p>О компании</p>
                    <p>Контакты</p>
                    <p>Акции</p>
                    <p>Магазины</p>
                </div>
                <div class="right_side">
                    <p><b>Интернет-магазин</b></p>
                    <p>Доставка и самовывоз</p>
                    <p>Оплата</p>
                    <p>Возврат-обмен</p>
                    <p>Новости</p>
                </div>
            </div>
            <div class="mobile_info_about_site">
                <div class="sides top_side">Информация<span></span></div>
                <div class="info_top">
                    <p>О компании</p>
                    <p>Контакты</p>
                    <p>Акции</p>
                    <p>Магазины</p>
                </div>
                <div class="sides bottom_side">Интернет-магазин<span></span></div>
                <div class="info_bottom">
                    <p>Доставка и самовывоз</p>
                    <p>Оплата</p>
                    <p>Возврат-обмен</p>
                    <p>Новости</p>
                </div>
            </div>
            <div class="links">
                <a href="https://www.instagram.com" class="link"></a>
                <a href="https://www.vk.com" class="link"></a>
                <a href="https://www.facebook.com" class="link"></a>
                <a href="https://www.linkedin.com" class="link"></a>
            </div>
        </div>
        <div class="mobile_links">
            <div class="links">
                <a href="https://www.instagram.com" class="link"></a>
                <a href="https://www.vk.com" class="link"></a>
                <a href="https://www.facebook.com" class="link"></a>
                <a href="https://www.linkedin.com" class="link"></a>
            </div>
            <p class="ppp">Договор оферты</p>
            <p class="ppp">Политика обработки персональных данных</p>
        </div>
`

let topSide = document.querySelector(".top_side"),
    bottomSide = document.querySelector(".bottom_side")
let infoTop = document.querySelector(".info_top"),
    infoBottom = document.querySelector(".info_bottom")
let arrowSp = document.querySelectorAll(".sides span")
console.log(arrowSp);

topSide.onclick = () => {
    infoTop.classList.toggle("open_info")
    if (infoTop.classList.contains("open_info")) {
        arrowSp[0].style = "transform: rotate(0);"
    } else {
        arrowSp[0].style = "transform: rotate(180deg);"
    }
}
bottomSide.onclick = () => {
    infoBottom.classList.toggle("open_info")
    if (infoBottom.classList.contains("open_info")) {
        arrowSp[1].style = "transform: rotate(0);"
    } else {
        arrowSp[1].style = "transform: rotate(180deg);"
    }
}