 // 1.给登录按钮一个点击事件.
    $(".input_sub").on("click", function (e) {
      // ​登录按钮是一个form表单中的submit, 所以要去掉他的默认跳转.
      e.preventDefault()
      // 2.获取用户输入的用户名和密码, 去掉前后空格  trim()
      var username = $(".input_txt").val().trim() //用户名
      var password = $(".input_pass").val().trim() //密码
      // 3.判断是否为空,
      if (username == "" || password == "") {
        // ​如果为空不要继续,如果不为空就继续
        alert('账号或者密码为空,请重新输入!');
        //使用模态框
        return
      }
      // 4.发送ajax请求,判断账号密码是否正确.
      $.ajax({
        type: "post",
        url: "http://47.111.184.55:8888/api/v1/admin/user/login",
        data: {
          username: username,
          password: password
        },
        success: function (backData) {
          if (backData.code == 200) {
            // 保存token
            window.localStorage.setItem("token", backData.token)
            //登录成功,跳转到首页
            window.location.href = "index.html"
          } else {
            //使用模态框
            alert('登录错误')
          }
        }
      })
    })