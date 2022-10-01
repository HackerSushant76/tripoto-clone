import { Route, Routes } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import Homepage from '../Components/HomepageMain';
import Packages from "./Packages";
import Singapore from "../Components/singapore/Singapore";
import Beach from "../Components/beaches/Beach"
import SingleCardPage from "../Components/SingleCardPage";
import TripPage from "./TripPage";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      {/* <Route path="/inspirations" element={<Heading>Inspirations</Heading>} /> */}
      <Route path="/inspiration/singapore" element={<Singapore/>} />
      <Route path="/inspiration/beach" element={<Beach/>} />
      <Route path="/forum" element={<Heading>Forum</Heading>} />
      <Route path="/packages" element={<Packages/>} />
      <Route path="/publish" element={<Heading>Publish</Heading>} />
      <Route path="/Partnerships/:id" element={ <SingleCardPage/>  }/>
      <Route path="/TripPage/:id" element={<TripPage/>}/>
     
      {/* <Route path="/signin" element={<Heading>Signin</Heading>} /> */}
    </Routes>
  );
}
