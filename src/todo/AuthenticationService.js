
class AuthenticationService{
    registerSuccessfulLogin(username,password){
        console.log('resisterSuccessful login')
        sessionStorage.setItem('authenticatedUser',username)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user!=null)
            return true
        else 
            return false    
    }


}

export default new AuthenticationService()