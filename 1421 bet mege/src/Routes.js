import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomePage from './pages/Home/HomePage';
import ContactsPage from './pages/contact/contact';
import ServicesPage from './pages/services/services';
import ProjectsPage from './pages/projects/projects';
import SingleProject from './pages/projects/singleProject';
import AboutUs from './pages/aboutus/aboutus';
import SchoolPage from './pages/filmschool/school';
import GallaryPage from './pages/Gallary/gallarypage';
import AlbumPage from './pages/Gallary/album';
import OurWorks from './pages/projects/ourWorks';
import VideoGallary from './pages/Gallary/videoGallary';
import Posts from './pages/posts/posts';
import albumPosts from './pages/posts/albumPosts';
import ElectronicsHome from './pages/Megenagna/Classifieds/ElectronicsHome'; 
import ShopeDetails from './pages/Megenagna/Shope/ShopeDetails';
import  ItemDetails from './pages/Megenagna/Classifieds/Listing/ItemDetails';
import ProductRegisterForm from './pages/Megenagna/Manage-Product/ProductRegisterForm';
import ManageProduct from './pages/Megenagna/Manage-Product/ManageProduct';

class Routes extends React.Component {
  render() {
    return (
      <Switch>

        
<Route exact path='/posts' component={Posts} />
<Route exact path='/Posts/album/' component={albumPosts} />
        
        {/* <Route exact path='/' component={HomePageNew} /> */}
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/Classified' component={ElectronicsHome} />
        <Route exact path='/product' component={ ItemDetails} />
        <Route exact path='/product/create' component={ ProductRegisterForm} />
        <Route exact path='/manage-product' component={ ManageProduct} />
        <Route exact path='/Shope' component={ShopeDetails} />



        <Route exact path='/Contact' component={ContactsPage} />
        <Route exact path='/Services' component={ServicesPage} />
        <Route exact path='/Projects' component={ProjectsPage} />
        
        <Route exact path='/Projects/OurWorks' component={OurWorks} />
        <Route exact path='/Project/name' component={SingleProject} />
        <Route exact path='/School' component={SchoolPage} />
        <Route exact path='/Videos' component={VideoGallary} />
        <Route exact path='/Photos' component={GallaryPage} />
        <Route exact path='/gallary/album' component={AlbumPage} />
        <Route exact path='/gallary/Video' component={VideoGallary} />
        <Route exact path='/About' component={AboutUs} />

        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
