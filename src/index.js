import React from 'react';
import ReactDom from 'react-dom';

/* functional component
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return (
        <div>Latitute: </div>
    );
};
*/

// class component
class App extends React.Component {
    constructor(props) {
        super(props);

        // this is the only time we do direct assignment
        // to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    // React says we have to define render!!
    render() {
        /* render 함수는 frequency하게 호출되기때문에, 
        여기에 호출함수를 작성하는 것보다 constructor에 넣어둬야한다.
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        */

        return <div>Latitude: {this.state.lat}</div>
    }
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);