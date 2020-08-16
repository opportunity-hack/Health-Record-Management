import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/homes/Home";
import NavigationBar from "./components/navigationbars/NavigationBar";
import Footer from "./components/navigationbars/Footer";
import SignIn from "./components/authentications/SignIn";
import SignUp from "./components/authentications/SignUp";
import PHome from "./components/homes/PHome";
import DHome from "./components/homes/DHome";
import AppointmentHome from "./components/homes/AppointmentHome";
import Ptreat from "./components/treatment/Ptreat";
import Dtreat from "./components/treatment/Dtreat";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorPatient from "./components/homes/DoctorPatient";
import DAccount from "./components/homes/DAccount";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/phome" component={PHome} />
                <Route path="/Dhome" component={DHome} />
                <Route path="/appointment" component={AppointmentHome} />
                <Route path="/ptreat" component={Ptreat} />
                <Route path="/dtreat" component={Dtreat} />
                <Route path="/doctor_patient" component={DoctorPatient} />
                <Route path="/doctor_account" component={DAccount} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
