import { ToastContainer } from 'react-toastify'
import PhoneData from './Common/PhoneData'
import React, { Suspense, useState } from 'react';
import {errorNofication, successNofication} from './Common/nofications/nofication'

const UseCompare = React.lazy(() => import('./components/Compare'));

function App() {
  const [phones, setPhones] = useState([]);

  const addPhoneCompare = (phone) => {
    if (phones.length < 3) {
      if (!phones.includes(phone)) {
        setPhones([...phones, phone]);
        successNofication("Thêm sản phẩm thành công")
      }
      else {
        errorNofication("Sản phẩm đã tồn tại")
      }
    }
    else {
      errorNofication("Chỉ thêm tối đa 3 sản phẩm")
    }
  }

  const onRemoveAll = () => {
    setPhones([]);
  }

  const onRemove = (id) => {
    let ponesNew = phones.filter((item) => item.id !== id);
    setPhones(ponesNew);
  }

  const onBestSeller = () => {
    let newPhone = [...phones].sort((a, b) => -a.buy + b.buy);
    setPhones(newPhone);
  }

  const onSortPrice = () => {
    let newPhone = [...phones].sort((a, b) => a.price - b.price);
    setPhones(newPhone);
  }

  const onSortRam = () => {
    let newPhone = [...phones].sort((a, b) => -a.ram + b.ram);
    setPhones(newPhone);
  }

  return (
    
    <div>
    <Suspense fallback={<h1>Loading...</h1>}>
    <ToastContainer />
      <div className="container-fluid" style={{ position: 'relative' }}>
        <div className="row">
          {
            PhoneData.map((phone, index) => (
              <div key={index} className="col-md-4">
                <div className="card" >
                  <img src={phone.image} className="card-img-top" alt="..." width={100} height={300} />
                  <div className="card-body">
                    <div> <span><h3>{phone.name}</h3></span>
                      <span>{phone.price} VND</span> </div>
                    <button className="btn btn-success" onClick={() => { addPhoneCompare(phone) }}>So sánh</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <UseCompare
        phones={phones}
        onRemoveAll={onRemoveAll}
        onRemove={onRemove}
        onSortPrice={onSortPrice}
        onBestSeller={onBestSeller}
        onSortRam={onSortRam}
      />
      </Suspense>
    </div>
    
  );
}

export default App;
