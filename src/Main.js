import React from 'react';
import Beast from './beast';
// forget to switch to new branch...
class Main extends React.Component{
    render() {
        return (
        <>
            <Beast name ={this.props.images[0].title} src ={this.props.images[0].image_url} description = {this.props.images[0].description} alt = {this.props.images[0].keyword} horns = {this.props.images[0].horns}/>
            <Beast name ={this.props.images[1].title} src ={this.props.images[1].image_url} description = {this.props.images[1].description} alt = {this.props.images[1].keyword} horns = {this.props.images[1].horns} />
            <Beast name ={this.props.images[2].title} src ={this.props.images[2].image_url} description = {this.props.images[2].description} alt = {this.props.images[2].keyword} horns = {this.props.images[2].horns} />
            <Beast name ={this.props.images[3].title} src ={this.props.images[3].image_url} description = {this.props.images[3].description} alt = {this.props.images[3].keyword} horns = {this.props.images[3].horns} />
            <Beast name ={this.props.images[4].title} src ={this.props.images[4].image_url} description = {this.props.images[4].description} alt = {this.props.images[4].keyword} horns = {this.props.images[4].horns} />
            <Beast name ={this.props.images[5].title} src ={this.props.images[5].image_url} description = {this.props.images[5].description} alt = {this.props.images[5].keyword} horns = {this.props.images[5].horns} />
            <Beast name ={this.props.images[7].title} src ={this.props.images[7].image_url} description = {this.props.images[7].description} alt = {this.props.images[7].keyword} horns = {this.props.images[6].horns} />
            <Beast name ={this.props.images[8].title} src ={this.props.images[8].image_url} description = {this.props.images[8].description} alt = {this.props.images[8].keyword} horns = {this.props.images[7].horns} />
            <Beast name ={this.props.images[9].title} src ={this.props.images[9].image_url} description = {this.props.images[9].description} alt = {this.props.images[9].keyword} horns = {this.props.images[8].horns} />
            <Beast name ={this.props.images[10].title} src ={this.props.images[10].image_url} description = {this.props.images[10].description} alt = {this.props.images[10].keyword} horns = {this.props.images[10].horns} />
            <Beast name ={this.props.images[11].title} src ={this.props.images[11].image_url} description = {this.props.images[11].description} alt = {this.props.images[11].keyword} horns = {this.props.images[11].horns} />
            <Beast name ={this.props.images[12].title} src ={this.props.images[12].image_url} description = {this.props.images[12].description} alt = {this.props.images[12].keyword} horns = {this.props.images[12].horns} />
            <Beast name ={this.props.images[13].title} src ={this.props.images[13].image_url} description = {this.props.images[13].description} alt = {this.props.images[13].keyword} horns = {this.props.images[13].horns} />
            <Beast name ={this.props.images[14].title} src ={this.props.images[14].image_url} description = {this.props.images[14].description} alt = {this.props.images[14].keyword} horns = {this.props.images[14].horns} />
            <Beast name ={this.props.images[15].title} src ={this.props.images[15].image_url} description = {this.props.images[15].description} alt = {this.props.images[15].keyword} horns = {this.props.images[15].horns} />
            <Beast name ={this.props.images[16].title} src ={this.props.images[16].image_url} description = {this.props.images[16].description} alt = {this.props.images[16].keyword} horns = {this.props.images[16].horns} />
            <Beast name ={this.props.images[17].title} src ={this.props.images[17].image_url} description = {this.props.images[17].description} alt = {this.props.images[17].keyword} horns = {this.props.images[17].horns} />
            <Beast name ={this.props.images[18].title} src ={this.props.images[18].image_url} description = {this.props.images[18].description} alt = {this.props.images[18].keyword} horns = {this.props.images[18].horns} />
            <Beast name ={this.props.images[19].title} src ={this.props.images[19].image_url} description = {this.props.images[19].description} alt = {this.props.images[19].keyword} horns = {this.props.images[19].horns} />

        </>
        )
    }
}
export default Main;