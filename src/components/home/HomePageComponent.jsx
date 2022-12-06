
import MainComponent from '../mainPage/MainComponent';
import ProductComponent from '../productPage/ProductComponent'
import FooterComponent from '../footer/FooterComponent';
import {Route, Routes } from 'react-router-dom';
import MenuListComponent from '../MenuListComponent';
import NavbarComponent from '../navbar/NavbarComponent';
import AddPosts from '../addcards/AddPosts';
import PostComponent from '../addcards/PostComponent';
import ToDoPage from '../todo/ToDoPage';
import CardComponent from '../mainPage/CardComponent';
import UserInfo from '../user/UserInfo';
import UserList from '../user/UserList';
import FetchStatic from '../fetch/FetchStatic';

const HomePageComponent = () => {
    
return(

    <div>
       <MenuListComponent />
      <div>
      <Routes>
        <Route path='/homepage' element={<NavbarComponent/>}/>
        <Route path='/main' element={<MainComponent/>}/>
        <Route path='/cards' element={<CardComponent/>}/>
        {/* <Route path='/slider' element={<SliderComponent/>} /> */}
        <Route path='/products' element={<ProductComponent/>} />
        <Route path='/add' element={<AddPosts />}/>
        <Route path="/post" element={<PostComponent/>} />
        <Route path='/todo' element={<ToDoPage />} />
        <Route path='/fetch' element={<FetchStatic />}/>
        <Route path='/user-list' element={<UserList />}/>
        <Route path='/user-list/:id' element={<UserInfo/>} />
      </Routes>        
      </div>
      <FooterComponent/>

    </div>
)
}
export default HomePageComponent;