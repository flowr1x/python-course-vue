<template>
  <main class="page">
    <section class="page__beginpage beginpage">
      <div class="beginpage__container">
        <div class="beginpage__title title-beginpage">
          <h1 class="title-beginpage__title">Инструкция пользователя</h1>
          <p class="title-beginpage__text">
            В данном разделе вы узнаете как пользоваться приложением
          </p>
        </div>
      </div>
    </section>
    <section class="page__manual manual">
      <div class="manual__container">
        <div class="manual__content">
          <div class="manual__list list-manual">
            <div class="manual__text text-manual">
              <div class="text-manual__header">
                <h1 class="text-manual__title">Инструкция пользователя</h1>
              </div>
              <div class="text-manual__body">
                <div class="text-manual__content">
                  <section class="text-manual__doc-section">
                    <div class="text-manual__section-block">
                      <p>Перейдя по ссылки, откроется сайт с основами алгоритмизации и программирования. На первой странице будут расположнны
                        3 навигационные кнопки. Кнопка "Справка" перенаправит на страницу о системных требования к системе. Кнопка "Войти в систему"
                        переведет на страницу авторизации. Кнопка "Инструкция" поможет в освоении сайта.
                      </p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\three-btn.jpg" alt="photo4.png">
                      </div>
                      <p>Чтобы вернуться обратно необходимо нажать на иконку "Python" в верхнем левом углу.</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\python.jpg" alt="photo4.png">
                      </div>
                      <p>Чтобы перейти на сайт с методическими указаниями, необходимо нажать на кнопку "Войти в систему". После нажатия откроется новая
                        страница по центру которой будет форма регистрации.
                      </p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\login.jpg" alt="photo4.png">
                      </div>
                      <p>Если уже существует аккаунт на данном сайте, то просто необходимо ввести логин и пароль от учетной записи и нажать на кнопку "Войти".</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\login-form.jpg" alt="photo4.png">
                      </div>
                      <p>Чтобы пароль был виден, то нужно нажать на кнопку ввиде глаза в поле "Password".</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\eye.jpg" alt="photo4.png">
                      </div>
                      <p>Если учетная запись еще не создавалась, то чтобы получить доступ к сайту, необходимо нажать на кнопку "Зарегистрации".</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\register-btn.jpg" alt="photo4.png">
                      </div>
                      <p>Дальше нужно внести информацию о себе в соответствующий поля и нажать на кнопку "Зарегистрироваться".</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\register-form.jpg" alt="photo4.png">
                      </div>
                      <p>После регистрации или входа, система автоматически перейдет на главную страницу "Учебник"</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\main-page.jpg" alt="photo4.png">
                      </div>
                      <p>На данной странице расположенна вся теоретическая часть. Чтобы просмотреть одну из тем достаточно нажать кнопку "Посмотреть" или выбрать нужный пункт в данной теме.</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\theme-item.jpg" alt="photo4.png">
                      </div>
                      <p>Также можно нажать на кнопку ввиде трех горизонтальных полосок, которая вызовит быстрое боковое навигационное меню по темам</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\aside.jpg" alt="photo4.png">
                      </div>
                      <p>Автоматический поиск поможет найти тему по ключевым словам в заголовке.</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\search.jpg" alt="photo4.png">
                      </div>
                      <p>Есть главное навигационное меню, которое позволяет перейти к проктическим работам и видеоурокам.</p>
                      <div class="text-manual__image-block">
                        <img src="@/assets\img\instruction_image\header.jpg" alt="photo4.png">
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "instruction",
}
</script>
