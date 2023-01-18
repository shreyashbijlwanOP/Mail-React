import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inbox from './components/pages/Inbox';
import Spam from './components/pages/Spam';
import DeletedItems from './components/pages/DeletedItems';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Inbox/>}/> 
            <Route path = "/inbox" element={<Inbox/>}/> 
            <Route path = "/inbox/:id" element={<Inbox/>}/> 
            <Route path = "/spam" element={<Spam/>}/> 
            <Route path = "/spam/:id" element={<Spam/>}/> 
            <Route path = "/deletedItems" element={<DeletedItems/>}/> 
            <Route path = "/deletedItems/:id" element={<DeletedItems/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
