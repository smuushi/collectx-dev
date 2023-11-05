
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

export const category = [
    {
        name: "Football",
        link: "/search/?search=football",
    },
    {
        name: "Basketball",
        link: "/search/?search=basketball",
    },
    {
        name: "Baseball",
        link: "/search/?search=baseball",
    },
    {
        name: "Pokemon",
        link: "/search/?search=pokemon",
    },
    {
        name: "Hockey",
        link: "/search/?search=hockey",
    },
    {
        name: "Soccer",
        link: "/search/?search=soccer",
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
        name: "Messages",
        url : "messages"
    },
    {
        name: "Settings",
        url : "setting"
    },
]




import { 
    database_product_info 
} from "./testData/card.js"


export{
    database_product_info
}