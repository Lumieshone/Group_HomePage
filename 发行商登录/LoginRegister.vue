<template>
	<div class="login-register">
		<div class="contain">
			<div >
				<div class="big-contain" key="bigContainLogin" >
          <br>
          <br>
					<div class="btitle">发行商账户登录</div>
					<div class="bform">
						<input type="email" placeholder="邮箱" v-model="form.useremail">
            <br>
            <br>
						<span class="errTips" v-if="emailError">* 邮箱填写错误 *</span>
						<input type="password" placeholder="密码" v-model="form.userpwd">
						<span class="errTips" v-if="emailError">* 密码填写错误 *</span>
					</div>
					<button class="bbutton" @click="login">登录</button>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login-register',
		data(){
			return {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        mode: {},
        modeList: [],
				isLogin:false,
				emailError: false,
				passwordError: false,
				existed: false,
        id: this.$route.query.id,
        name:this.$route.query.name,
				form:{
					username:'',
					useremail:'',
					userpwd:''
				}
			}
		},
		methods:{
			login() {
				const self = this;
				if (self.form.useremail != "" && self.form.userpwd != "") {
					self.$axios({
						method:'post',
						url: 'api/publisher/login',
						data: {
							email: self.form.useremail,
							password: self.form.userpwd
						}
					})
					.then( res => {
						switch(res.data.result){
							case 0:
								alert("发行商账户登录成功！");
                this.$store.commit('changeValue_Name',this.name);
                this.$store.commit('changeValue_ID',this.id);
								break;
							case -1:
								this.emailError = true;
								break;
							case 1:
								this.passwordError = true;
								break;
						}
					})
					.catch( err => {
						console.log(err);
					})
				} else{
					alert("填写不能为空！");
				}
			},


		}
	}
</script>

<style scoped="scoped">
	.login-register{
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		background: linear-gradient(200deg,#FAEBE5,#F6E7F7);
	}
	.contain{
		width: 60%;
		height: 50%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		border-radius: 20px;
		box-shadow: 0 0 3px #f0f0f0,
					0 0 6px #f0f0f0;
	}
	.big-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btitle{
		font-size: 1.5em;
		font-weight: bold;
		color: #444444;
	}
	.bform{
		width: 100%;
		height: 40%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.bform .errTips{
		display: block;
		width: 50%;
		text-align: left;
		color: red;
		font-size: 0.7em;
		margin-left: 1em;
	}
	.bform input{
		width: 50%;
		height: 40px;
		border: none;
		outline: none;
		border-radius: 10px;
		padding-left: 2em;
		background-color: #f0f0f0;
	}
	.bbutton{
		width: 20%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
		background-color: #444444;
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	.bbutton:hover{
        background-color: #aaaaaa;
        color: #000000;
        transition: background-color 0.5s ease;
    }
	.small-contain span{
        color: #ffffff;
    }
</style>