//import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
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


// rendering the header the weather card and the card clothing section
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);



  const handleCreateModal = () => {
    setActiveModal("create");
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

  const handleRegistration = () => {
    const { email, password, name, avatar } = this.state; // Assuming you have these values in the component's state
    register(email, password, name, avatar)
      .then(() => {
        // Registration successful, set the loggedIn state and close the modal
        this.setState({
          loggedIn: true,
        });
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
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          // Successfully logged in
          this.setState({
            loggedIn: true,
          });
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
    checkToken().then((jwt) => {});
  }, []);

  console.log(temp);

  console.log(currentTemperatureUnit);

  return (
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
            ></Profile>
          </Route>
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
         {activeModal === "create" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            handleRegistration={handleRegistration}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "login"}
            handleLogin={handleLogin}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    
  );
}

export default App;
