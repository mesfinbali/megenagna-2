import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';
import "./gallaryImages.css";
class GallaryImages extends Component {
constructor(props){
 super(props);
    this.state = {
        images:[ ]
      };
} 
async componentDidMount(){
    if(this.props){
//  console.log("gallary images props")
//  console.log(this.props.post)
 this.setState({images:this.props.post})
    }
}

render() {
return(  
   <> 
    {/* <Gallery  showLightboxThumbnails={true} images={this.state.images}/> */}
   { (this.state.images.length <= 0)&& <h4>No Image Attached </h4> }
   {(this.state.images.length >0)&& <ImageGallery items={this.state.images} />}
    </>
)  }
}

export default GallaryImages;