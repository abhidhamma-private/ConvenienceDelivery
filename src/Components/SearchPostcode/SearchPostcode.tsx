import React from 'react';
import DaumPostcode from 'react-daum-postcode';

class Postcode extends React.Component<any, any, any> {
  constructor(props) {
    super(props);
    this.state = {
      fullAddress: this.props.fullAddress,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange(fullAddress) {
    this.props.onProductCountChange(fullAddress);
  }
  public handleAddress = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    this.props.handleChange(fullAddress);
  };

  public render() {
    return (
      <DaumPostcode
        onComplete={this.handleAddress}
        shorthand={true}
        defaultQuery={'제주특별자치도 서귀포시 법환동'}
        style={{
          position: 'fixed',
          top: '100px',
          display: `${this.props.postDisplay ? 'block' : 'none'}`,
          border: '5px solid #f7f7f7',
        }}
        height={'400'}
        width={'300'}
        autoClose={true}
      />
    );
  }
}
export default Postcode;
