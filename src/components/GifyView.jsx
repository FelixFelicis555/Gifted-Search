import React,{ Component} from 'react';

export default class GifyView extends Component{

    constructor(props){
        super(props);
        this.state={
            play:false,
            showControls:false
        }
    }
    
    playPause=()=>{
        const { giphy}=this.props ;
        var video=document.getElementById(giphy.id);
        if(video && video.paused)
        {
          video.play();
        }
        else if(video && video.play){
            video.pause();
        }
        this.setState({play:!this.state.play});
    }

    render() {

        const {giphy}=this.props
        return (
             
            <div className="giphy-view-container" onClick={this.playPause}>
                <video id={giphy.id} style={{ width: `100%` }}
                    onEnded={() => this.setState({ play: !this.state.play })}
                    onLoadedData={() => this.setState({ showControls: true })}>
                    <source src={giphy.images.fixed_width.mp4} type="video/mp4" />
                </video>
                {
                    this.state.showControls
                    &&
                    <div>
                        <button className="giphy-button" >{this.state.play ? "Pause" : "Play"}</button>
                    </div>
                }
            </div>

        )
    }

}