import React from 'react';
import ReactDom from 'react-dom';

// App 클래스
class App extends React.Component {
    constructor(props) {
        // props를 parent에 전달
        super(props);

        // state 초기화
        this.state = { lat: null };

        // 비동기함수 호출
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // state 업데이트
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                // 에러 호출
                console.log(err);
            }
        );
    }

    // render 함수 호출 / setState 결과값 return 후 rerender.
    render() {
        // JSX 리턴
        return <div>latitude: {this.state.lat}</div>
    }
}

// 화면에 render
ReactDom.render(
    <App />,
    document.querySelector('#root')
);