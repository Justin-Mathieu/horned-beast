import React from 'react';
import Beast from './beast';
// forget to switch to new branch...
class Main extends React.Component {
    render() {
        return (
            <>
                {this.props.beastData.map(beast => (
                    <Beast
                        key={beast._id}
                        title={beast.title}
                        src={beast.image_url}
                        description={beast.description}
                        keyword={beast.keyword}
                        horns={beast.horns}
                        handleOpenModal={this.props.handleOpenModal}
                    />
                ))}

            </>
        )
    }
}
export default Main;