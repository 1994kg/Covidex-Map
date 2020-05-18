import React from 'react';

//Customer 클래스 정의 (고객의 정보)
class Customer extends React.Component {
    render() {
        return(
            <div>
                <CustomerProfile id={this.props.id}
                                image={this.props.image}
                                name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday}
                                gender={this.props.gender}
                                job={this.props.job}/>
            </div>
        )
    }
}

//사용자의 id와 이미지를 렌더링
class CustomerProfile extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

//사용자의 남은 정보를 출력
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
            </div>
        )
    }

}
export default Customer;