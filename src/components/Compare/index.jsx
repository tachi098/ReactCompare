import './Compare.css'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import {errorNofication, successNofication} from './../../Common/nofications/nofication'

 const Compare = (props) => {
    const [show, setShow] = useState(false);

    const onRemoveAllbtn = () => {
        setShow(false)
        props.onRemoveAll();
    }

    const onRemoveItem = (id) => {
        props.onRemove(id)
        if(props.phones.length === 1){
            setShow(false);
        }
    }

    const onSortItems = () => {
        if(props.phones.length <= 1){
            errorNofication("Cần nhiều hơn 1 sản phẩm")
        }
        else{
            props.onSortPrice();
        }
    }

    const onBestItems = () => {
        if(props.phones.length <= 1){
            errorNofication("Cần nhiều hơn 1 sản phẩm")
        }
        else{
            props.onBestSeller();
        }
    }

    const onRamItems = () => {
        if(props.phones.length <= 1){
            errorNofication("Cần nhiều hơn 1 sản phẩm")
        }
        else{
            props.onSortRam();
        }
    }

    return (
        <div>
            <button style={{ display: props.phones.length > 0 ? '' : 'none' }} className="fab" onClick={() => setShow(true)}> + </button>

            <Modal
                show={show}
                onHide={() => { setShow(false) }}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header>
                    <Modal.Title>Bảng so sánh</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 my-4 mx-auto">
                                <h2 className="text-center">Bảng so sánh</h2>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="table-responsve">
                                            <table className="table table-striped table-hover">
                                                <thead className="thead-inverse">
                                                    <tr>
                                                        <th className="w-25"></th>
                                                        <th className="w-25"><button className="btn btn-danger" onClick={onBestItems}>Bán chạy</button></th>
                                                        <th className="w-25"><button className="btn btn-success" onClick={onSortItems}>Giá bán</button></th>
                                                        <th className="w-25"><button className="btn btn-warning" onClick={onRamItems}>Ram</button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className=" option">Tên sản phẩm</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <td style={{fontWeight: 'bold'}} key={index}>{phone.name}</td>
                                                            ))
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="option">Giá bán</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <td key={index}>{phone.price} VNĐ</td>
                                                            ))
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="option">Canera trước</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <td key={index}>{phone.camera} MP</td>
                                                            ))
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="option">Ram</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <td key={index}>{phone.ram} GB</td>
                                                            ))
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="option">Bộ nhớ trong</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <td key={index}>{phone.memory} GB</td>
                                                            ))
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="option">Pin</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <td key={index}>{phone.battery} mAh</td>
                                                            ))
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="option">Đã bán</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <td key={index}>{phone.buy}</td>
                                                            ))
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="w-25">Mua hàng</td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <th key={index}><button className="btn btn-primary" onClick={() => {successNofication("Đã thêm sản phẩm vào giỏ hàng")}}>Mua hàng</button></th>
                                                            ))
                                                        }
                                                    </tr>
                                                </tbody>
                                                <tfoot className="thead-inverse">
                                                    <tr>
                                                        <td className="option"></td>
                                                        {
                                                            props.phones.map((phone, index) =>(
                                                                <th key={index}><button className="btn btn-danger" onClick={() => onRemoveItem(phone.id)}>Bỏ so sánh</button></th>
                                                            ))
                                                        }
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShow(false) }}>
                        Đóng
                    </Button>
                    <Button variant="danger" onClick={onRemoveAllbtn}>Xoá tất cả</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Compare;