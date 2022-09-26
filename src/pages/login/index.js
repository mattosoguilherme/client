const Login = () => {
  return (
    <>
      <form>
        <input type="email" id="email" placeholder="E-mail">
          {" "}
        </input>
        <input type="password" id="password" placeholder="Senha">
          {" "}
        </input>

        <button type="reset"> entrar </button>
      </form>
    </>
  );
};

export default Login;
