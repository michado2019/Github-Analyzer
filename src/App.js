import useForm from "./components/hooks/useForm";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState, useEffect, createContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";

// Create context
export const DataContext = createContext();

// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "35%",
  bgcolor: "background.paper",
  border: 0,
  borderRadius: "10px",
};

function App() {
  const { inputs, handleChange, handleClearForm } = useForm();

  // States
  const [githubLink, setGithubLink] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(githubLink);

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (githubLink && githubLink.length !== 0) {
      async function getData() {
        const url = `https://api.github.com/users/${githubLink}`;
        const response = await fetch(url);
        const result = await response.json();
        setData({
          ...data,
          result,
        });
        if (result) {
          handleClose();
        }
      }
      getData();
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect
  useEffect(() => {
    handleOpen();
    setGithubLink(inputs.github);
  }, [inputs.github]);
  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="boxForm">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Enter github username"
                type="text"
                name="github"
                onChange={handleChange}
                value={inputs.github}
                className="boxForm-input"
              />
              <button className="formBtns">Analyze</button>
            </form>
            <button onClick={handleClearForm} className="formBtns" id="formBtn">
              Clear
            </button>
          </Box>
        </Modal>
        <div className="appFlex">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </DataContext.Provider>
    </div>
  );
}
export default App;
