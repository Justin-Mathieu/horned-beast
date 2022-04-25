import React from 'react';
import Beast from './beast';
import image1 from './image1.png';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

class Main extends React.Component{
    render() {
        return (
        <>
            <Beast name ={'horned beast one'} src ={image1} description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ac turpis egestas sed tempus urna et pharetra pharetra. Id eu nisl nunc mi ipsum. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Turpis egestas integer eget aliquet nibh praesent tristique. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Tincidunt praesent semper feugiat nibh sed pulvinar. Venenatis cras sed felis eget velit aliquet sagittis. Vestibulum lectus mauris ultrices eros in. Nullam ac tortor vitae purus faucibus ornare. Justo eget magna fermentum iaculis eu.' />
            <Beast name = {'horned beast two'} src={image2} description = 'sed turpis tincidunt id aliquet risus feugiat. Sit amet nisl purus in mollis nunc sed id. Lacus vestibulum sed arcu non. Pretium viverra suspendisse potenti nullam ac. Et leo duis ut diam. Iaculis at erat pellentesque adipiscing commodo elit. Pretium fusce id velit ut tortor pretium viverra. Nunc congue nisi vitae suscipit tellus mauris a. Cras sed felis eget velit aliquet sagittis id consectetur. Cras sed felis eget velit aliquet sagittis id'/>
            <Beast name = {'horned beast three'} src={image3} description='Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. In dictum non consectetur a erat nam. Vitae congue eu consequat ac felis donec et. Bibendum arcu vitae elementum curabitur vitae nunc sed. Arcu non sodales neque sodales. Bibendum neque egestas congue quisque egestas. Facilisis volutpat est velit egestas. Sapien nec sagittis aliquam malesuada bibendum arcu.'/>
        </>
        )
    }
}
export default Main;