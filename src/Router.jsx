import { Routes, Route } from "react-router-dom";
import PersonalizedView from "./components/PersonalizedView";
import GeneralView from "./components/GeneralView";
import Chat from "./components/Chat";
import PageNotFound from "./components/PageNotFound";
import CreateProfile from "./components/CreateProfile";
import CreateEvent from "./components/CreateEvent";

const Router = ({ user, firstTimeUserCallBack }) => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<PersonalizedView />} />
      <Route path="/PersonalizedView" element={<PersonalizedView />} />
      <Route path="/GeneralView" element={<GeneralView />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/EditProfile" element={<CreateProfile user={user} firstTimeUserCallBack={firstTimeUserCallBack} />} />
      <Route path="/EditEvent" element={<CreateEvent user={user} />} />
    </Routes>
  );
};

export default Router;
