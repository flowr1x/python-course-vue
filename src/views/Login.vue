<template>
    <div class="form-login">
        <input type="checkbox" id="form-login__switch">
        <div class="form-login__body form-login__body_login">
            <div class="form-login__title">
                <div class="form-login__subtitle">Вход</div>
                <span>|</span>
                <label for="form-login__switch"><span>Регистрация</span></label>
            </div>
            <form action="#" method="post" class="form-login__form form-login__form_login">
                <input type="text" class="form-login__input" placeholder="Введите логин">
                <input type="password" class="form-login__input" placeholder="Введите пароль">
                <button type="submit" class="form-login__button btn">Войти</button>
            </form>
        </div>    
    </div>
</template>