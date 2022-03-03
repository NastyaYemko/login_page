<template>
  <div class="registrationPage">
  <div class="registrationBlock">
    <div class="text">
      <p class="yourLogo">Your logo</p>
      <p class="registration">Registration</p>
      <div class="datas">
      <div class="column">
        <div class="field">
          <p class="name">Name</p>
          <input class="input" type="text" placeholder="name">
        </div>
        <div class="field">
          <p class="name">Surname</p>
          <input class="input" type="text" placeholder="surname">
        </div>
        <div class="field">
          <p class="name">Phone</p>
          <input class="input" type="text" placeholder="phone">
        </div>
      </div>
        <div class="column">
      <div class="field">
        <p class="name">Email</p>
        <input class="input" type="text" placeholder="user@gmail.com">
      </div>
      <div class="field">
        <p class="name">Password</p>
        <input class="input" type="password" placeholder="password">
      </div>
      <div class="field">
        <p class="name">Repeat password</p>
        <input class="input" type="password" placeholder="repeat password">
      </div>
      </div>
      </div>
      <button class="input signInButton cursor">Register</button>
      <p class="name continue_with_text">or register with</p>
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
      <p class="name">Do you have an account?<span class="login cursor" @click="$router.push('/')">Log in</span></p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationBlock"
}
</script>

<style scoped>
.datas{
  display: flex;
  justify-content: space-between;
}
.registrationPage{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.column{
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.field{
  margin-top: 20px;
}
.cursor{
  cursor: pointer;
}
.registrationBlock{
  width: 80%;
  height: 80vh;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  box-shadow: 0 4px 70px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: auto;
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
.registration{
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
  margin-top: 10px;
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
.login{
  font-weight: bold;
}
.continue_with_text{
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
@media screen and (max-width: 800px) {
  .datas{
    flex-direction: column;
  }
  .column{
    width: 100%;
  }
  .registrationBlock{
    height: 120vh;
  }
  .text{
    margin-top: -50px;
  }
}
</style>
