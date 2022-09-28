import { Route, Routes } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import Homepage from '../Components/HomepageMain';


export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Heading><Homepage/></Heading>} />
      {/* <Route path="/inspirations" element={<Heading>Inspirations</Heading>} /> */}
      <Route path="/forum" element={<Heading>Forum</Heading>} />
      <Route path="/packages" element={<Heading>Packages</Heading>} />
      <Route path="/publish" element={<Heading>Publish</Heading>} />
      {/* <Route path="/signin" element={<Heading>Signin</Heading>} /> */}
    </Routes>
  );
}
