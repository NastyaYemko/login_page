<template>
  <div class="logInPage">
  <div class="logInBlock">
    <div class="text">
      <p class="yourLogo">Your logo</p>
      <p class="login">Login</p>
      <div class="">
      <p class="name">Email</p>
      <input class="input" type="text" placeholder="user@gmail.com">
      </div>
      <div>
        <p class="name">Password</p>
      <input class="input" type="password" placeholder="password">
        <p class="name cursor">Forgot password?</p>
      </div>

      <button class="input signInButton cursor">Sign In</button>
      <p class="name continue_with_text">or continue with</p>
      <div class="social-networks">
        <div class="social-network">
          <img src="../assets/flat-color-icons_google.png" alt="">
        </div>
        <div class="social-network">
          <img src="../assets/akar-icons_github-fill.png" alt="">
        </div>
        <div class="social-network">
          <img src="../assets/bi_facebook.png" alt="">
        </div>
      </div>
      <p class="name">Don’t have an account yet?<span class="registration cursor" @click="$router.push('/registration')">Register for free</span></p>
    </div>
  </div>
    <div class="imageLogIn">
    </div>
  </div>
</template>

<script>
export default {
  name: "LogInBlock"
}
</script>

<style scoped>
.imageLogIn{
  width: 55%;
  height: 80vh;
  background-image: url("../assets/imageLogIn.png");
  background-size: cover;
}
.logInPage{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.cursor{
  cursor: pointer;
}
.logInBlock{
  height: 80vh;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  box-shadow: 0 4px 70px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.text{
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.yourLogo{
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #F25019;
}
.login{
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  color: #2A1E17;
}
.name{
  font-size: 14px;
  line-height: 16px;
  color: #2A1E17;
}
.input{
  width: 100%;
  height: 50px;
  padding: 17px;
  border-radius: 5px;
  border: 1px solid white;
}
input:focus{
  outline: none;
}
.signInButton{
  background: #F25019;
  border: 1px solid #F25019;
  color: white;
}
.social-networks{
  display: flex;
  justify-content: space-between;
}
.social-network{
  width: 125px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.registration{
  font-weight: bold;
}
.continue_with_text{
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
@media screen and (max-width: 950px) {
  .imageLogIn{
    display: none;
  }
}
</style>
