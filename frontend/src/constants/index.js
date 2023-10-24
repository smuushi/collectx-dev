export const Navigation = [
    {
        name: "home",
        link: "/",
    },
    {
        name: "browse",
        link: "/browse",
    },
    {
        name: "about",
        link: "/about",
    },

]


export const userNavigation = [
    {
        name: "my Cards",
        url : "own-cards"
    },
    {
        name: "Offers made",
        url : "offer-made"
    },
    {
        name: "Favorited",
        url : "favorited"
    },
    {
        name: "Settings",
        url : "setting"
    },
]

/**
   * Myles request a fake login function
   */
export const fakeLogin = () =>{
    dispatch({
        type: 'CREATE_ACCOUNT_SUCCESS',
        payload: {
        email: 'admin@gmail.com',
        password: userInfo.password,
        username: "admin",
        }
    })
    dispatch({
        type: 'SIGN_IN_SUCCESS',
        payload: {
        message: "Login success",
        user: {
            role: "user",
            isEmailVerified: false,
            email: 'admin@gmail.com',
            username: "admin",
            id: '650ce9bdd8d81b6086ee0092',
        }
        },
        user: '650ce9bdd8d81b6086ee0092',
    })
    dispatch({
        type: 'SET_USER',
        payload: [{
        role: "user",
        isEmailVerified: false,
        email: 'admin@gmail.com',
        username: "admin",
        id: '650ce9bdd8d81b6086ee0092',
        }]
    })
    dispatch({
        type: 'UPDATE_USER',
        payload: {
        role: "user",
        isEmailVerified: false,
        email: 'admin@gmail.com',
        username: "admin",
        id: '650ce9bdd8d81b6086ee0092',
        }
    })
    navigate('/profile/own-cards')
}



import { 
    database_product_info 
} from "./testData/card.js"


export{
    database_product_info
}