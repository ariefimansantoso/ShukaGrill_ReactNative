import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const onboarding = [
    {
        id: "1",
        title: "Masuk Shuka Grill",
        description:
            "Agar #ShukaLovers dapat menikmati akses penuh aplikasi Shuka Grill, \r\nmasuk dulu yuk! \r\n Gunakan akun Google kamu ya.",
        image: require("../assets/images/onboarding/Logo2.png"),
        imageLogo: require("../assets/images/onboarding/Logo.png"),
    }//,
    /* {
        id: "2",
        title: "Quick Food Delivery",
        description:
            "Reference site about Lorem Ipsum, giving information origins as well as a random",
        image: require("../assets/images/onboarding/02.png"),
    },
    {
        id: "3",
        title: "Enjoy Your Meal",
        description:
            "Reference site about Lorem Ipsum, giving information origins as well as a random",
        image: require("../assets/images/onboarding/03.png"),
    }, */
];

const tabs = [
    {
        id: "1",
        screen: "FoodDetails",
        name: "Menu",
        icon: require("../assets/icons/home.png"),
    },
   /*  {
        id: "2",
        screen: "Cart",
        name: "Keranjang",
        icon: require("../assets/icons/shopping-cart.png"),
    }, */
    {
        id: "3",
        screen: "OrderHistory",
        name: "Orderku",
        icon: require("../assets/icons/bag.png"),
    },    
    {
        id: "4",
        screen: "Contact",
        name: "Kontak",
        icon: require("../assets/icons/contact-mail.png"),
    },
    {
        id: "5",
        screen: "EditProfile",
        name: "Profil",
        icon: require("../assets/icons/user.png"),
    },
];

const category = [
    {
        id: "1",
        name: "cake",
        image: require("../assets/icons/cake.png"),
    },
    {
        id: "2",
        name: "food",
        image: require("../assets/icons/food.png"),
    },
    {
        id: "3",
        name: "drinks",
        image: require("../assets/icons/drinks.png"),
    },
    {
        id: "4",
        name: "snacks",
        image: require("../assets/icons/snacks.png"),
    },
    {
        id: "5",
        name: "cake",
        image: require("../assets/icons/cake.png"),
    },
    {
        id: "6",
        name: "food",
        image: require("../assets/icons/food.png"),
    },
];

const history = [
    {
        id: "1",
        name: "Paket Ultimate",
        date: "24 Jun, 12:30",
        image: "https://www.shukagrill.com/backend/Content/images/banner/ultimate.png",
        quantity: "15",
        price: 1400000,
        cancel: false,
        upcoming: false,
        completed: true,
    },
    {
        id: "2",
        name: "Paket Spesial",
        date: "24 Jun, 12:30",
        image: "https://www.shukagrill.com/backend/Content/images/banner/spesial.png",
        quantity: "4",
        price: 900000,
        cancel: false,
        upcoming: true,
        completed: false,
    },
    {
        id: "3",
        name: "Paket Premium",
        date: "24 Jun, 12:30",
        image: "https://www.shukagrill.com/backend/Content/images/banner/ultimate.png",
        quantity: "6",
        price: 950000,
        cancel: false,
        upcoming: true,
        completed: false,
    },
    {
        id: "4",
        name: "Paket Premium",
        date: "24 Jun, 12:30",
        image: "https://www.shukagrill.com/backend/Content/images/banner/ultimate.png",
        quantity: "6",
        price: 950000,
        cancel: false,
        upcoming: true,
        completed: false,
    },
    {
        id: "5",
        name: "Paket Premium",
        date: "24 Jun, 12:30",
        image: "https://www.shukagrill.com/backend/Content/images/banner/ultimate.png",
        quantity: "6",
        price: 950000,
        cancel: false,
        upcoming: false,
        completed: false,
    },
];

const favorite = [
    {
        id: "1",
        name: "Sea Food With Cury",
        description:
            "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
        image: require("../assets/images/favorite/favorite-01.png"),
        rating: 4.9,
        recommended: true,
        ingredients: "Sells food, either fresh, specie, chili",
        price: "20.00",
    },
    {
        id: "2",
        name: "Sea Food With Cury",
        description:
            "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
        image: require("../assets/images/favorite/favorite-02.png"),
        rating: 4.9,
        recommended: true,
        ingredients: "Sells food, either fresh, specie, chili",
        price: "20.00",
    },
    {
        id: "3",
        name: "Sea Food With Cury",
        description:
            "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
        image: require("../assets/images/favorite/favorite-03.png"),
        rating: 4.9,
        recommended: true,
        ingredients: "Sells food, either fresh, specie, chili",
        price: "20.00",
    },
];

const promocodes = [
    {
        id: "1",
        image: require("../assets/images/promocodes/promocode-01.png"),
        name: "Mcdonalds",
        discount: "50% off",
        validDate: "Valid until June 30, 2021",
    },
    {
        id: "2",
        image: require("../assets/images/promocodes/promocode-02.png"),
        name: "Burger King",
        discount: "30% off",
        validDate: "Valid until June 30, 2021",
    },
    {
        id: "3",
        image: require("../assets/images/promocodes/promocode-03.png"),
        name: "Domino’s Pizza",
        discount: "50% off",
        validDate: "Valid until June 30, 2021",
    },
    {
        id: "4",
        image: require("../assets/images/promocodes/promocode-04.png"),
        name: "KFC",
        discount: "25% off",
        validDate: "Valid until June 30, 2019",
    },
];

const STORAGE_KEY = '@user_credentials';
const storeUser = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

// getting data
const getUser = async () => {
    try {
        return JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
    } catch (error) {
        console.log(error); 
    }
};

const logoutUser = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        return true;
    }
    catch(exception) {
        return false;
    }
}

//const baseUrl = "https://api.shukagrillapp.com";
const baseUrl = "https://api.shukagrillapp.com";
const baseImageUrl = "https://backend.shukagrillapp.com";
export { onboarding, tabs, category, history, favorite, promocodes, baseUrl, baseImageUrl, storeUser, getUser, logoutUser };
