import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import {  MDBRow, MDBCol,  MDBIcon, MDBMask, MDBView, MDBBtn } from "mdbreact";
import queryString from "query-string";

import YouTube from 'react-youtube';

import Gallery from 'react-grid-gallery';
import YoutubePlayerComp from './youtubeplayer';

class AlbumPage extends Component {
constructor(props){
 super(props);

 let search = queryString.parse(this.props.location.search);

    this.state = {
        projectData:JSON.parse(localStorage.getItem('selectedProject')),
        search:search,
        fbAlbumData:{},
        albumPhotos:[
            { }],
      };
}

async componentDidMount(){
  
  window.scrollTo({ top: 0, behavior: "smooth" });
  
// console.log("Albums ")
// console.log(search)
let facebookAlbumPath='https://graph.facebook.com/' + this.state.search.fbId +'?fields=photos{images},description,name,location,created_time,place,cover_photo,link,updated_time&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD';
this.initFBdata(facebookAlbumPath,1);
}



initFBdata(albumsUrl,countpage){
  fetch(albumsUrl)
    .then(response => response.json())
    .then(data => 
      {
        let data2;
        let photos=[];
        let SinglePhoto={};

      let MergeData = this.state.albumPhotos;
        
      if(countpage>1){
        data2=data
      }
      else{
        data2=data.photos

      }

      if(data2){
        for(let i=0;i<data2.data.length;i++){
          let thumb;
            if(((data2.data[i].images.length)-2)>0){
              thumb=((data2.data[i].images.length)-2)
            }
              else{
                thumb=0;
              }
          SinglePhoto={
              src: data2.data[i].images[0].source,
              thumbnail: data2.data[i].images[thumb].source,
              thumbnailWidth: data2.data[i].images[0].width,//320,
              thumbnailHeight: data2.data[i].images[0].height,//174,
              // isSelected: true,
              // caption: "After Rain (Jeshu John - designerspics.com)"
      }
          photos.push(SinglePhoto);
        }
      }

      if(countpage>1){
        for(let i=0;i<photos.length;i++){
          MergeData.push(photos[i]);
        }
      }
      else{
        this.setState({fbAlbumData:data})
        MergeData=photos;
      }
      console.log("Albums data")
      console.log(data2)
      this.setState({albumPhotos: MergeData })
    
      if(data2){
      if(data2.paging.next){
        countpage=countpage+1;
        this.initFBdata(data2.paging.next,countpage);
      }}
        });
    

}



parseTime = (minute) => {
  let hours = parseInt(minute / 60);
  let minutes = minute % 60;
  return <span>{hours + "hrs " + minutes + "mins"}</span>;
};

parseDate = (dateString) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  };
  
  let date = new Date(dateString);
  let newDate = date.toLocaleString("en-GB", options);
  return <span>{newDate}</span>;
};


goToAlbum = () => {
  
};

  render() {
    
return(  
   <> 
<MDBContainer  className="mt-5 ">

{(this.state.search.ytId)&&
<>
     {((this.state.projectData)&&<>
        <MDBRow>
          <MDBCol lg="6">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                {this.state.projectData.workType.type}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>
                {this.state.projectData.workTitle} </strong>
            </h3>
            <p>
                {this.state.projectData.description} 
            </p>
            <p>
            {(this.state.projectData.createdTo)&& <> by <a href="#!">
                <strong> {this.state.projectData.createdTo}</strong>
              </a></>}
              {(this.state.projectData.dateWorked)&&<span> , {this.state.projectData.dateWorked}</span> } 
              {(this.state.projectData.place)&& <span> ,  {this.state.projectData.place}</span>}
            </p>
          </MDBCol>
       
          <MDBCol lg="6" style={{height:"290px !important"}}>
            <YoutubePlayerComp youtubeId={this.state.search.ytId }   youtubeHeightBrowser={"307px"} youtubeHeightMobile={'217px'}></YoutubePlayerComp>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />      
        </>)}
</>
}
        </MDBContainer>       
        <MDBContainer>

    <h2 className='h3 text-center text-uppercase font-weight-bold mt-3 mb-3'>
    {this.state.fbAlbumData.name}
    </h2>
    <p className='section-description mt-2 pt-2'>
      {this.state.fbAlbumData.description}
          </p>
          {/* <p>
          Date: {this.state.fbAlbumData.created_time} 
                      </p> */}

    <Gallery images={this.state.albumPhotos}/>
  </MDBContainer>
</>
)  }
}

export default AlbumPage;