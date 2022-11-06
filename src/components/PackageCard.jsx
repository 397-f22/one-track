import "./PackageCard.css"
import { useState } from "react";
import Modal from "./Modal";
import PackageModal from "./PackageModal";

const PackageCard = ({images, data}) => {
    const {carrier, estimated_delivery, last_checkpoint_location, package_name, response} = data
    const carFormatted = carrier.toLowerCase();    
    const deliv_date = new Date(estimated_delivery).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });

    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
  
    return(
        <>
        <div className="card m-1 p-2 flex-row" onClick={openModal}>            
            <div className="card-body">
                <div className="img-wrapper">
                    <img src={images[carFormatted].url} className="carrier-image"></img>
                </div>
                <div className="package-info">
                    <h5 className="card-title">{package_name}</h5>
                    <p className="card-text"><b>Delivery:</b> {deliv_date}</p>
                    <p className="card-text"><b>Status:</b> {response}</p>
                </div>
            </div>
        </div>
        <Modal open={open} close={closeModal}>
            <PackageModal data={data}/>
        </Modal>
        </>
    )
}

export default PackageCard;

{/* <div className="package_card">
            
            <p>Image</p>
            <h3>{title}</h3>
            <div>
                 <p>{props.numVisited}</p>
            </div>
        </div> */}