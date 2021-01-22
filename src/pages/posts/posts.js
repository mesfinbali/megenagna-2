import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import {  MDBRow, MDBCol,MDBCard, MDBCardBody , MDBMask, MDBView, MDBBtn } from "mdbreact";
import queryString from "query-string";

// import YouTube from 'react-youtube';
// // 
// import Gallery from 'react-grid-gallery';
import GallaryImages from '../Gallary/galaryImages';
// import YoutubePlayerComp from './youtubeplayer';

class Posts extends Component {
constructor(props){
 super(props);

 let search = queryString.parse(this.props.location.search);

    this.state = { 
        posts:{data:[],paging:{}},
        seeMoreImagesId:"",
        readMoreImagesId:"",
        loading:true,
        banner:null,
      };
}

async componentDidMount(){
  
  this.setState({loading:true});  
  window.scrollTo({ top: 0, behavior: "smooth" });
  
// console.log("Albums ")
// console.log(search)
let facebookAlbumPath='https://graph.facebook.com/' + "100180088170173?fields=description,posts{attachments,message,created_time}"
+"&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD";
this.initFBdata(facebookAlbumPath,1);
}



initFBdata(albumsUrl,countpage){
  fetch(albumsUrl)
    .then(response => response.json())
    .then(data => 
      {   
      // console.log("posts data")
      // console.log(data)
      this.setState({posts:data.posts,loading:false})  
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
 
postGallaryImages = (data2,seeall) => {
    // console.log("postGallaryImages");
    // console.log(images.attachments.data);
    let photos=[];
    let SinglePhoto;
    let attachement;
    let length;
    let maxlength=5;

    if(data2){
        if(data2.attachments){
          if(data2.attachments.data[0].subattachments){
              attachement=data2.attachments.data[0].subattachments; 
            }
            else{
        attachement=data2.attachments;
    }
    if(attachement){
        if((seeall==true)||(maxlength>attachement.data.length)){
            length=attachement.data.length;
        }
        else{
            length=maxlength;
        }
        
        for(let i=0;i< length;i++){ 
          if(i>1&&this.state.banner==null){
            this.setState({banner:attachement.data[i].media.image.src})
          }
                  SinglePhoto={
                      src: attachement.data[i].media.image.src, 
                      thumbnail: attachement.data[i].media.image.src,
                      thumbnailWidth: attachement.data[i].media.image.width,//320,
                      thumbnailHeight: attachement.data[i].media.image.height,//174,
            //           isSelected: true,
                      caption: attachement.data[i].description,
              }
                  photos.push(SinglePhoto); 
                }
             
    }
}
       return( 
       <>
       <MDBRow>
         <MDBCol lg='12' xl="12" md="12">
       <GallaryImages post={photos}></GallaryImages> 

         </MDBCol>
         <MDBCol lg='12' xl="12" md="12">
           
       <p>{attachement.data.length} image(s)</p>
       {(maxlength<attachement.data.length)&&
<>
       {(this.state.seeMoreImagesId==data2.id)&&
        <MDBBtn color="primary" rounded outline size="sm"  onClick={() =>{this.setState({seeMoreImagesId:""})}}>
              see less
            </MDBBtn>
            }
        {(this.state.seeMoreImagesId!=data2.id)&&
        <MDBBtn color="primary" rounded outline size="sm"  onClick={() =>{this.setState({seeMoreImagesId:data2.id})}}>
              see {attachement.data.length-maxlength} more image(s)
            </MDBBtn>
            }</>}
         </MDBCol>
       </MDBRow>
       </>
        )
    }
  
};

  render() {
    
return(  
   <> 
  {this.state.loading  && 
  
  <>
    <MDBContainer>
      <div  className="mt-5 px-2 pb-2 z-index-0  text-center">
        <h3> Loading </h3>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>

    </MDBContainer>
    </>
    }
    
   {!this.state.loading &&
    <>

<div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader mb-4'
          src={this.state.banner?this.state.banner:'https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/126404678_212481473606700_4787511284135086667_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=JICjdbQKDGwAX-Wtcqq&_nc_ht=scontent.fadd1-1.fna&oh=a4b006ac110ab307f7b1afe5117583ae&oe=5FF19D59'}
          fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

        

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

     
          
        </MDBView>


</div>  
    
<MDBContainer  className="mt-5 ">
<h2 className="h1-responsive font-weight-bold text-center ">
          Recent posts
        </h2>
        
{this.state.posts.data.map((post)=>
<>

{(post.attachments&& post.message)&&
<MDBCard className="my-5 px-2  pb-5">
      <MDBCardBody>
        <MDBRow>
            
          <MDBCol lg={(this.state.seeMoreImagesId!=post.id)?"6":"12"} xl={(this.state.seeMoreImagesId!=post.id)?"6":"12"}>
            {post.message&&
            <h5 className="dark-grey-text font-weight-bold">
           <span className=" blue-dark-text"> {post.message.substring(0, 50)}...</span>
            </h5>}
            <p>
            {((post.message.length>=200)&&(this.state.readMoreImagesId!=post.id))&&<>
            {post.message.substring(0, 200)}{"...   "}
            <a color='red'  onClick={() =>{this.setState({readMoreImagesId:post.id})}}>read more</a> 
          </>  }
            {((post.message.length>=200)&&(this.state.readMoreImagesId==post.id))&&<>
            {post.message}{"    "}
            <a color='red'  onClick={() =>{this.setState({readMoreImagesId:""})}}>read less</a> 
          </>  }
          {((post.message.length<200)&&(this.state.readMoreImagesId!=post.id))&&<>
            {post.message} 
          </>  }
            </p>
            <p className="dark-grey-text">
              {this.parseDate(post.created_time)}
            </p>
            
          </MDBCol>
          <MDBCol lg={(this.state.seeMoreImagesId!=post.id)?"6":"12"} xl={(this.state.seeMoreImagesId!=post.id)?"6":"12"}>
              {post.attachments&& 
   <>    
          
{(this.state.seeMoreImagesId==post.id)&&
<>
{this.postGallaryImages(post,true)}
</>
}
{(this.state.seeMoreImagesId!=post.id)&&
<>
{this.postGallaryImages(post,false)}
</>
} 
            </>
  } 
   </MDBCol>

           
        </MDBRow> 

     
      </MDBCardBody>
    </MDBCard>
  
          }
</>)}

        </MDBContainer>       
        
</>  
}
  </>
) 
 }
}

export default Posts;