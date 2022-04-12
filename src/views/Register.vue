<template>
  <div class="form-login__body">
    <div class="form-login__title">
      <div class="form-login__subtitle">Регистрация</div>
      <span>|</span>
      <router-link to="/login">Вход</router-link>
    </div>
    <form action="#" method="post" class="form-login__form">
      <input type="text" 
        class="form-login__input" 
        placeholder="Имя">
      <input type="text" 
        class="form-login__input" 
        placeholder="Email">
      <input type="password" 
        class="form-login__input" 
        placeholder="Пароль">
      <input type="password" 
        class="form-login__input" 
        placeholder="Снова пароль">
      <button type="submit" class="form-login__button btn">Зарегистрироваться</button>
    </form>
  </div>
</template>
