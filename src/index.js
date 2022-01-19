import React, { useEffect, useReducer, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HeadLine from "./components/HeadLine";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import noteReducer from "./reducers/notes";
import NotesContext from "./context/NotesContext";
import {Button, FormHelperText, Input, InputLabel} from "@mui/material";
import { FormControl } from "@mui/material";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, BrowserRouter, Routes
} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ItemCard from "./components/ItemCard";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

function App() {
  const [notes, dispatch] = useReducer(noteReducer, []);
  useEffect(() => {
    const notesFromStorage = JSON.parse(localStorage.getItem("notes"));
    if (notesFromStorage) {
      // setNotes(notesFromdata)
      dispatch({ type: "POPULATE_NOTES", notes: notesFromStorage });
    }
  }, []);
  useEffect(() => {
    console.log("useEffect");
    document.title = `eden (${notes.length})`;
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {/*<BrowserRouter>*/}
      {/*  <HeadLine/>*/}
      {/*  <Routes>*/}
      {/*    <Route path="/" element={<Home />} />*/}
      {/*    <Route path="/shop" element={<Shop />} />*/}
      {/*    <Route path="/shop/:id" element={<ItemCard />} />*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
      <Dashboard/>
        {/*<SignUp/>*/}
        {/*<SignIn/>*/}
        {/*<FormControl>*/}
        {/*    <InputLabel htmlFor="my-input">Email address</InputLabel>*/}
        {/*    <Input id="my-input" aria-describedby="my-helper-text" />*/}
        {/*    /!* eslint-disable-next-line react/no-unescaped-entities *!/*/}
        {/*    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>*/}
        {/*</FormControl>*/}
        {/*<Button variant="contained">Contained</Button>*/}
        {/*<TextInputWithFocusButton />*/}
      {/*<HeadLine />*/}
      {/*<NoteList />*/}
      {/*<NoteForm />*/}
    </NotesContext.Provider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
