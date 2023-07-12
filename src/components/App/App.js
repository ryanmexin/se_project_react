//import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWIthForm";
import { useState } from "react";
import { useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForcastWeather } from "../../utils/weatherApi";
import { parseWeatherData } from "../../utils/weatherApi";

// rendering the header the weather card and the card clothing section
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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
    getForcastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(temp);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          buttonText="Add garment"
          title="New Garment"
          onClose={handleCloseModal}
        >
          <div className="modal__form">
            <label className="modal__label">
              Name
              <input
                className="modal__input-name"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              />
            </label>
            <label className="modal__label">
              Image
              <input
                className="modal__input-name"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image URL"
              />
            </label>
          </div>
          <div>
            <p className="modal__label">Select the Weather Type</p>
            <div className="weather__selections">
              <div>
                {" "}
                <input
                  className="form__input"
                  type="radio"
                  id="hot"
                  value="hot"
                />
                <label>
                  <span>Hot</span>
                </label>
              </div>
              <div>
                {" "}
                <input
                  className="form__input"
                  type="radio"
                  id="warm"
                  value="warm"
                />
                <label>Warm</label>
              </div>
              <div>
                {" "}
                <input
                  className="form__input"
                  type="radio"
                  id="cold"
                  value="cold"
                />
                <label>Cold</label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}

      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
