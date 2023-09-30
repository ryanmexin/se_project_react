//import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import UnAuthHeader from "../UnAuthHeader/UnAuthHeader";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { useState } from "react";
import { useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForcastWeather } from "../../utils/weatherApi";
import { parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Profile from "../Profile/Profile";
import { Switch, Route } from "react-router-dom";
//import { defaultClothingItems } from "../../utils/constants";
import AddItemModal from "../AddItemModal/AddItemModal";
import { deleteItems, getItems, postItems } from "../../utils/Api";
import { register, signIn, checkToken } from "../../utils/auth";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { AppContext } from "../AppContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";


// rendering the header the weather card and the card clothing section
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const appContextValue = { state: { loggedIn, userData } };



  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const openSignUpModal= () => {
    setActiveModal("signup");
  };

  const openLogInModal = () => {
    setActiveModal("login");
  };


  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddItemSubmit = (values) => {
    postItems(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleDeleteCard = (cardElement) => {
    console.log(cardElement);
    deleteItems(cardElement)
      .then(() => {
        const newClothesList = clothingItems.filter((cards) => {
          return cards.id !== cardElement;
        });
        console.log(newClothesList);
        setClothingItems(newClothesList);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegistration = ({email, password, name, avatar}) => {
    register({email: email, password: password, name: name, avatar: avatar})
      .then((res) => {
        // Registration successful, set the loggedIn state and close the modal
        this.setState({
          loggedIn: true,
        });
        setCurrentUser(res);
        handleLogin({email, password})
        setLoggedIn(true);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
        // Handle registration error here
      });
  };
  
  const handleLogin = (email, password) => {
    signIn(email, password)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          // Successfully logged in
          setLoggedIn(true);
          setCurrentUser(data);
          handleCloseModal();
        } else {
          // Handle login failure
          console.error("Login failed.");
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle login error here
      });
  };
  
  const handleUpdate = (name, avatar) => {

  }

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
   const token = localStorage.getItem('jwt');
   if (token) {
    checkToken(token);
    setCurrentUser();
    setIsLoggedIn(true);
    
   } else {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
     console.log("Token not found");
   }
   }, []);

  console.log(temp);

  console.log(currentTemperatureUnit);

  return (
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser} loggedIn = {loggedIn}>
        <AppContext.Provider value={appContextValue}>
        
          {loggedIn ? <Header onCreateModal={handleCreateModal} temp= {temp} user= {currentUser}/> : <UnAuthHeader onClickSignUp={openSignUpModal} OnClickLogIn={openLogInModal}temp={temp}/>}
          <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          
          <ProtectedRoute path="/profile">
            <Profile
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
            ></Profile>
          </ProtectedRoute>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            handleAddItemSubmit={handleAddItemSubmit}
            isOpen={activeModal === "create"}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteCard={handleDeleteCard}
          />
        )}
         {activeModal === "signup" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "signup"}
            handleRegistration={handleRegistration}
            OnClickLogIn={openLogInModal}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "login"}
            handleLogin={handleLogin}
            onClickSignUp={openSignUpModal}
          />
        )}
        {activeModal === "update" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "update"}
            handleUpdate={handleUpdate}
          />
        )}
        </AppContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    
  );
}

export default App;
